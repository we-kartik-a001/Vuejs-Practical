<template >
  <div
    class="flex flex-col justify-center items-center py-10 rounded-md mx-auto"
  >
    <div class="w-2/5 text-center border border-2 rounded-lg py-10">
      <div class="p-2">
        <!-- variable childref -->
        <!-- 
          * This child component contain all the function and variable
          * All the things as passed in the childref variable
         -->
        <p class="font-bold text-blue-600">Parent Component</p>

        <!-- Child Component used  -->
        <Child :name="parentMessage" :childprops="childprops"/>
        <button
          class="border p-1 bg-gray-200 rounded-md"
          @click="childfunction"
        >
          call child function
        </button>
      </div>

      <button class="border p-1 bg-gray-200 rounded-md" @click="logChild">
        Log Child DOM
      </button>
      <div class="p-2">
        <input
          class="border border-red-800 hover:none rounded-md"
          type="text"
          v-model="texttaker"
        />
        <p>{{ texttaker }}</p>
      </div>
    </div>
  </div>
</template>

<!-- Js -->
<script setup>
import { ref } from "vue";
import Child from "./Child.vue";

const childref = ref(null);

const logChild = () => {
  console.log(childref.value.title);
  console.log(childref.value.paragraph);
};

const childfunction = () => {
  childref.value.saymessage();
};

const texttaker = ref("");

const parentMessage = 'Hello from Parent!'

const childprops = ref({
  title:'Parent props'
})
</script>
