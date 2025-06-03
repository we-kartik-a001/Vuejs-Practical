<script setup>
const prop_data = {
  title: "Kartik web dev",
  name: "Vue js",
};
</script>

<template>
  <nav class="flex item-center justify-center gap-4 font-semibold">
    <router-link class="hover:text-blue-800" to="/index">Index</router-link>
    <router-link class="hover:text-blue-800" to="/template-ref"
      >Template</router-link
    >
  </nav>
  <!-- If we declare like this it will accessible everywhere -->
  <!-- <template-ref title="Kartik Web dev" /> -->
  <!-- <template-ref :title="prop_data.title"  /> -->
   <!-- <template-ref v-bind="prop_data" /> -->
  <template-ref :prop_data="prop_data" />
  

  <router-view></router-view>
</template>


