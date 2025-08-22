import react from "@vitejs/plugin-react-swc";
import path from "path";
import {defineConfig, loadEnv, type UserConfig} from "vite";
import eslint from "vite-plugin-eslint";
import {VitePWA} from "vite-plugin-pwa";
import viteTsconfigPaths from "vite-tsconfig-paths";

// eslint-disable-next-line no-restricted-exports
export default defineConfig(() => {
  const rawEnv = loadEnv("", process.cwd(), "");

  const validatedEnvs = {
    VITE_API_BASE_URL: rawEnv.VITE_API_BASE_URL,
    VITE_APP_TITLE: rawEnv.VITE_APP_TITLE || "PhotoTours",
    ENV_TYPE: rawEnv.ENV_TYPE,
  };

  const requiredVars = ["VITE_API_BASE_URL", "ENV_TYPE"];
  const missingVars = requiredVars.filter(varName => !validatedEnvs[varName as keyof typeof validatedEnvs]);

  if (missingVars.length > 0) {
    throw new Error(`Missing required environment variables: ${missingVars.join(", ")}`);
  }

  if (!["dev", "prod"].includes(validatedEnvs.ENV_TYPE)) {
    throw new Error(`ENV_TYPE must be 'dev' or 'prod', got: ${validatedEnvs.ENV_TYPE}`);
  }

  const isProd = validatedEnvs.ENV_TYPE === "prod";

  const config: UserConfig = {
    build: {
      target: "esnext",
      outDir: "build",
    },

    resolve: {alias: {src: path.resolve(__dirname, "./src")}},
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
    define: {
      "process.env": {
        VITE_API_BASE_URL: validatedEnvs.VITE_API_BASE_URL,
        VITE_APP_TITLE: validatedEnvs.VITE_APP_TITLE,
      },
    },

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

