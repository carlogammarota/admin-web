<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- {{ blogs }} -->

    <ul v-for="item in blogs" :key="item.id">
      <li>{{ item.titulo }}</li>
      <li>{{ item.descripcion }}</li>
    </ul>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'
export default {
  name: 'HomeView',
  components: {
    // HelloWorld
  },
  data() {
    return {
      blogs: []
    }
  },
  mounted () {
    // axios
    //   .get('http://localhost:3030/blog')
    //   .then(response => {
    //     console.log(response.data)
    //   })

    axios.get('http://localhost:3030/blog')
      .then(response => {
        // handle success
        console.log(response.data.data);
        let blogs = response.data.data;
        this.blogs = blogs;

      })
      .catch(error => {
        alert("no pudo traer los blogs")
        // handle error
        console.log(error);
      })
  }
}
</script>
