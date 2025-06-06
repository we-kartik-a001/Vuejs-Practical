<script setup>
import { ref } from "vue";

const post = ref([]);
const getpost = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => (post.value = data));
};

</script>

<template>
  <div class="text-center h-screen">
    <div class="border p-4">
      <p class="text-center">Fetchapi</p>
      <button class="border p-2" @click="getpost">Click here</button>
      <div v-for="p in post " :key="p.id">
        <p >{{ p.id }} {{ p.title }}</p>
      </div>
    </div>
  </div>
</template>                   