export default defineNuxtConfig({
<<<<<<< HEAD
    modules: [
        "@nuxtjs/tailwindcss",
        "@nuxtjs/color-mode"
    ],
    colorMode: {
        classSuffix: "",
    }
});
=======
  devtools: { enabled: true },
  css: ['../assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
>>>>>>> interfaceInfo
