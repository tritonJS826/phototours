import {env} from "src/utils/env/env";

const API_BASE_URL = env.API_BASE_PATH;

export interface MetaTag {
  name: string;
  content: string;
}

export interface Metadata {
  title?: string;
  description?: string;
  keywords?: string;
  metaTags?: MetaTag[];
}

export const defaultMetadata: Metadata = {
  title: "PhotoTours tesr",
  description: "Explore amazing photo tours",
  keywords: "photo, tours, travel, photography",
};

export const fetchMetadata = async (url: string): Promise<Metadata> => {
  // eslint-disable-next-line no-console
  console.warn("fetch metadata from server is not implemented");

  return defaultMetadata;

  try {
    const response = await fetch(`${API_BASE_URL}/metadata?url=${url}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    return data || defaultMetadata;
  } catch (error) {

    // eslint-disable-next-line no-console
    console.error("Failed to fetch metadata, settled default metadata:", error);

    return defaultMetadata;
  }
};
