<template>
  <div>

    <v-container fill-height>

      <v-layout
        justify-center
        align-center
        wrap
      >

        <v-flex dark xs12 mb-5>
          <alpha-card-feature :features="cardFeatures"/>
        </v-flex>

        <v-container grid-list-xl pa-0>
          <v-layout
            row
            wrap
            justify-center
            align-center
          >
            <v-flex
              xs12
              sm3
            >
              <h2 class="text-md-center">Testimonials</h2>
            </v-flex>
          </v-layout>
        </v-container>

        <v-container grid-list-xl pa-0>
          <v-layout
            row
            wrap
            justify-center
            align-start
          >
            <v-flex
              xs12
              sm3
              align-start
              v-for="(testimonial, i) in testimonials"
              :class="['mi--' + i]"
              :key="i"
            >
              <alpha-testimonial
                :author="testimonial.author"
                :title="testimonial.title"
                :quote="testimonial.quote"
              />
            </v-flex>
          </v-layout>
        </v-container>

      </v-layout>
    </v-container>

    <alpha-hero
      src="/static/img/welding/contact-bw.jpg"
      :height="$vuetify.breakpoint.mdAndUp ? 500 : 'auto'"
      :jumbotron="false"
      dark
      class="mt-5 bg-gradient"
    >
      <v-container
        fill-height
        grid-list-xl
      >
        <v-layout
          align-center
          justify-space-around
          wrap
        >
          <v-flex
            xs10
            md6
          >
            <alpha-testimonial
              :author="testimonials[2].author"
              :title="testimonials[2].title"
              :quote="testimonials[2].quote"
            />
          </v-flex>
        </v-layout>
      </v-container>
    </alpha-hero>
  </div>
</template>

<script>
  import TweenMax from 'gsap/TweenMax'

  export default {
    metaInfo: {
      title: 'Vuetify Alpha',
      meta: [
        {name: 'description', content: 'Customized vue-cli templates for Vue and Vuetify'}
      ]
    },
    mounted () {
      TweenMax.staggerFromTo('.v-card', 1, {y: 40, autoAlpha: 0}, {y: 0, autoAlpha: 1}, 0.2)
    },
    methods: {
      onScroll () {
        this.isScrolling = (window.pageYOffset ||
          document.documentElement.scrollTop || 0) > (this.$el.clientHeight || 100)
      },
      cardScroll () {
        console.log('s')
      }
    },
    computed: {
      cardFeatures () {
        return this.$t('Views.Home.cardFeatures')
      },
      testimonials () {
        return this.$t('Views.Home.testimonials')
      }
    }
  }
</script>

<style lang="stylus" scoped="true">

  .mi--0
    position: relative;
    margin-top 2em;

  .mi--1
    position relative
    margin-top 9em;

  .mi--2
    position: relative;
    margin-top 6em;

  .mi--u, .mi--d
    //-webkit-box-shadow: 0px 0px 20px -6px rgba(0,0,0,0.75)
    //-moz-box-shadow: 0px 0px 20px -6px rgba(0,0,0,0.75)
    //box-shadow: 0px 0px 20px -6px rgba(0,0,0,0.75)
    position: relative
    padding 0 !important

  .mi--u
    top -1em

  .mi--d
    top 1em
    z-index 1

  .bg-gradient
    background: linear-gradient(to bottom, rgba(0, 0, 0, .85), rgba(255, 255, 255, 0.5));
</style>
