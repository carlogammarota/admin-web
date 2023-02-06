<template>
    <div>
       
        <Header v-on:logout="logout()"></Header>

<!-- Sidebar -->
<Sidebar></Sidebar>
mis blogs
<div class="h-full ml-14 mt-14 mb-10 md:ml-64">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
        <!-- {{ getUser }} -->
        

        <!-- {{ myBlogs }} -->

        <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
    <thead class="bg-gray-50">
      <tr>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Name</th>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Titulo</th>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Descripcion</th>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">State</th>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">IMG</th>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Team</th>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">ACTIONSX</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-100 border-t border-gray-100">
      <tr class="hover:bg-gray-50" v-for="item in myBlogs" :key="item.id">
        <!-- {{ item._id }} -->
        <!-- {{item.creador}} -->
        <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
          <div class="relative h-10 w-10">
            <img
              class="h-full w-full rounded-full object-cover object-center"
              :src="item.creador.img"
              v-if="item.creador.img"
              alt=""
            />
            <span class="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
          </div>
          <div class="text-sm">
            <div class="font-medium text-gray-700">{{item.creador.nombre}}</div>
            <!-- <div class="text-gray-400">{{item.creador.role}}</div> -->
            <div class="text-gray-400">
                <span
                class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600"
                >
                {{item.creador.permissions}}
                </span>    
            </div>
            

            <!-- <div class="font-medium text-gray-700">{{item.titulo}}</div>
            <div class="text-gray-400">{{item.descripcion}}</div> -->
          </div>
        </th>
        <td class="px-6 py-4 text-black">
            {{ item.titulo }}
        </td>
        <td class="px-6 py-4 text-black">
            {{ item.descripcion }}
        </td>
        <td class="px-6 py-4">
          <span
            class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
          >
            <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>
            Active
          </span>
        </td>
        <td class="px-6 py-4">
            <img :src="item.img" alt="">
        </td>
        <td class="px-6 py-4">
          <div class="flex gap-2">
            <span
              class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600"
            >
              Design
            </span>
            <span
              class="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600"
            >
              Product
            </span>
            <span
              class="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600"
            >
              Develop
            </span>
          </div>
        </td>
        <td class="px-6 py-4" >
          <div class="flex justify-end gap-4">
            <button @click="showModal(item._id)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6"
                x-tooltip="tooltip"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
            <button @click="ShowModalEdit(item._id)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6"
                x-tooltip="tooltip"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                />
              </svg>
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
            
        </div>

 







    <!-- ./Contact Form -->

    <!-- External resources -->
    <div class="mt-8 mx-4">
        <div class="p-4 bg-blue-50 dark:bg-gray-800 dark:text-gray-50 border border-blue-500 dark:border-gray-500 rounded-lg shadow-md">
        <h4 class="text-lg font-semibold">Have taken ideas & reused components from the following resources:</h4>
        asd
        </div>
    </div>
    <!-- ./External resources -->
    </div>
    </div>
</template>
<script>

import Sidebar from '@/components/Sidebar.vue';
import Header from '@/components/Header.vue';
const feathers = require("@/plugins/feathers.js");
import { mapGetters } from 'vuex';
export default {
    data() {
        return {
            myBlogs: []
        }
    },
    components: {
        Sidebar,
        Header
    },
    mounted() {
        feathers.default.myBlogs
                .get(this.getUser._id
                ) 
                .then((data) => {
                    console.log('BLOG UNICO', data);
                    this.myBlogs = data
                    // this.titulo = data.titulo;
                    // this.descripcion = data.descripcion;
                    // this.imgLinkUrl = data.img
                })
                .catch(console.log)
    },
    computed: {
      ...mapGetters({
        getUser:'auth/getUser',
        getToken:'auth/getToken'
      }
    )
  }
}
</script>