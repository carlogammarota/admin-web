<template>
    <div>
        <!-- {{ user }} -->
        <div  v-if="modalEditUser" id="popup-modal" tabindex="-1" class="bg-black fixed top-0 left-0 right-0 z-50 p-4 overflow-y-auto md:inset-0 h-modal md:h-full w-full">
            <div class="relative w-full h-full max-w-md md:h-auto m-auto mt-24">
                <div class="relative bg-gray-100 rounded-lg shadow dark:bg-gray-700">
                    <button type="button" @click="modalEditUser = false" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="popup-modal">
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                    
                    <div class="p-6">
                        <Profile :user="user"></Profile>
                        <!-- {{ getUser }} -->
                    <h3 class="my-2 text-lg font-normal ">Editar Usuario</h3>
                    <UploadImg @urllink="imgUrl"/>
                    <br>
                    <label for="base-input" class="block text-sm font-medium text-gray-900 dark:text-white float-left">Nombre</label>
                        <input v-model="user.nombre" type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        
                        <label for="base-input" class="block my-2 text-sm font-medium text-gray-900 dark:text-white float-left">Email</label>
                        <input v-model="user.email" type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        
                        <!-- <label for="base-input" class="block my-2 text-sm font-medium text-gray-900 dark:text-white float-left">Password</label>
                        <input v-model="user.password" type="password" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"> -->

                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white float-left mt-4">Descripcion</label>
                        <textarea id="message" v-model="user.descripcion" rows="4" class="mb-4 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
                    
                        
                                

                        <button  @click="SaveEditUser()" type="button" class="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                            Guardar
                        </button>

                        <button data-modal-hide="popup-modal" @click="modalEditUser = false"
                        type="button" 
                        class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                        Cancelar</button>
                    </div> 
                </div>
            </div>
        </div>

        <div class="font-sans w-full flex flex-row justify-center items-center">
        <div class="card w-96 mx-auto bg-white  shadow-xl hover:shadow mt-24">
            <img class="w-32 mx-auto rounded-full -mt-20 border-8 border-white" :src="user.img" alt="">
            
            <div class="text-center mt-2 text-3xl font-medium">{{ user.nombre }}</div>
            <div class="text-center mt-2 font-light text-sm">{{ user.email }}</div>
            <!-- <div class="text-center mt-2 font-light text-sm">Permissions</div> -->
            <div class="text-center font-normal text-lg">{{ user.permissions }}</div>
            <p class="text-green-700">{{ user._id }}</p>
            <div class="px-6 text-center mt-2 font-light text-sm">
            <p>
                {{ user.descripcion }}
            </p>
            </div>
            <hr class="mt-8">
            <button @click="modalEditUser = true" class="bg-blue-500 uppercase my-2 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            Editar
            </button>
            <!-- {{ nuevoObj }} -->
            <!-- followers coming soon -->

            <!-- <div class="flex p-4">
                <div class="w-1/2 text-center">
                    <span class="font-bold">1.8 k</span> Followers
                </div>
                <div class="w-0 border border-gray-300">
                    
                </div>
                <div class="w-1/2 text-center">
                    <span class="font-bold">2.0 k</span> Following
                </div>
            </div> -->
        </div>
        </div>
    </div>
</template>
<script>
const feathers = require("@/plugins/feathers.js");
import UploadImg from '@/components/UploadImg.vue';
import Profile from '@/components/Profile.vue';
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';


export default {
    data() {
        return {
            modalEditUser: false,
            config: {
                headers: { Authorization: `Bearer ` + this.getToken }
            },
            // nuevoObj: {
            //     nombre: null,
            //     descripcion: null,
            //     role: null,
            //     img: null,
            //     email: null
            // }
            
        }
    },
    mounted() {
        // this.nuevoObj = this.user;
    },
    methods: {
        SaveEditUser(){
            // this.user.creador = this.user;

            const config = {
    // headers: { Authorization: `Bearer ` + localStorage.token }
    headers: { Authorization: `Bearer ` + this.getToken }
};
           
            feathers.default.users
                .patch(this.user._id, this.user, config
                ) 
                .then((data) => {
                    console.log('se actualizo correctamente', data)
                    this.getUser(this.user._id);
                    this.modalEditUser = false;
                })
                .catch(console.log)
        },
        imgUrl(data){
            this.user.img = data;
        },
        getUser(_id){
            const config = {
    // headers: { Authorization: `Bearer ` + localStorage.token }
    headers: { Authorization: `Bearer ` + this.getToken }
};
            feathers.default.users
                .get(_id, config
                ) 
                .then((data) => {
                    this.postUser(data)
                    // console.log('data', data)
                })
                .catch(console.log)
        },
        ...mapActions({
            postUser: 'auth/postUser',
        }),

    },
    components: {
        Profile,
        UploadImg
    },
    props: ['user'],
    computed: {
        ...mapGetters(
            {
                getToken:'auth/getToken'
            }
        )
    },
    watch: {
        // 'modalEditUser'(newValue) {
        // // ...
        // this.nuevoObjx

        // // alert('test')
        // }
    }

}
</script>