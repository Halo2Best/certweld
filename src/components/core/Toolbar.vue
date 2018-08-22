<template>
  <v-toolbar
    app
    :dark="!isScrolling"
    flat
    dense
    :color="!isScrolling ? 'transparent' : '#fafafaba'"
    v-scroll="onScroll"
    class="pt-1 pb-1 z4"
  >
    <router-link :aria-label="'Home logo button'" to="/" class="toolbar-logo">
      <img
        src="/static/img/cert-weld-logo-ws-180w.png"
        alt="logo"
      />
    </router-link>
    <v-spacer />
    <v-toolbar-items v-if="$vuetify.breakpoint.mdAndUp">
      <v-btn
        v-for="(item, i) in items"
        :color="!isScrolling ? 'black--text' : undefined"
        :active-class="!isScrolling ? 'primary--text highlight' : 'primary--text a-highlight'"
        :key="i"
        :aria-label="item.text + ' button'"
        :to="item.to"
        flat
      >
        <span v-text="item.text" />
      </v-btn>
    </v-toolbar-items>
    <v-btn v-else icon @click="toggleDrawer">
      <v-icon>menu</v-icon>
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
      home () {
        return this.$router.push('/')
      },
      onScroll () {
        this.isScrolling = (window.pageYOffset ||
          document.documentElement.scrollTop || 0) > ((this.$el.nextElementSibling.nextElementSibling.clientHeight / 2.5) || 100)
      }
    }
  }
</script>

<style lang="stylus">
  /*.z20*/
    /*z-index 20 !important*/
  .toolbar-logo
    cursor pointer
    height 100%
    img
      height 90%

  .v-btn
    font-weight bold

  .highlight
    background rgba(246, 246, 246, 0.1)
  .a-highlight
    background rgba(100, 100, 100, 0.1)

</style>
