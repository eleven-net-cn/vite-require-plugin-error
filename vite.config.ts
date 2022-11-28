import { fileURLToPath, URL } from 'node:url'

import path from 'node:path';
import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import vue2 from '@vitejs/plugin-vue2'
import vue2Jsx from '@vitejs/plugin-vue2-jsx'
import requirePlugin from 'vite-plugin-require';
const peerDepsExternal = require('rollup-plugin-peer-deps-external');

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, './src/main.ts'),
      name: 'TestLib',
    },
    minify: false,
    rollupOptions: {
      output: {
        globals: {
          axios: 'axios',
          vue: 'Vue',
          'vue-class-component': 'VueClassComponent',
          'vue-property-decorator': 'VuePropertyDecorator',
          'vconsole': 'VConsole',
        }
      },
      external: ['axios', 'vue', 'vue-class-component', 'vue-property-decorator', 'vconsole'],
    },
  },
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
    // legacy({
    //   targets: ['ie >= 11'],
    //   additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    // }),
    requirePlugin({
      translateType: 'importMetaUrl',
    }),
    /**
     * The peerDependencies, will be automatically added to external.
     *  https://github.com/pmowrer/rollup-plugin-peer-deps-external#readme
     */
    peerDepsExternal({
      includeDependencies: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
