<script setup>
import { ref } from "vue";
import Post from "./Post.vue";
import CustomInput from "./CustomInput.vue";

const searchtext = ref('Hi this web dev from the office');

const header = ref(null);

const changecolor = () => {
  if (header.value.textContent === "Main Page") {
    header.value.textContent = "yellow";
  } else {
    header.value.textContent = "Main Page";
  }
};

//Array
const items = ["Flower", "Animal", "Fruit"];

const itemsRefs = ref([]);

const setItemRef = (el) => {
  if (el) {
    itemsRefs.value.push(el);
  }
};

const logItems = () => {
  console.log("All DOM elements:", itemsRefs.value);

  itemsRefs.value.forEach((el, index) => {
    console.log(`Item ${index}:`, el.textContent);
  });
};

// Practice of El
const datas = ["Ankur", "Gokesh", "Mukesh", "Rakesh", "Sukesh"];

const dataref = ref([]);

const setDataRef = (el) => {
  if (el) {
    dataref.value.push(el);
  }
};

const datalogger = () => {
  dataref.value.forEach((el, index) => {
    console.log(`Item ${index}:`, el.textContent);
  });
};
</script>

<!-- Template -->
<template >
  <div>
    <div class="flex justify-center item-center">
      <div class="grid gap-2">
        <h1 class="font-semibold text-center" ref="header">Main Page</h1>
        <button
          @click="changecolor()"
          class="rounded-md border p-1 bg-gray-200"
        >
          Change Color
        </button>
      </div>
    </div>

    <!-- This method is used to print the array  -->
    <div
      class="flex flex-col items-center font-semibold text-blue-400 pt-5 gap-4"
    >
      <div class="border rounded-md px-5">
        <ul class="text-center">
          <li v-for="(item, index) in items" :key="index" :ref="setItemRef">
            {{ item }}
          </li>
        </ul>
      </div>
      <div>
        <button class="border rounded-md p-1" @click="logItems">
          Log All Items
        </button>
      </div>
    </div>

    <!-- Practice to put the element through the el -->
    <div
      class="flex flex-col items-center font-semibold text-blue-400 pt-5 gap-2"
    >
      <p v-for="(data, index) in datas" :key="index" :ref="setDataRef">
        {{ data }}
      </p>
      <button class="border rounded-md p-1" @click="datalogger">
        Log All Items
      </button>

      <div>
        <Post/>
      </div>

      <div>
        <CustomInput v-model="searchtext" />

        <!-- <CustomInput :searchtext="searchtext" @updateText="searchtext= $event" /> -->
        <div>
          Parent: {{ searchtext }}
        </div>
      </div>
    </div>
  </div>
</template>