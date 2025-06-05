<template>
  <div class=" border-2 m-3 rounded-md">
    <input
      type="text"
      :value="modelValue"
      @input="emit('update:modelValue ', $event.target.value)"
    />
  </div>
</template>

<script setup>
const emit = defineEmits(["updateText"]);
const props = defineProps({
  //    searchtext:{
  //     type : String,
  //     required : true
  //    }
  modelValue: {
    type: String,
    required: true,
  },
});
</script>                         