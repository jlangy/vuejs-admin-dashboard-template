import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const config = {
    define: {
      'process.env': process.env
    },  
    plugins: [vue()],
    resolve: {
      alias: [
        {
          find: /^~.+/,
          replacement: (val) => {
            return val.replace(/^~/, "");
          },
        },
        {
          find: '@tailwindConfig',
          replacement: () => './src/css/tailwind.config.js',
        }
      ],
    },
    optimizeDeps: {
      include: [
        '@tailwindConfig',
      ]
    },
    build: {
      commonjsOptions: {
        transformMixedEsModules: true,
      }
    }
  }
  if (mode === 'production') {
    config.base = '/vuejs-admin-dashboard-template/'
  }
  return config;
})
