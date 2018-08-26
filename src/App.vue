<template>
  <v-app>
    <v-progress-linear
      height="3"
      :indeterminate="!lazyLoaded"
    ></v-progress-linear>
    <core-toolbar />

    <core-drawer />

    <core-jumbotron />

    <core-view />

    <core-mfooter />
  </v-app>
</template>

<script>
  /* eslint-disable no-undef,spaced-comment */

  import { mapMutations, mapGetters } from 'vuex'
  export default {
    data () {
      return {
        lazyTriggered: null
      }
    },
    mounted () {
      let $this = this
      document.body.addEventListener('click', () => {
        $this.setLazyLoaded(true)
      })
      clearTimeout(this.delayAnimated)
      this.delayAnimated = setTimeout(() => {
        $this.setLazyLoaded(true)
      }, 1000)
    },
    watch: {
      $route () {
        let $this = this
        clearTimeout(this.delayAnimated)
        this.delayAnimated = setTimeout(() => {
          $this.setLazyLoaded(true)
        }, 3000)
      }
    },
    computed: {
      lazyLoaded () {
        return this.getLazy()
      }
    },
    methods: {
      ...mapMutations('app', ['setLazyLoaded']),
      ...mapGetters('app', ['getLazy']),
      onScroll (e) {
        if (this.lazyTriggered && !this.getLazy()) {
          this.setLazyLoaded(true)
        }
        this.lazyTriggered = (window.pageYOffset ||
          document.documentElement.scrollTop || 0) >
          (50)
        if (!this.scrolled) {
          if (!e) {
            e = window.event
          }
          /* IE7, IE8, Chrome, Safari */
          if (e.preventDefault) {
            e.preventDefault()
          }
          /* Chrome, Safari, Firefox */
          e.returnValue = false
          /* IE7, IE8 */
          this.scroll(e)
        }
      }
    }
  }
</script>

<style lang="stylus">
  html {
    overflow: scroll;
    overflow-x: hidden;
  }
  ::-webkit-scrollbar {
    width: 0px;  /* remove scrollbar space */
    background: transparent;  /* optional: just make scrollbar invisible */
  }
  /* optional: show position indicator in red */
  ::-webkit-scrollbar-thumb {
    background: #FF0000;
  }

  .v-progress-linear
    position: absolute;
    top: 0
    left: 0
    margin-top 0

  .q-fade-transition
    &-leave-active
      position: absolute

    &-enter-active, &-leave, &-leave-to
      transition: opacity 0.4s ease

    &-enter, &-leave-to
      opacity: 0

  .pointer
    cursor pointer

  .max-view-width
    max-width 1366px
    margin 0 auto

  .invisible
    opacity 0
    visibility hidden

</style>
