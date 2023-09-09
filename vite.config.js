import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/],
      imports: ['vue'],
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json'
      },
      dts: './auto-import.d.ts'
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dts: './components.d.ts'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
