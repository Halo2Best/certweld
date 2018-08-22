<template>
  <alpha-video-background
    id="jumbotron"
    class="vh elevation-6"
    :sources="[heroVideo + '.webm', heroVideo + '.mp4', heroVideo + '.ogv']" :img="heroImage" :alt="heroImage">
    <div class="z0 bg-gradient"></div>
      <q-fade-transition>
      <v-container
        fill-height
        fill-width
        :key="$route.path"
        v-if="isBooted"
        class="z1"
      >
        <v-layout align-center class="z2">
          <v-flex
            class="m-title"
            text-xs-center
            :key="$route.path"
          >
            <h1
              :class="fontBPSize"
              class="white--text mb-3">
              {{title}}
            </h1>
            <h2
              :class="fontBPSize"
              class="white--text mb-4">
              {{subTitle}}
            </h2>
            <!--<p-->
              <!--:class="[fontBPSize, {'invisible' : !lazyLoaded}]"-->
              <!--class="white&#45;&#45;text"-->
              <!--v-html="subSubTitle">-->
            <!--</p>-->
            <v-btn
              light
              class="mt-5"
              :class="{'theme--dark' : scrolled}"
              @click="scrollDown">
              More Here
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
      </q-fade-transition>
  </alpha-video-background>
</template>

<script>
  /* eslint-disable no-undef */

  import AlphaVideoBackground from '../alpha/VideoBackground'
  export default {
    components: {AlphaVideoBackground},
    data: () => ({
      scrolled: null,
      isBooted: null
    }),

    methods: {
      scrollDown () {
        let pos = window.innerHeight * 0.65
        this.scrolled = true
        TweenMax.to(window, 0.7, {delay: 0.2, scrollTo: {y: pos, autoKill: false}})
      }
    },
    watch: {
      $route (to, from) {
        this.scrolled = false
      }
    },
    computed: {
      lazyLoaded () {
        return this.$store.state.app.lazyLoaded
      },
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
      fontBPSize () {
        return this.$vuetify.breakpoint.smAndUp ? 'lg-text' : ''
      },
      heroImage () {
        let path = '/static/img/'
        let size = ''
        let name = 'top-a-'
        let bp = this.$vuetify.breakpoint
        if (bp.smAndDown) {
          size = '768'
        } else if (bp.lgAndDown) {
          size = '1280'
        } else {
          size = '1920'
        }
        return path + name + size + (this.webp ? '.webp' : '.jpg')
      },
      heroVideo () {
        let path = '/static/video/'
        let size = ''
        let name = 'top-a-'
        let bp = this.$vuetify.breakpoint

        if (bp.smAndDown) {
          size = '768'
        } else if (bp.mdAndDown) {
          size = '1024'
        } else if (bp.lgAndDown) {
          size = '1280'
        } else {
          size = '1920'
        }
        // if (this.$store.state.app.lazyLoaded) {
        //   let $this = this
        //   setTimeout(() => {
        //     let video = $this.$el.querySelector('video')
        //     video.play()
        //   }, 100)
        // }
        return this.$store.state.app.lazyLoaded ? (path + name + size) : ''
      }
    },
    mounted () {
      setTimeout(() => {
        this.isBooted = true
        setTimeout(() => {
          TweenMax.fromTo('.scroll-arrow', 0.5, {y: -15}, {delay: 2, y: 0, ease: Quint.easeIn, yoyo: true, repeat: -1})
          TweenMax.staggerFromTo('#jumbotron .invisible', 1.5, {y: 40, autoAlpha: 0}, {y: 1, autoAlpha: 1}, 0.2)
        }, 1)
      }, 750)
    }
  }
</script>
<style scoped lang="stylus">

  .invisible
    opacity 0
    visibility hidden

  .m-title
    p
      font-size 20px
      font-weight 100

  h1
    font-family 'Roboto', sans-serif
    font-weight bold
    font-size 40px
    line-height 1.1

  h2
    font-size 1.2em
    font-weight 400

  h1.lg-text
    font-size 60px

  h2.lg-text
    font-size 1.5em

  .bg-gradient
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    pointer-events none
    /*background: linear-gradient(to bottom,*/
    /*rgba(50, 50, 50, 0.8),*/
    /*rgba(75, 75, 75, 0.8),*/
    /*rgba(150, 150, 150, 0.8),*/
    /*rgba(255, 255, 255, 1))*/
    /*background: -moz-linear-gradient(top, rgba(0,0,0,0.89) 0%, rgba(255,255,255,0.85) 76%, rgba(255,255,255,1) 100%); !* FF3.6-15 *!*/
    /*background: -webkit-linear-gradient(top, rgba(0,0,0,0.89) 0%,rgba(255,255,255,0.85) 76%,rgba(255,255,255,1) 100%); !* Chrome10-25,Safari5.1-6 *!*/
    background: linear-gradient(to bottom, rgba(0,0,0,0.9) 0%,rgba(103, 103, 103, 0.8) 65%,rgba(197, 197, 197, 0.6) 84%,rgba(255,255,255,1) 100%);

  .z1
    z-index 1
    position relative

  .fill-width
    width 100%

  .vh
    height 80vh !important

</style>
