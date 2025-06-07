<template>
  <div>
    <p>user page</p>
    <p class="text-blue-600 hover:text-bl" v-for="u in user" :key="u.id">
      <router-link
        :to="{
          name: 'UserSingle',
          params: {
            id: u.id,
          },
          query: {
            name: u.name,
          },
        }"
      >
        {{ u.id }} - {{ u.name }}
      </router-link>
    </p>
     <router-view></router-view>
  </div>
 
</template>

<script setup>
import { reactive } from "vue";

const user = reactive([
  { id: 1, name: "John" },
  { id: 2, name: "Ron" },
  { id: 3, name: "Thon" },
  { id: 4, name: "Don" },
]);
</script>


