import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// PUBLIC_INTERFACE
export default defineConfig({
  /** Vite configuration for the Recipe Explorer frontend (React, Monochrome theme). */
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
