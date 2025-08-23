import {env} from "src/config/env";

const RAW_BASE = (env.VITE_API_BASE_URL ?? "").trim().replace(/\/+$/, "");
const BASE = RAW_BASE ? `${RAW_BASE}${/\/general\/?$/.test(RAW_BASE) ? "" : "/general"}` : "/general";

const ABSOLUTE_RE = /^https?:\/\//i;
const HTTP_NO_CONTENT = 204;

const FILES_BASE = BASE.replace(/\/general\/?$/i, "");

function buildUrl(base: string, path: string): string {
  const cleanBase = base.replace(/\/+$/, "");
  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  return `${cleanBase}${cleanPath}`;
}

export async function fetchData<T>(path: string, init?: RequestInit): Promise<T> {
  const url = buildUrl(BASE, path);
  const res = await fetch(url, {
    headers: {"Content-Type": "application/json", ...(init?.headers ?? {})},
    ...init,
  });

  if (!res.ok) {
    let msg = res.statusText;
    try {
      const ct = res.headers.get("content-type") ?? "";
      if (ct.includes("application/json")) {
        const j = (await res.json()) as { error?: string; message?: string };
        msg = j?.error || j?.message || msg;
      } else {
        const t = await res.text();
        msg = t || msg;
      }
    } catch (e) {
      msg = msg || (e instanceof Error ? e.message : String(e));
    }
    throw new Error(msg);
  }

  if (res.status === HTTP_NO_CONTENT) {
    return undefined as unknown as T;
  }

  const ct = res.headers.get("content-type") ?? "";
  if (ct.includes("application/json")) {
    return (await res.json()) as T;
  }

  return (await res.text()) as unknown as T;
}

export function fileUrl(url?: string): string {
  if (!url) {
    return "";
  }
  if (ABSOLUTE_RE.test(url)) {
    return url;
  }

  return buildUrl(FILES_BASE, url);
}
