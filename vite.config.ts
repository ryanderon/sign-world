import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import sitemapPlugin from "vite-plugin-sitemap";

export default defineConfig({
  base: "/",
  plugins: [
    react(),
    tailwindcss(),
    sitemapPlugin({
      hostname: "https://sign-world.id",
      routes: [
        "/",
        "/merchandise",
        "/printing",
        "/printing-installation",
      ],
    } as any),
  ],
});
