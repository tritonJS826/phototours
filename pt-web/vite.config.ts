/* eslint-disable no-restricted-exports */
/* eslint-disable no-magic-numbers */
// eslint-disable-next-line no-restricted-imports
import {envSchema} from "./src/utils/env/envSchema";
import react from "@vitejs/plugin-react-swc";
import {cleanEnv} from "envalid";
import path from "path";
import {defineConfig, loadEnv, type UserConfig} from "vite";
import eslint from "vite-plugin-eslint";
import {VitePWA} from "vite-plugin-pwa";
import viteTsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => {
  const env = loadEnv("", process.cwd(), "");
  const validatedEnvs = cleanEnv(env, envSchema);
  const isProd = validatedEnvs.ENV_TYPE === "prod";

  const config: UserConfig = {
    build: {target: "esnext", outDir: "build"},
    resolve: {alias: {src: path.resolve(__dirname, "./src")}},
    plugins: [
      react(),
      eslint({exclude: ["/virtual:/**", "/sb-preview/**"], failOnError: false}),
      viteTsconfigPaths(),
    ],
    define: {"process.env": validatedEnvs},
    server: {
      host: true,
      port: 5173,
      strictPort: true,
      allowedHosts: ["localhost", "host.docker.internal"],
    },
  };

  if (isProd) {
    config.plugins?.push(
      VitePWA({
        registerType: "autoUpdate",
        includeAssets: ["favicon.svg", "favicon.ico", "robots.txt", "apple-touch-icon.png"],
        workbox: {maximumFileSizeToCacheInBytes: 200 * 1024 * 1024},
      }),
    );
  }

  return config;
});
