// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "@/assets/styles/reset.css",
    "bootstrap/dist/css/bootstrap.min.css",
    "@/assets/styles/default.css"
  ]
})

