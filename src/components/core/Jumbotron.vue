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
                <div
                  class="subheading white--text"
                  v-html="subTitle"
                  v-if="subTitle"
                />
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
<style>
  .bg-gradient{
    width: 100%;
    position: absolute;
    top:0;
    left:0;
    background: linear-gradient(to bottom, rgba(80, 90, 100, .5), rgba(10, 20, 30, .5));
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
