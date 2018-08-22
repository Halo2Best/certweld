<template>
  <v-footer>
    <v-container fluid class="alpha-footer">
      <v-layout
        row
        wrap
        class="grey darken-3 fill-height"
      >
        <v-flex
          md3
          sm6
          xs12
          class="pa-4 grey darken-4"
        >
          <h5 class="title pb-3" v-text="company"/>
          <v-layout
            wrap
            layout
            align-center
            :class="{'d-block' : $vuetify.breakpoint.smAndUp}"
          >
            <v-flex
              wrap
              v-for="(item, i) in computedSocial"
              :key="i"
              class="f-link"
            >
              <router-link
                :to="item.to"
                class="toolbar-logo layout align-center"
              >
                <v-icon
                  sm
                  dark
                  class="mr-3"
                  v-text="item.icon"
                />
                <span class="" v-text="item.text"/>
              </router-link>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex
          md3
          sm6
          xs6
          class="pa-4"
          v-for="(item, i) in categories"
          :key="i"
        >
          <h5 class="title pb-3" v-text="item.title"/>
          <ul>
            <li v-for="(n, i) in item.items" :key="i">
              <a :to="n.href" v-text="n.text"/>
            </li>
          </ul>
        </v-flex>
        <v-flex
          md3
          sm6
          xs12
          class="pa-4 grey darken-4"
        >
          <h5 class="title pb-3">
            Contact
          </h5>
          <ul>
            <li>
              <v-layout justify-start row>
                <v-icon
                  dark
                  class="mr-3"
                >
                  phone
                </v-icon>
                <a class="p-format" :href="'tel:' + contact.phone" v-text="contact.phone">
                </a>
              </v-layout>
            </li>
            <li>
              <v-layout justify-start row>
                <v-icon
                  dark
                  class="mr-3"
                >
                  home
                </v-icon>
                <p class="p-format" v-text="contact.address">
                </p>
              </v-layout>
            </li>
            <li>
              <v-layout justify-start row>
                <v-icon
                  dark
                  class="mr-3"
                >
                  access_time
                </v-icon>
                <v-layout justify-start column>
                  <p class="p-format" v-text="contact.hours.weekday">
                  </p>
                  <p class="p-format" v-text="contact.hours.weekend">
                  </p>
                </v-layout>
              </v-layout>
            </li>
          </ul>
        </v-flex>
        <v-flex xs12>
          <v-card
            tile
            flat
            dark
            class="grey darken-4 text-xs-center"
          >
            <v-card-text>
              <slot/>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-footer>
</template>

<script>
  export default {
    name: 'alpha-footer',
    props: {
      categories: {
        type: Array,
        default: () => ([])
      },
      company: String,

      contact: {
        type: Object,
        default: () => ({})
      },
      facebook: String,
      github: String,
      social: {
        type: Array,
        default: () => []
      },
      twitter: String
    },
    computed: {
      computedSocial () {
        if (this.social.length) return this.social

        const social = []

        if (this.github) {
          social.push({
            text: this.$t('Layout.Footer.github'),
            icon: 'mdi-github-circle',
            href: this.github
          })
        }

        if (this.twitter) {
          social.push({
            text: this.$t('Layout.Footer.twitter'),
            icon: 'mdi-twitter-circle',
            href: this.twitter
          })
        }

        if (this.facebook) {
          social.push({
            text: this.$t('Layout.Footer.facebook'),
            icon: 'mdi-facebook-box',
            href: this.facebook
          })
        }
        return social
      }
    }
  }
</script>


<style lang="stylus" scoped>
  .p-format
    margin-bottom: 0;
    display: block
    line-height: 1.8

  .alpha-footer
    background: #303c42
    color: #fff
    display: block
    padding: 0 !important
    height: auto

    .container
      padding: 0
      margin: 0

    .f-link
      margin-bottom: 10px
      a
        text-decoration: none
        transition: .2s ease-in
        &:hover
          opacity: .5

    ul
      list-style-type: none
      margin: 0
      padding: 0

      li
        margin-bottom: 10px

      a
        text-decoration: none
        transition: .2s ease-in

        &:hover
          opacity: .5
</style>
