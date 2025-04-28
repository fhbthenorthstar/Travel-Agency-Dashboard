import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import {sentryReactRouter, type SentryReactRouterBuildOptions} from "@sentry/react-router";

const sentryConfig: SentryReactRouterBuildOptions = {
  org: "ifc-technologies",
  project: "travel-agecny-dashboard",
  // An auth token is required for uploading source maps.
  authToken: "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"
  // ...
};

export default defineConfig(config => {
  return {
    plugins: [tailwindcss(), tsconfigPaths(), reactRouter(), sentryReactRouter(sentryConfig, config)],
    sentryConfig,
    ssr: {
      noExternal: [/@syncfusion/]
    }
  };
});
