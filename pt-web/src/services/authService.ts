import type {AuthResponse, ChangePasswordData, LoginData, RegisterData, User} from "src/types/auth";
import {buildApiUrl} from "src/utils/apiBase";

const MSG_REG_FAILED = "Registration failed";
const MSG_LOGIN_FAILED = "Login failed";
const MSG_CHANGE_FAILED = "Password change failed";
const MSG_PROFILE_FAILED = "Profile fetch failed";

async function parseJsonSafe(res: Response) {
  const ct = res.headers.get("content-type") ?? "";
  if (ct.includes("application/json")) {
    return res.json();
  }
  const text = await res.text();
  const fallback = `${res.status} ${res.statusText}`;
  const message = text === "" ? fallback : text;
  throw new Error(message);
}

function pickErrorMessage(obj: unknown, fallback: string) {
  if (obj && typeof obj === "object") {
    const maybe = obj as { error?: unknown };
    if (typeof maybe.error === "string" && maybe.error.trim() !== "") {
      return maybe.error;
    }
  }

  return fallback;
}

class AuthService {

  public async register(data: RegisterData): Promise<AuthResponse> {
    const res = await fetch(buildApiUrl("general/auth/register"), {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const parsed = await parseJsonSafe(res).catch(e => ({error: String(e)}));
      const msg = pickErrorMessage(parsed, MSG_REG_FAILED);
      throw new Error(msg);
    }

    return parseJsonSafe(res);
  }

  public async login(data: LoginData): Promise<AuthResponse> {
    const res = await fetch(buildApiUrl("general/auth/login"), {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const parsed = await parseJsonSafe(res).catch(e => ({error: String(e)}));
      const msg = pickErrorMessage(parsed, MSG_LOGIN_FAILED);
      throw new Error(msg);
    }

    return parseJsonSafe(res);
  }

  public async changePassword(data: ChangePasswordData): Promise<{message: string}> {
    const res = await fetch(buildApiUrl("general/auth/change-password"), {
      method: "POST",
      headers: this.getAuthHeaders(),
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const parsed = await parseJsonSafe(res).catch(e => ({error: String(e)}));
      const msg = pickErrorMessage(parsed, MSG_CHANGE_FAILED);
      throw new Error(msg);
    }

    return parseJsonSafe(res);
  }

  public async getProfile(): Promise<{user: User}> {
    const res = await fetch(buildApiUrl("general/auth/profile"), {
      method: "GET",
      headers: this.getAuthHeaders(),
    });
    if (!res.ok) {
      const parsed = await parseJsonSafe(res).catch(e => ({error: String(e)}));
      const msg = pickErrorMessage(parsed, MSG_PROFILE_FAILED);
      throw new Error(msg);
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
    if (s === null) {
      return null;
    }

    return JSON.parse(s) as User;
  }

  private getAuthHeaders(): HeadersInit {
    const token = localStorage.getItem("token");
    const base: HeadersInit = {"Content-Type": "application/json"};
    if (token && token.trim() !== "") {
      return {...base, Authorization: `Bearer ${token}`};
    }

    return base;
  }

}

export const authService = new AuthService();
