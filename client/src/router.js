import Vue from 'vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import auth from './firebase.auth.config.js'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: Routes,
    mode: 'history'
  })

router.beforeEach((to, from, next) => {
  const currentUser = auth.currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if(requiresAuth && !currentUser) next('login')
  else if(!requiresAuth && currentUser) next('Home')
  else next()
})

export default router