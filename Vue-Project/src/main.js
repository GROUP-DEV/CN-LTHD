// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps'
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
})

// require('./assets/css/bootstrap.min.css');
// require('./assets/font-awesome/css/font-awesome.css');
// require('./assets/css/sb-admin.css');
// // require('./assets/css/custom.css');
// require('./assets/css/style.css');


// require('./assets/js/vue.js');
// require('./assets/js/jquery-1.10.2.js');
// require('./assets/js/bootstrap.min.js');
// require('./assets/js/plugins/metisMenu/jquery.metisMenu.js');
// require('./assets/js/sb-admin.js');
// require('./assets/js/jquery-ui.js');
// require('./assets/js/custom.js');

export const eventBus = new Vue();
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

