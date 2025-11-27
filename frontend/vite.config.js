import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * PUBLIC_INTERFACE
 * Vite configuration for the Recipe Explorer frontend (React, Monochrome theme).
 * - Uses @vitejs/plugin-react react() plugin.
 * - Server/preview read HOST/PORT from environment with defaults.
 */
export default defineConfig({
  plugins: [react()],
  server: {
    host: process.env.HOST || "0.0.0.0",
    port: Number(process.env.PORT) || 3000,
    strictPort: false
  },
  preview: {
    host: process.env.HOST || "0.0.0.0",
    port: Number(process.env.PORT) || 3000,
    strictPort: false
  }
});
