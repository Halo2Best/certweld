<template>
  <v-fade-transition origin="top center 0.1" mode="out-in" height="70vh">
      <v-parallax
        :src="heroImage"
        v-if="namespace"
        :key="$route.path"
        class="fill-width"
      >
        <v-layout
          fill-height
          class="bg-gradient z-"
        >
        </v-layout>
        <v-container
          fill-height
          fill-width
          :key="$route.path"
          v-if="isBooted"
          class="z+"

        >

          <v-layout align-center>
              <v-flex
                text-xs-center
                :key="$route.path"
              >
                <h1 class="display-2 white--text" v-html="title" />
              </v-flex>
          </v-layout>
        </v-container>

      </v-parallax>
  </v-fade-transition>
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
      subTitle () {
        return this.$t(`Views.${this.namespace}.jumbotronSubTitle`)
      },
      heroImage () {
        return `/static/img/welding/${this.namespace.toLowerCase()}-bw.jpg`
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
  .bg-gradient{
    width: 100%;
    position: absolute;
    top:0;
    left:0;
    background: linear-gradient(to bottom,
    rgba(50, 50, 50, 0.8),
    rgba(75, 75, 75, 0.8),
    rgba(150, 150, 150, 0.8),
    rgba(255, 255, 255, 1))
  }
  .z+{
    z-index: 10;
  }
  .z-{
    z-index: -10;
  }
  .fill-width{
    width: 100%;
  }
</style>
