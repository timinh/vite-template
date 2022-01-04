import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Components from 'unplugin-vue-components/vite'
import Markdown from 'vite-plugin-md'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    Pages({
      dirs: "src/pages"
    }),
    Layouts({
      layoutsDir: "src/layouts",
      defaultLayout: "default",
    }),
    Components({
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown(),
  ]
})
