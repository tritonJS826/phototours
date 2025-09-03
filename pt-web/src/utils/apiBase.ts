type EnvLike = {env?: {VITE_API_BASE_URL?: string}};

function getEnvBase(): string {
  const meta = (import.meta as unknown as EnvLike);
  const v = meta?.env?.VITE_API_BASE_URL ? meta.env.VITE_API_BASE_URL : "";

  return v ?? "";
}

function normalizeBase(input: string): string {
  const raw = input.trim();
  const fallback = "http://localhost:8000";
  const base = raw === "" ? fallback : raw;

  try {
    const u = new URL(base, window.location.origin);
    let p = u.pathname.replace(/\/+$/, "");
    if (p.toLowerCase().endsWith("/general")) {
      p = p.slice(0, -"/general".length);
    }
    u.pathname = p || "/";

    return `${u.origin}${u.pathname === "/" ? "" : u.pathname}`;
  } catch {
    return base.replace(/\/+$/, "").replace(/\/general$/i, "");
  }
}

export const API_BASE = normalizeBase(getEnvBase());

export function buildApiUrl(path: string): string {
  const segment = path.startsWith("/") ? path : `/${path}`;

  return `${API_BASE}${segment}`;
}
