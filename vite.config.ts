import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import vue2 from '@vitejs/plugin-vue2'
import vue2Jsx from '@vitejs/plugin-vue2-jsx'
import requirePlugin from 'vite-plugin-require';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue2(),
    vue2Jsx({
      compositionAPI: false,
        /**
         * Support some babel plugins (but not presets)
         */
        babelPlugins: [
          // Support Decorators: https://github.com/vitejs/vite-plugin-vue2-jsx/issues/3
          [
            '@babel/plugin-proposal-decorators',
            {
              legacy: true, // Recommend
            },
          ],
          '@babel/plugin-proposal-class-properties',
        ],
    }),
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    }),
    requirePlugin(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
