import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Components from 'unplugin-vue-components/vite'
import Markdown from 'vite-plugin-md'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig( ({mode}) => {
  const env = loadEnv(mode, process.cwd())

  const processEnvValues = {
    'process.env': Object.entries(env).reduce(
      (prev, [key, val]) => {
        return {
          ...prev,
          [key]: val,
        }
      },
      {},
    )
  }
  return {
    define: processEnvValues,
    plugins: [
      vue({
        include: [/\.vue$/, /\.md$/]
      }),
      Pages({
      pagesDir: [
        "src/pages",
      ],
      extensions: ['vue', 'md']
    }),
      Layouts({
        layoutsDir: "src/layouts",
        defaultLayout: "default",
      }),
      Components({
        dirs: ['src/components'],
        extensions: ['vue', 'md'],
        include: [/\.vue$/, /\.md$/],
      }),
      Markdown({
        headEnabled: true,
        markdownItOptions: {
          html: true,
          linkify: true,
          typographer: true,
        },
      }),
      AutoImport({
        imports: [
          'vue',
          'vue-router',
          '@vueuse/head',
        ],
      }),
    ]
  }
})
