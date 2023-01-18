// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      apiHost: "http://localhost:3333",
    },
  },
  nitro: {
    devProxy: {
      "/api": { target: "http://localhost:3333/api", changeOrigin: true },
    },
  },
  vite: {
    build: {
      target: "es2020",
    },
    optimizeDeps: {
      esbuildOptions: {
        target: "es2020",
      },
    },
  },
});
