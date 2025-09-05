/* eslint-disable no-restricted-exports */
/* eslint-disable no-magic-numbers */
import react from "@vitejs/plugin-react-swc";
import path from "path";
import {defineConfig, loadEnv, type UserConfig} from "vite";
import eslint from "vite-plugin-eslint";
import {VitePWA} from "vite-plugin-pwa";
import viteTsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => {
  const env = loadEnv("", process.cwd(), "");
  const isProd = env.ENV_TYPE === "prod";

  const config: UserConfig = {
    build: {target: "esnext", outDir: "build"},
    resolve: {alias: {src: path.resolve(__dirname, "./src")}},
    plugins: [
      react(),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      eslint({exclude: ["/virtual:/**", "/sb-preview/**"], failOnError: false}) as any,
      viteTsconfigPaths(),
    ],
    define: {
      "process.env": {
        VITE_API_BASE_URL: env.VITE_API_BASE_URL,
        VITE_APP_TITLE: env.VITE_APP_TITLE,
      },
    },
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
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      }) as any,
    );
  }

  return config;
});
