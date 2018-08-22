<template>
  <v-parallax
    :height="height"
    :src="src"
    :alt="'background image' + src"
    :class="classes"
  >
    <slot name="default" />
  </v-parallax>
</template>

<script>
  export default {
    name: 'alpha-hero',

    props: {
      src: String,
      dark: Boolean,
      height: {
        type: [Number, String],
        default: '100vh'
      },
      light: Boolean
    },
    computed: {
      classes () {
        return {
          'v-parallax--dark': this.dark,
          'v-parallax--light': this.light
        }
      }
    }
  }
</script>

<style lang="stylus">
  .v-parallax--dark,
  .v-parallax--light
    .v-parallax__image-container:after
      bottom: 0
      content: ''
      position: absolute
      left: 0
      right: 0
      top: 0
      z-index: 1

  .v-parallax
    &--light &__image-container:after
      background: linear-gradient(to top, rgba(#fff, .8), rgba(#fff, .9))

    &--dark &__image-container:after
      background: linear-gradient(to top, rgba(45,45,47,0.85), rgba(25, 24, 25, 1));
</style>
