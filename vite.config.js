import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import viteImagemin from "vite-plugin-imagemin";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/colors-shop/",
  build: {
    outDir: "build",
    rollupOptions: {
      output: {
        entryFileNames: "assets/js/[name].[hash].js",
        chunkFileNames: "assets/js/[name].[hash].js",
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpg|jpeg|png|svg|webp)$/.test(name ?? "")) {
            return "assets/img/[name]-[hash][extname]";
          }

          if (/\.(woff2|woff)$/.test(name ?? "")) {
            return "assets/fonts/[name]-[hash][extname]";
          }

          if (/\.css$/.test(name ?? "")) {
            return "assets/css/[name]-[hash][extname]";
          }

          return "assets/resources/[name]-[hash][extname]";
        },
      },
    },
  },
  plugins: [
    vue(),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 60,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: "removeViewBox",
          },
          {
            name: "removeEmptyAttrs",
            active: false,
          },
        ],
      },
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/scss/vars.scss";`,
      },
    },
  },
});
