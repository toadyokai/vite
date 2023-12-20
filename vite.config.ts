import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'
import fs from 'fs'

const pkg = fs.readFileSync(resolve(__dirname, './package.json'), { encoding: 'utf-8'})
const deps = JSON.parse(pkg).dependencies
const manualChunks = {}

Object.keys(deps).filter(name=>{
  if (/^(@types|vite-plugin)/.test(name) || name === 'vue') {
    return false
  } else {
    return true
  }
}).forEach(key=>{
  manualChunks[key] = [key]
})

const buildEnd = ()=>{
  return {
    name: 'buildEnd',
    buildEnd(){
      console.log('end')
      
    }
  }
}

export default defineConfig({
  plugins: [vue(), dts({ include: './src' }), buildEnd()],
  build:{
    lib: {
      entry: resolve( __dirname,'./src/index.ts'),
      name: 'Test',
      fileName: 'bundle',
      formats: ['es']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        chunkFileNames: "[name].js",
        globals: {
          vue: 'Vue'
        },
        manualChunks
      }
    }
  }
})
