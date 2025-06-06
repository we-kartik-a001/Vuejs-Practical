<template>
  <div class="text-center border bg-yellow-400 m-4 p-3">
    <p>Slot component</p>

    <!-- named slots -->
    <div>
      <p><slot name="cardTitle"> </slot></p>
      <p><slot name="Parenttitle"> </slot></p>
      <p><slot name="title" :pTitle="postTitle"></slot></p>
    </div>

    <!-- unamed slots -->
    <p><slot>Default slot</slot></p>

    <button class="border p-1 rounded-xl">
      <slot> default text</slot>
    </button>
  </div>
</template>
<script setup>
  
    const  postTitle= 'Post title'
    
</script>
