// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      meta: [
        {
          name: 'viewport', content: 'width=device-width, initial-scale=1',
        },

        {
          name: 'author', content: 'Wanderson Silva <wandersonsilva768@gmail.com>'
        }
      ],
      title: 'Encontre os melhores blocos de carnaval de 2023'
    }
  },

  css: [
    '~/assets/css/main.css'
  ],

  postcss: {
    plugins: {
      tailwindcss: {},

      autoprefixer: {}
    }
  }
})
