<template>
  <v-container
    grid-list-lg
    pa-0
    d-flex
    justify-center
  >
    <v-layout
      row
      wrap
      justify-center
      align-start
      id="card-features"
    >
      <v-flex
        xs12
        sm5
        md4
        d-flex
        v-for="(feature, i) in features"
        :key="i"
        id="card-feature"
        :class="mobile ? 'pa-2' : ''"
      >
        <v-card
          :class="[!mobile ? 'mi--' + i : '']"
          fill-height
          flat
          tile
          dark
          class="grey darken-3 elevation-4"
          @mouseover="hoverIn"
          @mouseout="hoverOut"
        >
          <v-card-media
            :src="lazyLoad(feature)"
            :height="cardHeight"
            :alt="feature.image"
            class="invisible"
            :class="{'fade-in': lazyLoaded}"
          />
          <v-flex pa-4>
          <v-card-title class="title text-lg-center pa-0 mb-3" v-text="feature.title"/>
          <v-card-text class="pa-0 mb-2" v-text="feature.text"/>
          <v-card-text class="pa-0 pb-5" v-text="feature.subText"/>
          <v-card-actions class="pa-0">
            <v-btn
              :aria-label="feature.callToAction + ' button'"
              @click="direct(feature)">
              {{feature.callToAction}}
            </v-btn>
          </v-card-actions>
          </v-flex>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  /* eslint-disable no-undef */

  export default {
    name: 'alpha-card-feature',
    data () {
      return {
        items: this.$t('Layout.View.items')
      }
    },
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
        return this.$store.state.app.lazyLoaded ? '/static/img/' + e.img + (this.webp ? '.webp' : '.jpg') : ''
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
      features: {
        type: Array,
        default: () => ([])
      }
    }
  }
</script>

<style lang="stylus" scoped>

  .invisible
    transition opacity ease-in 1s

  .fade-in
    visibility visible
    opacity 1

  #card-features
    max-width 1366px
    &>div
      position relative
    .mi--0, .mi--3
      margin-top 3em
      right 0.75em

    .mi--1, mi--4
      margin-top 0
      z-index 1

    .mi--2, .mi--5
      margin-top 2em
      left 0.75em

  .container.grid-list-lg .layout .flex
    padding 0

  .bg-gradient
    position absolute
    width 100%
    height 100%
    background linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.95) 0%,
      rgba(117,117,117,0.25) 50%,
      rgba(0, 0, 0, 0.5) 100%
    )
    z-index 2
</style>
