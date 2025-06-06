import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  // Указываем базовый путь для GitHub Pages
  base: "/evweb/",
  root: "./",

  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@assets": path.resolve(__dirname, "src/assets"),
    },
    extensions: [".js"],
  },

  server: {
    port: 3000,
    open: true,
  },

  build: {
    outDir: "dist",
    minify: "esbuild", // это по умолчанию
    sourcemap: false, // отключи если не нужен source-map
    assetsDir: "assets",
    rollupOptions: {
      input: "./index.html",
      output: {
        entryFileNames: "assets/[name].js",
      },
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@styles/variables";`,
      },
    },
  },
});
