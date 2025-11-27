import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// PUBLIC_INTERFACE
export default defineConfig({
  /** Vite configuration for the Recipe Explorer frontend (React, Monochrome theme). */
  plugins: [react()],
  server: {
    port: Number(process.env.REACT_APP_PORT || 5173),
    strictPort: false
  },
  preview: {
    port: Number(process.env.REACT_APP_PORT || 4173),
    strictPort: false
  }
});
