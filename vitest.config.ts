import { defineConfig } from 'vitest/config'
import vuePlugin from '@vitejs/plugin-vue'

export default defineConfig({
  test: {
    environment: 'jsdom',
  },
  plugins: [vuePlugin()],
})
