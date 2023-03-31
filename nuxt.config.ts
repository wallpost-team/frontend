// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      "postcss-simple-vars": {},
      "tailwindcss/nesting": {},
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
