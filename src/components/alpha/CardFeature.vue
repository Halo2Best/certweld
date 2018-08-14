<template>
  <v-container grid-list-xl pa-0>
    <v-layout
      row
      wrap
      justify-center
      align-start
    >
      <v-flex
        xs12
        sm3
        d-flex
        v-for="(feature, i) in features"
        :key="i"
      >
        <v-card :class="['mi--' + i]" flat tile dark class="grey darken-3 elevation-1">
          <v-card-media
            :src="`/static/img/${feature.img}.jpg`"
            :height="cardHeight"
          />
          <v-card-title class="title" v-text="feature.title" />
          <v-card-text v-text="feature.text" />
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'alpha-card-feature',

    props: {
      cardHeight: {
        type: String,
        default: '200px'
      },
      features: {
        type: Array,
        default: () => ([])
      }
    }
  }
</script>

<style lang="stylus">
  .mi--0
    position: relative;
    margin-top 2em;
  .mi--1
    position relative
    margin-top 0em;
  .mi--2
    position: relative;
    margin-top 6em;
  .container.grid-list-xl .layout .flex
    padding 0

</style>
