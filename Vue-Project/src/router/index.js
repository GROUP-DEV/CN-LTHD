import Vue from 'vue'
import Router from 'vue-router'
import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios,axios);
 
//import HelloWorld from '@/components/HelloWorld'
//import home from '../components/home.vue';
// import listMail from '../components/listMail.vue';
import login from '../components/login.vue';
import request from '../components/request.vue';


Vue.use(Router)

export default new Router({
  routes: [
    {
        name: 'request',
        path: '/',
        component: request
    },
  
    {
        name: 'login',
        path: '/request',
        component: login
    },
 
    // {
    //     name: 'listMail',
    //     path: '/list-mail',
    //     component: listMail
    // },
    // {
    //     name: 'listTickets',
    //     path: '/list-tickets',
    //     component: listTickets
    // },
  ]
})


