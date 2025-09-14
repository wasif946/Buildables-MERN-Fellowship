/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // ✅ adds describe, it, expect without import
    environment: "jsdom", // ✅ simulates browser DOM
    setupFiles: "./src/setupTests.ts", // ✅ runs before tests
  },
});
