<template>
  <div>
    <p>Single Page</p>
    <p>{{ $route.params.id }}</p>
    <p>{{ $route.query.name }}</p>
  </div>
</template>

<script setup>
// No need to define props if using $route
</script>
