<template>

  <v-carousel>
    <v-carousel-item
      v-for="(item, i) in images"
      :key="i"
      :src="item"
      gradient="to bottom, rgba(70, 90, 160, .85), rgba(30, 40, 30, .85)"
    ></v-carousel-item>

  </v-carousel>
</template>

<script>
  export default {
    data: () => ({
      isBooted: false
    }),

    computed: {
      isHome () {
        return this.$route.path === '/'
      },
      namespace () {
        return this.$route.name
      },
      title () {
        return this.$t(`Views.${this.namespace}.jumbotronTitle`)
      },
      images () {
        return this.$t(`Views.${this.namespace}.jumbotronImages`)
      },
      subTitle () {
        return this.$t(`Views.${this.namespace}.jumbotronSubTitle`)
      },
      heroImage () {
        return `/static/img/${this.namespace.toLowerCase()}-hero.png`
      }
    },

    mounted () {
      setTimeout(() => {
        this.isBooted = true
      }, 200)
    }
  }
</script>

<style scoped>

</style>
