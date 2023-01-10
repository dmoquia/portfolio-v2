import { defineConfig } from "vite";
import inject from "@rollup/plugin-inject";
import htmlPurge from "vite-plugin-purgecss";

export default defineConfig({
  root: "./",
  build: {
    chunkSizeWarningLimit: 1600,
    outDir: "dist",
  },
  publicDir: "assets",
  plugins: [
    inject({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
    }),
    htmlPurge(),
  ],
  css: {
    devSourcemap: true,
  },
});
