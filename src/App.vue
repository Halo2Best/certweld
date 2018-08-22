<template>
  <v-app v-scroll="onScroll">
    <core-toolbar />

    <core-drawer />

    <core-jumbotron />

    <core-view />

    <core-mfooter />
  </v-app>
</template>

<script>
  /* eslint-disable no-undef */

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
      $route (to, from) {
        let $this = this
        clearTimeout(this.delayAnimated)
        this.delayAnimated = setTimeout(() => {
          $this.setLazyLoaded(true)
        }, 3000)
      }
    },
    methods: {
      ...mapMutations('app', ['setLazyLoaded']),
      ...mapGetters('app', ['getLazy']),
      onScroll () {
        if (this.lazyTriggered && !this.getLazy()) {
          this.setLazyLoaded(true)
        }
        this.lazyTriggered = (window.pageYOffset ||
          document.documentElement.scrollTop || 0) >
          (50)
      }
    }
  }
</script>

<style lang="stylus">

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
