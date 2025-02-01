import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // 插件配置
  plugins: [vue()],
  // 路徑解析配置
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // 設置 @ 為 src 目錄的別名
    },
  },
});
