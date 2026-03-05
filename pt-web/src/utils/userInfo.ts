export interface UserLocation {
  city: string;
  country_name: string;
}

export interface UserInfo {
  language: string;
  timezone: string;
  location: UserLocation | null;
}

const STORAGE_KEY = "user_info";
// eslint-disable-next-line no-magic-numbers
const CACHE_DURATION = 1000 * 60 * 60 * 24 * 30; // 30 days

interface CachedUserInfo extends UserInfo {
  cachedAt: number;
}

function getCachedUserInfo(): UserInfo | null {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    return null;
  }

  try {
    const cached: CachedUserInfo = JSON.parse(stored);
    if (Date.now() - cached.cachedAt > CACHE_DURATION) {
      return null;
    }

    return ({
      language: cached.language,
      location: cached.location,
      timezone: cached.timezone,
    });
  } catch {
    return null;
  }
}

function setCache(data: UserInfo): void {
  const cached: CachedUserInfo = {...data, cachedAt: Date.now()};
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cached));
}

/**
 * Data will be cached for 1 {@link CACHE_DURATION}
 */
export async function getUserInfo(): Promise<UserInfo> {
  const cached = getCachedUserInfo();
  if (cached) {
    return cached;
  }

  const language = navigator.language;
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  let location: UserLocation | null = null;

  try {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    location = {
      city: data.city || "",
      country_name: data.country_name || "",
    };
  } catch {
    location = null;
  }

  const userInfo = {language, timezone, location};
  setCache(userInfo);

  return userInfo;
}
