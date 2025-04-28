import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host_app",
      filename: "hostApp.js",
      remotes: {
        admin_ui: "https://admin-ui-ebon-six.vercel.app/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
    tailwindcss(),
  ],
  server: {
    cors: false,
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  preview: {
    port: 3003,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
