import {str} from "envalid";

export const envSchema = {
  API_BASE_PATH: str(),
  VITE_API_BASE_URL: str(),
  ENV_TYPE: str(),
};
