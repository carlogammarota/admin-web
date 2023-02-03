<template>
    <div>
        <!-- {{ user }} -->
        <div class="font-sans h-screen w-full flex flex-row justify-center items-center">
        <div class="card w-96 mx-auto bg-white  shadow-xl hover:shadow">
            <img class="w-32 mx-auto rounded-full -mt-20 border-8 border-white" :src="user.img" alt="">
            <div class="text-center mt-2 text-3xl font-medium">{{ user.nombre }}</div>
            <div class="text-center mt-2 font-light text-sm">{{ user.email }}</div>
            <div class="text-center font-normal text-lg">{{ user.role }}</div>
            <div class="px-6 text-center mt-2 font-light text-sm">
            <p>
                {{ user.descripcion }}
            </p>
            </div>
            <hr class="mt-8">
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
export default {
    props: ['user']
}
</script>