import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue(), dts({ include: './src' })],
  build:{
    lib: {
      entry: resolve( __dirname,'./src/index.ts'),
      name: 'Test',
      fileName: 'bundle',
    },
    rollupOptions: {
      external: ['vue', 'lodash', 'dayjs', 'ant-design-vue' ],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
