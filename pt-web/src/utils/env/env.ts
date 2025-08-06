import {cleanEnv} from "envalid";
import {envSchema} from "src/utils/env/envSchema";

export const env = cleanEnv(process.env, envSchema);
