import { defineConfig } from "electron-vite";
import { resolve } from "path";
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  main: {
    root: ".",
    resolve: {
      alias: {
        '@components': resolve(__dirname, './src/components/'),
        '@styles': resolve(__dirname, './src/styles/'),
        '@utils': resolve(__dirname, './src/utils/'),
        '@jizo': resolve(__dirname, './src/electron/api/'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          index: resolve(__dirname, "src/electron/main/index.ts"),
        },
      },
    },
  },
  preload: {
    root: ".",
    resolve: {
      alias: {
        '@components': resolve(__dirname, './src/components/'),
        '@styles': resolve(__dirname, './src/styles/'),
        '@utils': resolve(__dirname, './src/utils/'),
        '@jizo': resolve(__dirname, './src/electron/api/'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          index: resolve(__dirname, "src/electron/preload/index.ts"),
        },
      },
    },
  },
  renderer: {
    root: ".",
    plugins: [
      legacy({
        targets: ['defaults', 'not IE 11'],
      }),
    ],
    resolve: {
      alias: {
        '@components': resolve(__dirname, './src/components/'),
        '@styles': resolve(__dirname, './src/styles/'),
        '@utils': resolve(__dirname, './src/utils/'),
        '@jizo': resolve(__dirname, './src/electron/api/'),
      },
    },
    build: {
      emptyOutDir: true,
      manifest: true,
      rollupOptions: {
        input: {
          index: resolve(__dirname, "index.html"),
        },
      },
    },
    css: {
      devSourcemap: true,
    }
  },
});
