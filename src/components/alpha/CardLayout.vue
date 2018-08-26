<template>
  <v-container
    grid-list-lg
    pa-0
    pb-4
    d-flex
    justify-center
    class="max-view-width"
  >
    <v-layout
      row
      wrap
      justify-center
      align-start
      :class="$vuetify.breakpoint.lgAndUp ? 'offset-4-grid' : ''"
    >
      <v-flex
        xs12
        sm6
        md3
        mb-3
        lg3
        pa-0
        v-for="(item, i) in items"
        :class="[$vuetify.breakpoint.smAndDown ? 'pa-2' : 'mi mi--' + i]"
        :key="i"
        d-flex>
        <v-card
          dark
          @mouseover="hoverIn"
          @mouseout="hoverOut"
        >
          <v-card-media
            height="250px"
            :src="item.image + (webp ? '.webp' : '.jpg')"
            :alt="item.image"
          >
            <v-container fill-height fluid class="bg-gradient">
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline">{{item.heading1}}</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-media>
          <v-card-title class="min-h">
            <div>
              <p class="mt-3 " v-text="item.headingText2a"/>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  /* eslint-disable no-undef */

  export default {
    name: 'alpha-card-layout',
    computed: {
      lazyLoaded () {
        return this.$store.state.app.lazyLoaded
      },
      mobile () {
        return this.$vuetify.breakpoint.smAndDown
      },
      cardHeight () {
        return this.$vuetify.breakpoint.mdAndDown ? '200px' : '300px'
      }
    },

    methods: {
      lazyLoad (e) {
        let ext = this.webp ? '.webp' : '.jpg'
        return this.$store.state.app.lazyLoaded ? ('/static/img/' + e.img + ext) : ''
      },
      direct (item) {
        this.$router.push(this.items.find((i) => i.text === item.name).to)
      },
      hoverIn (e) {
        TweenMax.to(e.currentTarget, 0.3, {y: -6})
        TweenMax.to(e.currentTarget.querySelectorAll('.v-btn'), 0.3, {x: 7})
      },
      hoverOut (e) {
        TweenMax.to(e.currentTarget, 0.3, {y: 0})
        TweenMax.to(e.currentTarget.querySelectorAll('.v-btn'), 0.3, {x: 0})
      }
    },
    props: {
      items: {
        type: Array,
        default: () => ([])
      }
    }
  }
</script>

<style scoped lang="stylus">
  .max-view-width
    max-width: 1600px !important

  .min-90
    min-height 90vh
    align-items center

  .min-h
    min-height: 150px
  .mi
    position relative
  .mi--0, .mi--2, .mi--4
    margin-top 2em
    right -0.75em
  .mi--1, mi--3, .mi--5
    margin-top 0
    z-index 1

  .offset-4-grid
    max-width 1366px

  .offset-4-grid > div:nth-child(1)
    left 2em
  .offset-4-grid > div:nth-child(2)
    left 1em
  .offset-4-grid > div:nth-child(3)
    left 0em
  .offset-4-grid > div:nth-child(4)
    left -1em

  .bg-gradient
    background linear-gradient(to bottom, rgba(0, 0, 0, 0.95) 0%, rgba(255, 255, 255, 0.1) 90%);
</style>

