import Vue from "vue"
import VueRouter from "./myRouter"
import Home from '../components/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: 'about' */ '../components/about.vue')
  }
];

const router = new VueRouter({
  // mode:"history",
  routes
})
export default router