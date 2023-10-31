// Vite Imports
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { crx, defineManifest } from "@crxjs/vite-plugin";

// NodeJs Imports
import { dirname, resolve } from "node:path";
import { fileURLToPath, URL } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), crx({ manifest: manifest() })],

  // Path Alias
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  // ** CSS
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/scss" as *;`,
      },
    },
    modules: {
      localsConvention: "camelCaseOnly",
    },
  },

  // Dev Server
  server: {
    port: 3005,
  },

  // Build Config
  build: {
    rollupOptions: {
      input: {
        default_popup: resolve(__dirname, "./default_popup.html"),
        options_page: resolve(__dirname, "./options_page.html"),
        blank: resolve(__dirname, "./blank.html"),
      },
    },
  },
});

function manifest() {
  return defineManifest({
    // ** Required
    manifest_version: 3,
    name: "WarpDriven Crawler",
    version: "0.0.1",

    // ** Scripts
    content_scripts: [
      {
        js: ["src/content.tsx"],
        matches: ["*://*/*"],
      },
    ],
    permissions: ["contextMenus", "tabs", "storage"],
    background: {
      service_worker: "src/background.ts",
      type: "module",
    },

    // ** Views
    action: {
      default_popup: "default_popup.html",
      default_title: "WarpDriven Crawler",
    },
    options_page: "options_page.html",
    default_locale: "en",
    chrome_url_overrides: {
      newtab: "blank.html",
    },
  });
}
