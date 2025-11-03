import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  base: "/evweb/", // имя репозитория на GitHub
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@assets": path.resolve(__dirname, "src/assets"),
    },
    // extensions — НЕ поддерживается Vite, не указываем
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    // не трогаем rollupOptions.output.* — пусть Vite сам сделает хеши
    sourcemap: false,
    minify: "esbuild",
  },
  css: {
    preprocessorOptions: {
      scss: {
        // важно: если файл variables.scss, добавь расширение или настрой importers
        additionalData: `@import "@styles/variables.scss";`,
      },
    },
  },
});
