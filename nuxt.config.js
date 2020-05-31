export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/icon.png' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: '@/components/loading.vue',
  /*
   ** Global CSS
   */
  css: ['~/assets/fonts/inter/inter.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: 'plugins/swiper.js' }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  env: {
    baseUrl: process.env.BASE_URL || 'https://strapi.kruzhok.io',
  },
  build: {
    // Add exception
    transpile: ['vee-validate/dist/rules'],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // ...
    },
  },
  router: {
    middleware: 'requests',
  },
};
