<template>
  <div>
    <alpha-card-layout
      :items="items"
    ></alpha-card-layout>
  <alpha-hero
    :src="'/static/img/cert-weld/narek/c' + (webp ? '.webp' : '.jpg')"
    alt="narek image"
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
  /* eslint-disable no-undef */

  import AlphaCardLayout from '../components/alpha/CardLayout'
  export default {
    components: {AlphaCardLayout},
    metaInfo: {
      title: 'Welding Services',
      meta: [
        {name: 'description', content: 'Certified Welding offers a wide range of engineering expertise.'}
      ]
    },
    computed: {
      items () {
        return this.$t('Views.Services.items')
      },
      testimonials () {
        return this.$t('Views.Home.testimonials')
      }
    }
  }
</script>

