import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    count: 30,
    token: ''
  },
  getters: {
    getCount (state) {
      return state.count;
    },
    getToken (state){
      return state.token;
    }
  },
  mutations: {  
    changeCount (state, data) {
      // console.log('store', data)
      state.count = data;
    },
    tokenPost (state, data) {
      state.token = data;
    },
    remoteToken(state){
      state.token = null;
    }
  },
  actions: {
    authentication({ commit, state }, data) {
      // console.log('authentication', data);
      axios.post('http://localhost:3030/authentication', {
        "strategy": "local",
        "email": data.email,
        "password": data.password
      })
      .then(response => {
        console.log('Datos Correctos')
        // console.log('respuesta', response.data);
        
        commit('tokenPost', response.data.accessToken);

        // commit('tokenPost', response.data.accessToken)
        // state.token = response.data.accessToken;
        // this.user = response.data.user;
        // console.log('user', this.user);
        
        //Guardamos el token en localstor age para que cuando se refresque la pesta
        // localStorage.token = response.data.accessToken;
        // this.loginStatus = true;
      })
      .catch(error => {
        console.log('Datos Incorrectos')
        console.log(error);
      });

    },
    logoutStore({ commit, state }, data) {
      commit('remoteToken');
    }
  },
  modules: {
  }
})
