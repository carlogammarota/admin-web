<template>
    <div>
        <div class=" flex flex-col flex-auto flex-shrink-0 antialiased bg-white  text-black "></div>
        <Header></Header>
        <Sidebar></Sidebar>
        
        

    <div class="h-full ml-14 mt-14 mb-10 md:ml-64">
        

        <!-- {{ user }} -->
        <Profile :user="user"></Profile>
    </div>
    </div>
    
</template>
<script>
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'
import Profile from '@/components/Profile.vue'
import store from '@/store/index'

import { mapMutations } from 'vuex'
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
export default {
    components: {
        Sidebar,
        Header,
        Profile
    },
    mounted() {
        // console.log('getCount', this.getCount);
        // if (localStorage.token) {
        //     this.postLocalStorageToken({token: localStorage.token, user: localStorage.user})
        // };
    },
    methods: {
        getUser(){
            feathers.default.blog
                .get(this.$route.params.id
                ) 
                .then((data) => {
                    console.log('data', data)
                })
                .catch(console.log)
        },
        ...mapMutations({
            changeCount: 'auth/changeCount',
        }),
        ...mapActions(
            {
                authentication: 'auth/authentication',
                postLocalStorageToken: 'auth/postLocalStorageToken',
            }
        ),
    },
    
    computed: {
        ...mapGetters(
            {
                getCount: 'auth/getCount',
                user: 'auth/getUser',
            }
        )
    }
}
</script>