// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    [
      "nuxt-highcharts",
      {
        setOptions: {
          // colors: ['#FF9843', '#86A7FC', '#FFDD95', '#3468C0'],
          credits: {
            enabled: false
          },
          chart: {
            backgroundColor: 'transparent'
          },
          lang: {
            downloadPNG: 'Unduh Gambar PNG'
          },
        }
      },
    ],
  ],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config",
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: "first",
    viewer: true,
  },
});
