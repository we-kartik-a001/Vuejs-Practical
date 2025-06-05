<script setup>
const props = defineProps({
  poster: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits({
  editPost(postId){
    if(postId && typeof postId === 'number'){
      return true;
    }
    return false;
  }
});
</script>

<template>
  <div class="flex justify-center items-center">
    <div class="border border-2 border-black text-black font-bold m-2 p-3 rounded-lg">
      <h1>SinglePost</h1>
      <p>id: {{ poster.id }}</p>
      <p>title: {{ poster.title }}</p>
      <button
        class="border p-2 rounded-xl bg-blue-400"
        @click.prevent="emit('editPost', props.poster.id)"
      >
        Click
      </button>
    </div>
  </div> 
</template>
