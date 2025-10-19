// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://your-site.pages.dev", // デプロイ後に実際のURLに変更
  build: {
    assets: "_astro",
  },
});
