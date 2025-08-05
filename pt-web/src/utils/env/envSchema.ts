import {str} from "envalid";

export const envSchema = {
  API_BASE_PATH: str(),
  ENV_TYPE: str(),
  VITE_API_BASE_URL: str({default: "http://localhost:8000"}),
};
