<template>
    <div><button @click="postdata"> Click here</button>
        <div>
            <p v-for="p in post" :key="p.id">{{ p.id }}- {{ p.title}}</p>
        </div>
    </div>
</template>
<script setup>
import axios from 'axios';
import { ref } from 'vue';

const post = ref([]);

const postdata = () =>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => post.value = response.data)
    .catch(error => console.error('Error fetching posts:', error))
}
</script>
