<template>
  <v-container fill-height class="max-view-width">
    <v-layout justify-center align-center>
      <v-flex xs12 lg10 class="mb-5">
        <alpha-images
          :categories="categories"
          :projects="projects"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    metaInfo: {
      title: 'Gallery',
      meta: [
        { name: 'description', content: 'We like to show off what we\'ve worked on' }
      ]
    },
    computed: {
      categories () {
        return this.$t('Views.Gallery.categories')
      },
      projects () {
        return this.$t('Views.Gallery.projects')
      }
    }
  }
</script>
