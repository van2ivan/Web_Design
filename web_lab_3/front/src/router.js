import Vue from 'vue'
import VueRouter from 'vue-router'

//import --- from '@/components/profile.vue'
//import --- from '@/components/login.vue'


Vue.use(VueRouter)

const routes = [
  { path: '/', component: UserProfile,
    meta: { auth : false } },
  { path: '/', component: About,
    meta: { auth : false } },
  { path: '/', component: LogIn, 
    meta: {sidebar: false, auth : false } },
  { path: '/', component: SignUp, 
    meta: {sidebar: false, auth : false } }
]

export default new VueRouter({
  mode: 'history',
  routes: routes
})