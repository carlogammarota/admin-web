import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import Notifications from '@kyvg/vue3-notification'



//Esta es la logica para que vuelva la vista login si no encuentra token en el store/auth


// router.beforeEach((to, from, next) => {
//   if (!store.state.auth.token && to.path !== '/login') {
//     next('/login');
//   } else {

//     next();
//   }
// });

router.beforeEach((to, from, next) => {
  if (!store.state.auth.token && to.path !== '/login') {
    next('/login');
  } else if (store.state.token && to.path === '/login') {
    next('/');
  } else {
    next();
  }
});

//   const requireAuth = (to, from, next) => {
//     if (!store.state.auth.token && !store.state.auth.user) {
//       if (to.path !== '/login') {
//         next({
//           path: '/login',
//         });
//       }

//       //   console.log(store.state.auth.token)
//       //   if (to.path !== '/login') {
//       //     next({
//       //       path: '/login',
//       //     });
//       //   } else {
//       //     next('/');
//       //   }
//       // } else {
//       //   next();
//       // }

//       // next();
//       // next({path: '/login' })
//   };
// }

// router.beforeEach(requireAuth);


createApp(App).use(store).use(router).use(Notifications).mount('#app');
