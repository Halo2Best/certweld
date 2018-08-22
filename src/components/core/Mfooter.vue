<template>
  <v-fade-transition mode="out-in">
  <alpha-footer
    :company="$t('Layout.Footer.company')"
    :social="social"
    :categories="categories"
    :contact="contact"
  >
    <span >
      &copy; 2018
      {{ $t('Layout.Footer.company') }}
      &mdash;
      {{ $t('Layout.Footer.rights') }}
    </span>
  </alpha-footer>
  </v-fade-transition>
</template>

<script>
  export default {
    computed: {
      social () {
        return this.$t('Layout.Footer.social')
      },
      contact () {
        return this.$t('Views.Contact')
      },
      categories () {
        return this.$t('Layout.Footer.categories')
      }
    }
  }
</script>
