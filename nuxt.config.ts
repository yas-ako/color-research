// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  plugins: [{ src: "~/plugins/vercel.ts", mode: "client" }],
  srcDir: "src",
  build: {
    transpile: ["vuetify"],
  },
  css: [
    "vuetify/lib/styles/main.sass",
    "mdi/css/materialdesignicons.min.css",
    "~/assets/css/style.css",
  ],
});
