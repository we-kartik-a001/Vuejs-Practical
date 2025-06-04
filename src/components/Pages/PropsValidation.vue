<script setup>
import Index from "./Index.vue";

// const props = defineProps({
//   title: {
//     type: String,
//     default: 'Default props value'
//   },
//   id:{
//     type: [Number, String],
//     default:"default value 23"
//   },
// //   name:[Number, String]
// });

// const props = defineProps({
//   place: {
//     type: String,
//     default: "Delhi",
//   },
//   proper_linker: {
//     type: Object,
//     default(rowProps) {
//       return {
//         title: "Proper",
//         id: 1,
//         name: "Proper",
//       };
//     },
//   },
// });

const props = defineProps({
  name: {
    type: String,
    default: "No value",
  },
  age: Number,
  isProp: Boolean,
  hobbies: Array,
  profile: Object,
  status: {
    type: String,
    validator(val) {
      return ["success", "warning", "error"].includes(val);
    },
  },
  proper_linker: Object,
  updateLinker:Function
});

</script>


<template>
  <!-- Point to be noted:-
    1. Like if we declare the component globally then they can access the props from the app vue js 
 -->
  <div class="flex items-center justify-center">
    <div
      class="border border-2 shadow-lg text-center rounded-lg p-2 bg-blue-600 text-white border-black my-2 w-2/5"
    >
      <p>Props validation</p>
      <!-- Array -->
      <ul class="list-disc ml-6 text-left">
        <li v-for="(hobby, index) in props.hobbies" :key="index">
          {{ hobby }}
        </li>
      </ul>
      <p>{{ props?.name }}</p>
      <p>{{ props?.age }}</p>
      <p>{{ props.hobbies }}</p>
      <p>{{ props.profile?.bio }}</p>
      <p
        :class="
          props.status === 'success'
            ? 'font-bold text-green-800'
            : 'font-bold text-red-800'
        "
      >
        {{ props.status === "success" ? "Success Detected" : "Not Success" }}
      </p>
      <p>{{ props.proper_linker.title }}</p>
      <p>{{ props.proper_linker.name }}</p>
      <p>{{ props.proper_linker.id }}</p>

      <button @click="props.updateLinker" class="border border-2 rounded-lg bg-gray-600 hover:bg-gray-800 p-2 border-gray-800">click to update</button>
      <!-- <p>{{ props?.place }}</p> -->
    </div>
  </div>
</template>