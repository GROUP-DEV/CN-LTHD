// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import moment from 'moment'
import VueAxios from 'vue-axios';
import axios from 'axios';
import * as VueGoogleMaps from 'vue2-google-maps'


Vue.use(VueAxios,axios);
// google Map
Vue.use(VueGoogleMaps, {
		load: {
		key: 'AIzaSyCHY7K0nxdBJ2MVMMVe46mJP8PvoezIUvc',
		libraries: 'places', // This is required if you use the Autocomplete plugin
		},
});

// format Date
Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('MM/DD/YYYY hh:mm')
  }
})

// tocken
// const axiosApi = axios.create({
//    baseURL: (process.env.VUE_APP_BASE_URL !== undefined) ? process.env.VUE_APP_BASE_URL : '//trackerapp.local/'
//  })

// export const setAuthHeader = (token) => {
//  axiosApi.defaults.headers.common['Authorization'] = `Bearer ${token}`
// }


export const eventBus = new Vue();
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

