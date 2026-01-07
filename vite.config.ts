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
      dynamicRoutes: [
        "/printing",
        "/merchandise",
        "/printing-installation",
      ],
      changefreq: {
        "/": "weekly",
        "/printing": "monthly",
        "/merchandise": "monthly",
        "/printing-installation": "monthly",
      },
      priority: {
        "/": 1.0,
        "/printing": 0.8,
        "/merchandise": 0.8,
        "/printing-installation": 0.8,
      },
      readable: true,
      generateRobotsTxt: false, // We already have robots.txt
    }),
  ],
});
