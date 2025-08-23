import {str, url} from "envalid";

export const envSchema = {
  VITE_API_BASE_URL: url(),
  ENV_TYPE: str({choices: ["dev", "prod"]}),
};

// For runtime use in components
export const env = {
  VITE_API_BASE_URL: process.env.VITE_API_BASE_URL,
  ENV_TYPE: process.env.ENV_TYPE || "dev",
};
