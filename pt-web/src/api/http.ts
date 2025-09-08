function safeUrl(input?: string): URL | undefined {
  const v = (input ?? "").trim();
  if (v === "") {
    return undefined;
  }
  try {
    return new URL(v);
  } catch {
    return undefined;
  }
}

const DEFAULT_TIMEOUT_MS = 15000;
const HTTP_NO_CONTENT = 204;
const HTTP_UNAUTHORIZED = 401;
const CT_JSON = "application/json";

const ENV_API_BASE = import.meta.env.VITE_API_BASE_URL;
const ENV_FILES_BASE = import.meta.env.VITE_FILES_BASE_URL;

const API_BASE = safeUrl(ENV_API_BASE);
const FILES_BASE = safeUrl(ENV_FILES_BASE ?? ENV_API_BASE);

interface RequestOptions extends RequestInit {
  timeoutMs?: number;
  auth?: boolean;
}

export async function fetchData<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), options.timeoutMs ?? DEFAULT_TIMEOUT_MS);

  try {
    const url = API_BASE ? new URL(path, API_BASE).toString() : path;

    const token = localStorage.getItem("token") ?? "";
    const wantAuth = options.auth !== false;

    const headers = new Headers(options.headers as HeadersInit | undefined);

    if (!(options.body instanceof FormData) && !headers.has("Content-Type")) {
      headers.set("Content-Type", CT_JSON);
    }
    if (wantAuth && token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    const res = await fetch(url, {
      ...options,
      headers,
      signal: controller.signal,
    });

    if (!res.ok) {
      if (res.status === HTTP_UNAUTHORIZED) {
        throw new Error("Unauthorized");
      }
      let msg = res.statusText;
      try {
        const ct = res.headers.get("content-type") ?? "";
        if (ct.includes(CT_JSON)) {
          const j = (await res.json()) as { error?: string; message?: string };
          msg = j?.error ?? j?.message ?? msg;
        } else {
          const t = await res.text();
          msg = t === "" ? msg : t;
        }
      } catch {
        void 0;
      }
      throw new Error(msg || "Request failed");
    }

    if (res.status === HTTP_NO_CONTENT) {
      return undefined as unknown as T;
    }

    const ct = res.headers.get("content-type") ?? "";
    if (ct.includes(CT_JSON)) {
      return (await res.json()) as T;
    }

    return (await res.text()) as unknown as T;
  } finally {
    clearTimeout(timeout);
  }
}

export function fileUrl(url?: string): string {
  if (!url) {
    return "";
  }
  if (/^https?:\/\//i.test(url)) {
    return url;
  }

  return FILES_BASE ? new URL(url, FILES_BASE).toString() : url;
}
