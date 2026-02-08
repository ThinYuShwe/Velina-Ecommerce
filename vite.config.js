import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
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
