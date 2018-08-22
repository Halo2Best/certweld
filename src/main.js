// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MobileDetect from 'mobile-detect'

// Transitions

import { createSimpleTransition } from 'vuetify/es5/util/helpers'

// Components
import './components'

// Plugins
import './plugins'

// Sync router with store
import { sync } from 'vuex-router-sync'

// Application imports
import App from './App'
import i18n from '@/i18n'
import router from '@/router'
import store from '@/store'

// Sync store with router
sync(store, router)

Vue.config.productionTip = false

const qFadeTransition = createSimpleTransition('q-fade-transition')

Vue.component('q-fade-transition', qFadeTransition)

Vue.mixin({
  data () {
    return {
      get webp () {
        return document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') === 0
      },
      playSound () {
        this.audio = this.audio || new Audio('/static/sound/click.mp3')
        this.audio.play()
      },
      md: new MobileDetect(window.navigator.userAgent)
    }
  }
})

/* eslint-disable no-new */
new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
