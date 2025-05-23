export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "vuetify-nuxt-module",
    "@vueuse/nuxt",
    "@nuxt/fonts",
    "@pinia/nuxt",
  ],
  css: ["./css/style.css"],
  app: {
    pageTransition: { name: "slide-left", mode: "out-in" },
  },
  appConfig: {
    siteName: "My Awesome Site",
    themeColor: "blue-500",
  },
  vuetify: {
    moduleOptions: {},
    vuetifyOptions: {
      theme: {
        defaultTheme: "dark",
        themes: {
          dark: {
            colors: {
              background: "#000000", // Set background color to black
            },
          },
        },
      },
      icons: {
        defaultSet: "mdi",
        sets: ["mdi", "fa"],
      },
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
