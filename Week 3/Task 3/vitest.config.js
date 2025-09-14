/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // <--- enables "test", "expect", etc.
    environment: "jsdom", // needed for React Testing Library
    setupFiles: "./src/tests/setupTests.js"
  },
});
