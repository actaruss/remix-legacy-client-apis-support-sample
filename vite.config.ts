import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig, loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const isStorybook = process.argv[1]?.includes("storybook");

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      !isStorybook &&
        remix({
          ignoredRouteFiles: ["**/*.css"],
        }),
      tsconfigPaths(),
    ],
    "process.env": { isStorybook },
  };
});
