function pickRawBase(): string {
  let fromWindow: string | undefined;
  if (typeof window !== "undefined") {
    const w = window as unknown as { __ENV?: { API_BASE_URL?: string } };
    fromWindow = w.__ENV?.API_BASE_URL;
  }

  let fromProcess: string | undefined;
  if (typeof process !== "undefined") {
    const p = process as unknown as { env?: { VITE_API_BASE_URL?: string } };
    fromProcess = p.env?.VITE_API_BASE_URL;
  }

  if (fromWindow) {
    return fromWindow;
  }
  if (fromProcess) {
    return fromProcess;
  }

  return "http://localhost:8000";
}

function normalizeBase(input: string): string {
  const trimmed = input.trim();
  if (trimmed === "") {
    return "http://localhost:8000";
  }

  return trimmed.replace(/\/+$/, "").replace(/\/general$/i, "");
}

export function getApiBase(): string {
  return normalizeBase(pickRawBase());
}

export function buildApiUrl(path: string): string {
  const base = getApiBase();

  return base + (path.startsWith("/") ? path : "/" + path);
}
