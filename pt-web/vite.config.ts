import react from "@vitejs/plugin-react-swc";
import {cleanEnv} from "envalid";
import path from "path";
import {defineConfig, loadEnv, type UserConfig} from "vite";
import eslint from "vite-plugin-eslint";
import {VitePWA} from "vite-plugin-pwa";
import viteTsconfigPaths from "vite-tsconfig-paths";

// eslint-disable-next-line no-restricted-exports
export default defineConfig(async() => {
  const rawEnv = loadEnv("", process.cwd(), "");

  const {envSchema} = await import("./src/config/env");
  // Use the schema from env.ts for validation
  const validatedEnvs = cleanEnv(rawEnv, envSchema);

  const isProd = validatedEnvs.ENV_TYPE === "prod";

  const config: UserConfig = {
    build: {
      target: "esnext",
      outDir: "build",
    },

    resolve: {alias: {src: path.resolve(__dirname, "src")}},
    plugins: [
      react(),
      eslint(
        // Exclude "virtual" and "sb-preview" to fix bug with vite-plugin-eslint and Storybook
        // https://github.com/storybookjs/builder-vite/issues/535#issuecomment-1507352550
        // https://github.com/vitejs/vite/issues/15374
        {
          exclude: ["/virtual:/**", "/sb-preview/**"],
          failOnError: false,
        },
      ),
      viteTsconfigPaths(),
    ],
    define: {"process.env": {VITE_API_BASE_URL: validatedEnvs.VITE_API_BASE_URL}},

    server: {
      host: true,
      port: 5174,
      strictPort: true,
    },
  } as const;

  if (isProd) {
    config.plugins?.push(
      VitePWA({
        registerType: "autoUpdate",
        includeAssets: ["favicon.svg", "favicon.ico", "robots.txt", "apple-touch-icon.png"],
        // Manifest ...
        workbox: {
          // eslint-disable-next-line no-magic-numbers
          maximumFileSizeToCacheInBytes: 200 * 1024 * 1024,
        },
      }),
    );
  }

  return config;
});

