import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { copyFileSync, existsSync } from "fs";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // GitHub Pages: serve SPA for unknown paths by using 404.html as fallback
    {
      name: "github-pages-404",
      closeBundle() {
        const outDir = resolve("dist");
        const indexPath = resolve(outDir, "index.html");
        const notFoundPath = resolve(outDir, "404.html");
        if (existsSync(indexPath)) {
          copyFileSync(indexPath, notFoundPath);
        }
      },
    },
    // Redirect /Velina-Ecommerce to /Velina-Ecommerce/ so base URL works and images load
    {
      name: "redirect-base-no-trailing-slash",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === "/Velina-Ecommerce") {
            res.statusCode = 301;
            res.setHeader("Location", "/Velina-Ecommerce/");
            res.end();
            return;
          }
          next();
        });
      },
    },
  ],
  base: "/Velina-Ecommerce/",
});
