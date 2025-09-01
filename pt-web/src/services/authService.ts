import type {
  AuthResponse,
  ChangePasswordData,
  LoginData,
  RegisterData,
  User,
} from "src/types/auth";

function normalizeBase(input?: string): string {
  const raw = (input ?? "").trim();
  if (!raw) {
    return "http://localhost:8000";
  }
  try {
    const u = new URL(raw, window.location.origin);
    const cleanPath = u.pathname.replace(/\/+$/, "").replace(/\/general$/i, "");
    u.pathname = cleanPath || "/";

    return `${u.origin}${u.pathname === "/" ? "" : u.pathname}`;
  } catch {
    return raw.replace(/\/+$/, "").replace(/\/general$/i, "");
  }
}

const API_BASE = normalizeBase(import.meta.env.VITE_API_BASE_URL);

function buildUrl(path: string): string {
  return `${API_BASE}${path.startsWith("/") ? path : `/${path}`}`;
}

async function parseJsonSafe(res: Response) {
  const ct = res.headers.get("content-type") ?? "";
  if (ct.includes("application/json")) {
    return res.json();
  }
  const text = await res.text();
  throw new Error(text || `${res.status} ${res.statusText}`);
}

class AuthService {

  public async register(data: RegisterData): Promise<AuthResponse> {
    const res = await fetch(buildUrl("/auth/register"), {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const err = await parseJsonSafe(res).catch(e => ({error: String(e)}));
      throw new Error((err as {error?: string}).error || "Registration failed");
    }

    return parseJsonSafe(res);
  }

  public async login(data: LoginData): Promise<AuthResponse> {
    const res = await fetch(buildUrl("/auth/login"), {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const err = await parseJsonSafe(res).catch(e => ({error: String(e)}));
      throw new Error((err as {error?: string}).error || "Login failed");
    }

    return parseJsonSafe(res);
  }

  public async changePassword(data: ChangePasswordData): Promise<{message: string}> {
    const res = await fetch(buildUrl("/auth/change-password"), {
      method: "POST",
      headers: this.getAuthHeaders(),
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const err = await parseJsonSafe(res).catch(e => ({error: String(e)}));
      throw new Error((err as {error?: string}).error || "Password change failed");
    }

    return parseJsonSafe(res);
  }

  public async getProfile(): Promise<{user: User}> {
    const res = await fetch(buildUrl("/auth/profile"), {
      method: "GET",
      headers: this.getAuthHeaders(),
    });
    if (!res.ok) {
      const err = await parseJsonSafe(res).catch(e => ({error: String(e)}));
      throw new Error((err as {error?: string}).error || "Profile fetch failed");
    }

    return parseJsonSafe(res);
  }

  public logout(): void {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }

  public setAuthData(token: string, user: User): void {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
  }

  public getStoredToken(): string | null {
    return localStorage.getItem("token");
  }

  public getStoredUser(): User | null {
    const s = localStorage.getItem("user");

    return s ? (JSON.parse(s) as User) : null;
  }

  private getAuthHeaders(): HeadersInit {
    const token = localStorage.getItem("token");

    return {
      "Content-Type": "application/json",
      ...(token ? {Authorization: `Bearer ${token}`} : {}),
    };
  }

}

export const authService = new AuthService();
