import Vue from 'vue'
import VueRouter from 'vue-router'

import Route1 from '@/components/views/View1.vue';
import Route2 from '@/components/views/View2.vue';

Vue.use(VueRouter)

const routes = [
  // this is the index.html view
  {
    path: "",
    name: "Home",
    component: Route1,
  },   
  {
    path: "/route1",
    name: "Route1",
    component: Route1,
  },
  {
    path: "/route2",
    name: "Route2",
    component: Route2
  },    
  // we do this way for lazy loading      
  {
    path: "/route3",
    name: "Route3",
    component: () => import(/* webpackChunkName: "Route3" */ '../components/views/View3.vue')
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

export default router
