<template>
  <v-toolbar
    app
    :dark="!isScrolling"
    flat
    dense
    :color="!isScrolling ? 'transparent' : '#fafafaba'"
    v-scroll="onScroll"
    class="pt-1 pb-1"
  >
    <img
      class="toolbar-logo"
      src="/static/img/cert-weld-logo-200-sw.png"
    />
    <v-spacer />
    <v-toolbar-items v-if="$vuetify.breakpoint.mdAndUp">
      <v-btn
        v-for="(item, i) in items"
        :color="!isScrolling ? 'black--text' : undefined"
        active-class="primary--text highlight"

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
          document.documentElement.scrollTop || 0) > (this.$el.nextElementSibling.nextElementSibling.clientHeight - 100 || 100)
      }
    }
  }
</script>

<style lang="stylus">
  .toolbar-logo
    height: 70%
  .highlight
    background rgba(246, 246, 246, 0.1)

</style>
