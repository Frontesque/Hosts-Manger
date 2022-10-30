/**
 * By default, Nuxt.js is configured to cover most use cases.
 * This default configuration can be overwritten in this file
 * @link {https://nuxtjs.org/guide/configuration/}
 */


module.exports = {
  env: {

  },
  components: true,
  
  ssr: false,
  target: 'static',
  head: {
    title: 'Hosts File Manager',
    meta: [{ charset: "utf-8" }]
  },
  loading: false,
  plugins: [],
  buildModules: [],
  modules: [
    '@nuxtjs/vuetify',
  ],
  vuetify: {
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#1867c0',
          accent: '#8c9eff',
          error: '#b71c1c',

          highlight: '#ddd'
        },
        dark: {
          primary: '#1867c0',
          accent: '#8c9eff',
          error: '#b71c1c',

          highlight: '#333'
        },
      },
    }
  }
};
