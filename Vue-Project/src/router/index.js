import Vue from 'vue'
import Router from 'vue-router'
import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios,axios);

//import HelloWorld from '@/components/HelloWorld'
//import home from '../components/home.vue';
// import listMail from '../components/listMail.vue';

import request from '../components/request.vue';
import login from '../components/login.vue';
import render from '../components/render.vue';
import location from '../components/location.vue';
import management from '../components/managementRequest.vue';
Vue.use(Router)

export default new Router({
  routes: [
  
   {
        name: 'login',
        path: '/',
        component: login
    },
     {
        name: 'render',path: '/render',component: render,children:[
            {path:'/request',name:'request',component:request},
            {path:'/location',name:'location',component:location},
            {path:'/management',name:'management',component:management}
        ]
    },
   // {
   //      name: 'render',
   //      path: '/uc-request',
   //      component: render
   //  },
   
 
  
 
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


