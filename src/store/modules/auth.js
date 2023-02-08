import axios from 'axios'
import router from "@/router";
import { notify } from "@kyvg/vue3-notification";
export default {
    namespaced: true,

    state: {
        count: 30,
        token: null,
        user: {}
    },
    getters: {
        getCount (state) {
            return state.count;
        },
        getToken (state){
            // console.log("token", state.token)
            return state.token;
        },
        getUser (state){
            return state.user;
        }
    },
    mutations: {  
        changeCount (state, data) {
            // console.log('store', data)
            state.count = data;
        },
        TOKEN_POST (state, data) {
            state.token = data;
        },
        REMOVE_TOKEN(state){
            state.token = null;
            state.user = null;
        },
        USER_POST(state, data){
            state.user = data;
            // console.log("user post", data)
        },

    },
    actions: {
        authentication({ commit, state }, data) {
        // console.log('authentication', data);
            axios.post('http://localhost:3030/authentication', {
            // axios.post('http://64.227.76.217:3030/authentication', {
                "strategy": "local",
                "email": data.email,
                "password": data.password
            })
            .then(response => {
                console.log('Datos Correctos')
                console.log('respuesta', response.data);
                
                commit('TOKEN_POST', response.data.accessToken);
                commit('USER_POST', response.data.user);

                // this.$router.push({ name: 'routename' })
                // router.push('/');
                router.push('/');

                notify({
                    // (optional)
                    // Name of the notification holder
                    // group: 'foo',
                
                    // (optional)
                    // Title (will be wrapped in div.notification-title)
                    title: 'Success!',
                
                    // Content (will be wrapped in div.notification-content)
                    text:'Bienvenido ' + response.data.user.nombre,
                
                    // (optional)
                    // Class that will be assigned to the notification
                    type: 'success',
                
                    // (optional, override)
                    // Time (in ms) to keep the notification on screen
                    duration: 2000,
                
                    // (optional, override)
                    // Time (in ms) to show / hide notifications
                    speed: 1000,
                
                    // (optional)
                    // Data object that can be used in your template
                    // data: {}
                  })

                // localStorage.token = response.data.accessToken;
                // localStorage.user = response.data.user;


                // console.log('response.data.accessToken', response.data.accessToken)
                
        
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
                // simple
                notify({
                    // (optional)
                    // Name of the notification holder
                    // group: 'foo',
                
                    // (optional)
                    // Title (will be wrapped in div.notification-title)
                    title: 'ERROR!',
                
                    // Content (will be wrapped in div.notification-content)
                    text: error.message,
                
                    // (optional)
                    // Class that will be assigned to the notification
                    type: 'error',
                
                    // (optional, override)
                    // Time (in ms) to keep the notification on screen
                    duration: 10000,
                
                    // (optional, override)
                    // Time (in ms) to show / hide notifications
                    speed: 1000,
                
                    // (optional)
                    // Data object that can be used in your template
                    // data: {}
                  })

            });
    
        },
        logoutStore({ commit, state }, data) {
            console.log('logoutStore')
            commit('REMOVE_TOKEN');
            // localStorage.token = null;
            // localStorage.user = null;
            router.push('/login');
        },
        postUser({ commit, state }, data) {
            //  console.log('postUser', data)
             commit('USER_POST', data);
             // router.push('/');
        },
        postLocalStorageToken({ commit, state }, data) {
            // console.log('postLocalStorageToken', data.token)
            // if (localStorage.token ) {
            //     commit('TOKEN_POST', localStorage.token);
            //     commit('USER_POST', localStorage.user);
            // }
            // console.log('ID', data.user)
            
            // commit('USER_POST', data.user.id);
            // router.push('/');
        }
    },
}