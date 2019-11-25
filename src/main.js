import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import NavBar from './components/core/NavBar.vue';
import SideNav from './components/core/SideNav.vue';
import Vuex from "vuex"
import VueSession from 'vue-session'
import VueLocalStorage from 'vue-localstorage'

Vue.use(VueLocalStorage)
Vue.use(VueSession);
Vue.component('app-navbar',NavBar);
Vue.component('app-sidenav',SideNav);
Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store(
  {
    state: {
      authenticated: false
    },
    mutations: {
      setAuthentication(state, status) {
        state.authenticated = status;
      }
    }
  }
);
const routes = [
  {path:'*',component:Login},
  {path:'/home',component:Home,
    beforeEnter:(to,from,next)=>{
      if (store.state.authenticated == false){
        next("/login");
      } else {
        next();
      }

  }
  }
];

const router = new VueRouter({
  routes,
  /*base: process.env.BASE_URL,*/
  mode:'history'
});

/*router.beforeEach((to, from, next) => {
  /!*if (to.path == '/home') {
    next('/')
  }*!/
});*/
new Vue({
  el: '#app',
  router,
  store: store,
  render: h => h(App)
})
