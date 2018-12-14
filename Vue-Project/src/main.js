// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import moment from 'moment'
import * as VueGoogleMaps from 'vue2-google-maps'
// google Map
Vue.use(VueGoogleMaps, {
		load: {
		key: 'AIzaSyCHY7K0nxdBJ2MVMMVe46mJP8PvoezIUvc',
		libraries: 'places', // This is required if you use the Autocomplete plugin
		// OR: libraries: 'places,drawing'
		// OR: libraries: 'places,drawing,visualization'
		// (as you require)

		//// If you want to set the version, you can do so:
		// v: '3.26',
		},
});

// format Date
Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('MM/DD/YYYY hh:mm')
  }
})


export const eventBus = new Vue();
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

