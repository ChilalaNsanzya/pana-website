import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// VITE_BASE is set by the GitHub Pages workflow (e.g. "/pana-website/").
// Leave it unset for a custom domain or local dev, where the site is at the root.
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
})
