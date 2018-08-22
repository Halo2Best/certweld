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
              :author="testimonials[1].author"
              :title="testimonials[1].title"
              :quote="testimonials[1].quote"
            />
          </v-flex>
        </v-layout>
      </v-container>
    </alpha-hero>
  </div>
</template>
<script>
  /* eslint-disable no-undef */

  export default {
    metaInfo: {
      title: 'Projects',
      meta: [
        {name: 'description', content: 'From Structural Steel to Concrete Moulds to Vehicle Modifications, Certified Welding has put a wide variety of projects into the world'}
      ]
    },
    computed: {
      items () {
        return this.$t('Views.Projects.items')
      },
      testimonials () {
        return this.$t('Views.Home.testimonials')
      }
    }
  }
</script>
