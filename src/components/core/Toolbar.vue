<template>
  <v-toolbar
    app
    dark
    :flat="!isScrolling"
    :color="!isScrolling ? 'transparent' : 'secondary'"
    v-scroll="onScroll"
  >
    <img class="toolbar-logo"
      src="/static/img/cert-weld-logo-white-stroke-600x193.png"
    />
    <v-spacer />
    <v-toolbar-items v-if="$vuetify.breakpoint.mdAndUp">
      <v-btn
        v-for="(item, i) in items"
        :color="!isScrolling ? 'white--text' : 'black--text'"
        :active-class="!isScrolling ? 'primary--text' : undefined"

        :key="i"
        :to="item.to"
        flat
      >
        <span v-text="item.text" />
      </v-btn>
    </v-toolbar-items>
    <v-btn v-else icon @click="toggleDrawer">
      <v-icon>mdi-menu</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
  // Utilities
  import { mapMutations } from 'vuex'

  export default {
    data: () => ({
      isScrolling: false
    }),

    computed: {
      items () {
        return this.$t('Layout.View.items')
      }
    },

    methods: {
      ...mapMutations('app', ['toggleDrawer']),
      onScroll () {
        this.isScrolling = (window.pageYOffset ||
          document.documentElement.scrollTop || 0) > (this.$el.nextElementSibling.nextElementSibling.clientHeight || 100)
      }
    }
  }
</script>

<style>
  .toolbar-logo{
    max-width: 200px;
  }
</style>
