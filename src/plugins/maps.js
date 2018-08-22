import * as VueGoogleMaps from 'vue2-google-maps'
import Vue from 'vue'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAh5_eXIf6zgW8xyYiUVIgQq0IZ2Fo6W5w',
    libraries: 'places'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

  }
})
