import { defineConfig } from "vite";
import inject from "@rollup/plugin-inject";
import htmlPurge from "vite-plugin-purgecss";

export default defineConfig({
  root: "./",
  build: {
    assetsInclude: ["**/*[.gltf,.pdf]"],
    chunkSizeWarningLimit: 4000,
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
