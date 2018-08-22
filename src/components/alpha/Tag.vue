<template>
  <div :style="{bottom: offset}" class="tag grey darken-3">
    <v-layout align-center justify-center>
      <a :href="text">
      <v-tooltip left>
        <v-icon slot="activator" dark large>
          {{icon || "phone"}}
        </v-icon>
        <span>{{text}}</span>
      </v-tooltip>
      </a>
    </v-layout>
  </div>
</template>

<script>
  export default {
    name: 'alpha-tag',
    props: {
      text: String,
      value: String,
      offset: String,
      icon: String,
      height: {
        type: [Number, String],
        default: '50px'
      },
      light: Boolean
    }
  }
</script>
<style lang="stylus">
  .tag
    cursor pointer
    position fixed
    bottom 150px
    right 0
    width 50px
    height 50px
    border-radius 4px 0 0 4px
    & > div
      width 100%
      height 100%
</style>
