<template>
  <v-navigation-drawer
    fixed
    temporary
    v-model="inputValue"
    right
  >
    <v-list light>
      <v-list-tile>
        <v-spacer />
        <v-btn icon @click="toggleDrawer">
          <v-icon >close</v-icon>
        </v-btn>
      </v-list-tile>
      <v-list-tile

        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
      >
        <v-icon
          class="mr-3 pa-4"
          sm
        >
          {{item.icon}}
        </v-icon>
        <v-list-tile-title v-text="item.text" />
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  // Utilities
  import { mapMutations } from 'vuex'

  export default {
    computed: {
      inputValue: {
        get () {
          return this.$store.state.app.drawer
        },
        set (val) {
          this.setDrawer(val)
        }
      },
      items () {
        return this.$t('Layout.View.items')
      }
    },

    methods: {
      ...mapMutations('app', ['setDrawer', 'toggleDrawer'])
    }
  }
</script>

<style lang="stylus">
  .v-list__tile--active
    .v-icon
      color: #2592bf

  .v-navigation-drawer--temporary, .v-navigation-drawer--is-mobile
    z-index 21
</style>
