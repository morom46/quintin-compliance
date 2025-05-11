import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Set the base path based on the environment variable
  const base = process.env.GITHUB_ACTIONS ? '/quintin-compliance/' : '/';
  
  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react({
        jsxImportSource: 'react'
      }),
      mode === 'development' &&
      componentTagger(),
    ].filter(Boolean),
    base,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "react/jsx-runtime": path.resolve(__dirname, "node_modules/react/jsx-runtime")
      },
    },
  };
});
