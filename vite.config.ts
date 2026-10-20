import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative paths, so the same build works at neuro-sfu.github.io/neuroai/ and at the
// root of the custom domain (neuroai.sfu.ca/). The site is a single page, so there
// are no deeper routes that relative paths would break.
export default defineConfig({
  base: "./",
  plugins: [react()],
});
