import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    // Adding proper history API fallback for SPA routing
    historyApiFallback: {
      rewrites: [
        { from: /^\/quintin-compliance\/.*/, to: '/quintin-compliance/index.html' }
      ]
    }
  },
  plugins: [
    react({
      jsxImportSource: 'react'
    }),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  base: '/quintin-compliance/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "react/jsx-runtime": path.resolve(__dirname, "node_modules/react/jsx-runtime")
    },
  },
}));
