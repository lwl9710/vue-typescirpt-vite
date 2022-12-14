import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueSetupExtend from "vite-plugin-vue-setup-extend";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { createStyleImportPlugin, ElementPlusResolve } from "vite-plugin-style-import";

function resolvePath(pathname: string): string {
  return resolve(__dirname, pathname);
}

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: "js/[name]-[hash].js",
        entryFileNames: "js/[name]-[hash].js",
        assetFileNames({ name }) {
          if(/\.(jpe?g|png|gif|webp|svg)$/i.test(name)) {
            return "imgs/[name]-[hash].[ext]";
          }
          if(/\.(woff|woff2|eot|ttf|otf)$/i.test(name)) {
            return "fonts/[name]-[hash].[ext]";
          }
          if(/\.css$/i.test(name)) {
            return "css/[name]-[hash].[ext]";
          }
          return "[name]-[hash].[ext]";
        },
        manualChunks: (filePath, { getModuleIds, getModuleInfo }) => {
          if(/element-plus/i.test(filePath)) {
            return "element-plus";
          }
          if(/(vue\/|vue-router|pinia)/i.test(filePath)) {
            return "vue";
          }
          if(/node_modules/i.test(filePath)) {
            return "vendor";
          }
        }
      }
    }
  },
  resolve: {
    alias: {
      "@": resolvePath("src"),
    }
  },
  plugins: [
    vue(),
    // 扩展name属性
    vueSetupExtend(),
    // 自动引入响应式API
    AutoImport({
      imports: [ "vue", "vue-router" ],
      dts: "types/auto-import.d.ts"
    }),
    // 自动引入组件
    Components({
      resolvers: [ ElementPlusResolver() ],
      dirs: [ "src/components" ],
      extensions: [ "vue" ],
      dts: "types/components.d.ts"
    }),
    // 自动引入样式
    createStyleImportPlugin({
      resolves: [ ElementPlusResolve() ]
    })
  ],
})
