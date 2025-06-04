<template>
  <div class="text-center flex justify-center py-4">
    <div class="w-/5 border p-2 border-2 rounded-lg">
      <h2 class="font-bold text-blue-800">Child Component</h2>
      <h2 ref="title">Child Title</h2>

      <!-- <h2>{{ props.name }}</h2> -->

      <h1>Kartik</h1>
      <p ref="paragraph">This is the child file</p>
       <p class="bg-gray-400 rounded-lg text-yellow-200 font-bold">
      {{ props.childprops?.title }}
    </p>
      <p class="font-semibold text-red-600">Locally declared</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const title = ref(null);

const paragraph = ref(null);

const message = ref("From the child");

const saymessage = () => {
  alert(message.value);
};

// const props = defineProps({
//   name: String, // receiving the prop from parent
// });

const props = defineProps({
  childprops: Object
})

console.log(props.childprops)

defineExpose({
  title,
  paragraph,
  saymessage,
});
</script>
