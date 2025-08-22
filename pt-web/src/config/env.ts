import {str, url} from "envalid";

export const envSchema = {
  VITE_API_BASE_URL: url(),
  VITE_APP_TITLE: str(),
  ENV_TYPE: str({choices: ["dev", "prod"]}),
};

// For runtime use in components
export const env = {
  VITE_API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
  VITE_APP_TITLE: import.meta.env.VITE_APP_TITLE || "PhotoTours",
  ENV_TYPE: import.meta.env.ENV_TYPE || "dev",
};
