// Environment variables for runtime use
export const env = {
  VITE_API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
  VITE_APP_TITLE: import.meta.env.VITE_APP_TITLE || "PhotoTours",
  ENV_TYPE: import.meta.env.ENV_TYPE || "dev",
};
