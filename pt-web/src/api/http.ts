const BASE = import.meta.env.VITE_API_BASE_URL ?? "";
export const USE_MOCK = (import.meta.env.VITE_USE_MOCK ?? "0") === "1";

export async function http<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    headers: {"Content-Type": "application/json", ...(init?.headers || {})},
    ...init,
  });
  const text = await res.text();
  const data = text ? JSON.parse(text) : null;
  if (!res.ok) {
    throw new Error(data?.error || data?.message || res.statusText);
  }

  return data as T;
}

export function fileUrl(url: string) {
  if (!url) {
    return url;
  }
  if (url.startsWith("http")) {
    return url;
  }
  const base = BASE.replace(/\/general$/i, "");

  return `${base}${url}`;
}
