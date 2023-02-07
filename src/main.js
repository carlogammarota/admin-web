import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import Notifications from '@kyvg/vue3-notification'



//Esta es la logica para que vuelva la vista login si no encuentra token en el store/auth

/*
  const requireAuth = (to, from, next) => {
    if (!store.state.auth.token) {
        console.log(store.state.auth.token)
        if (to.path !== '/login') {
          next({
            path: '/login',
          });
        } else {
          next();
        }
      } else {
        next();
      }
  };

router.beforeEach(requireAuth);
*/

createApp(App).use(store).use(router).use(Notifications).mount('#app');
