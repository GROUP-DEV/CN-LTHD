import Vue from 'vue'
import Router from 'vue-router'


//import HelloWorld from '@/components/HelloWorld'
//import home from '../components/home.vue';
// import listMail from '../components/listMail.vue';

import request from '../components/request.vue';
import login from '../components/login.vue';
import renders from '../components/render.vue';
import location from '../components/location.vue';
import management from '../components/managementRequest.vue';
import driver from '../components/taixe.vue';
Vue.use(Router)

export default new Router({
  routes: [
  
   {
        name: 'login',
        path: '/',
        component: login
    },
     {
        name: 'renders',path: '/renders',component: renders,children:[
            {path:'/request',name:'request',component:request},
            {path:'/location',name:'location',component:location},
            {path:'/management',name:'management',component:management}
        ]
    },
    {
        name: 'driver',
        path: '/driver',
        component: driver
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


