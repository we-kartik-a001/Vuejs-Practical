<script setup>
import { computed } from 'vue';

{/* <template-ref v-bind="prop_data" />  */}
const props = defineProps({
  title: String, 
  id:Number
});

// making the object as props
// const props = defineProps({
//   prop_data : Object,
// });

// props.prop_data.title =  "hi web dever";// this will aso change the parent props value

// const name = computed(()=> props.title.trim().toLowerCase());
// console.log(name.value);

// access key of the props object
// const trimtitle = computed(()=> props.prop_data.title.trim().toUpperCase());

</script>

<template>
  <div class="text-center flex justify-center py-4">
   <div class="border border-2 rounded-lg w-2/5">
     <p class="font-semibold text-blue-600" >Template Ref</p>
    <p>Single Post Component</p>

    <!-- if we are passing the props as an object in the child component -->
    <!-- <p >
      {{ props.prop_data.title }}
    </p>
    <p class="font-semibold text-red-600">Globally Declared</p>
    <p class="text-red-600">{{ props.prop_data?.name }}</p>
    <p class="text-red-600">{{ props.prop_data?.id }}</p> -->


    <!-- {{ trimtitle }} -->

    <p>{{id }}</p>
   </div>
  </div>
</template>