import {env} from "src/utils/env/env";

export function buildApiUrl(path: string): string {
  const segment = path.startsWith("/") ? path : `/${path}`;

  return `${env.VITE_API_BASE_URL}${segment}`;
}
