import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@data", replacement: path.resolve(__dirname, "src/data")},
      { find: "@domain", replacement: path.resolve(__dirname, "src/domain")},
      { find: "@gateway", replacement: path.resolve(__dirname, "src/gateway")},
      { find: "@infra", replacement: path.resolve(__dirname, "src/infra")},
      { find: "@main", replacement: path.resolve(__dirname, "src/main")},
      { find: "@presentation", replacement: path.resolve(__dirname, "src/presentation")},
      { find: "@validation", replacement: path.resolve(__dirname, "src/validation")},
    ]
  }
})
