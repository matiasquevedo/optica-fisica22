import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "../store";
// import Home from '../views/Home.vue'
import HomeView from '../views/HomeView.vue'



Vue.use(VueRouter)
const routes = [

  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      title: 'Inicio',
      metaTags: [
        {
          name: 'description',
          content: 'The about page of our example app.'
        },
        {
          property: 'og:description',
          content: 'The about page of our example app.'
        }
      ]
    },
  },
  

]

const router = new VueRouter({
  mode: 'history',
  routes,
  linkActiveClass: "active", // active class for non-exact links.
  linkExactActiveClass: "active-index" // active class for *exact* links.
})

const DEFAULT_TITLE = 'Ponele titulo';
router.afterEach((to) => {
    // Use next tick to handle router history correctly
    // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
    Vue.nextTick(() => {
        document.title = to.meta.title +' - Física 2022' || DEFAULT_TITLE;
    });
});



router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {

      next()
      return

    }else{
      next('/login')
    }

    if(to.matched.some(record => record.meta.requiresAdmin) && store.getters.isAdmin){
      next()
      return
    }


    next()
  } else {
    next()
  }
})


export default router
