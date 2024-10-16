/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [TanStackRouterVite({}), react()],
  test: {
    // <--- Add this object
    globals: true,
    environment: "jsdom",
  },
})
