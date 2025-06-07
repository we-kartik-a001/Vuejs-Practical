<script setup>
import { ref } from "vue";
import PropsValidation from "./components/Pages/PropsValidation.vue";
import SlotComponent from "./components/Pages/slotComponent.vue";

const prop_data = {
  title: "Kartik web dev",
  name: "Vue js",
  id: "hello",
};

const proper_linker = ref({
  title: "Kartik web dev",
  name: "Vue js",
  id: 22,
});

const updateLinker = () => {
  proper_linker.value.title = "Vue web Dever";
  proper_linker.value.name = "Uniquer";
  proper_linker.value.id = 0;
};
</script>

<template>
  <div>
    <nav class="flex item-center justify-center gap-4 font-semibold">
      <router-link class="hover:text-blue-800" to="/index">Index</router-link>
      <router-link class="hover:text-blue-800" to="/template-ref"
        >Template</router-link
      >
      <router-link :to="{name:'forms'}">Form</router-link>
      <router-link :to="{name:'Users'}">User</router-link>
      <!-- <router-link :to="{name:'UserSingle'}">User single</router-link> -->
    </nav>

    <div class=" flex flex-col gap-2 justify-center">
      <button  class="border hover:bg-amber-200  rounded-lg" @click="$router.go(-1)"> Go back 1 step</button>
       <button  class="border hover:bg-amber-200  rounded-lg" @click="$router.go(1)"> Go back 1 forward</button>
       <button  class="border hover:bg-amber-200  rounded-lg" @click="$router.push('/user/1')"> Redirect to user 1</button>
    </div>
    <!-- If we declare like this it will accessible everywhere -->
    <!-- <template-ref title="Kartik Web dev" /> -->
    <!-- <template-ref :title="prop_data.title"  /> -->
    <!-- Through this method we pass the prop as object in the component -->
    <!-- <template-ref :prop_data="prop_data" /> -->

    <template-ref v-bind="prop_data" />
    <props-validation
      name="Kartik"
      :age="21"
      :isProp="true"
      :hobbies="['peace', 'war']"
      :profile="{ bio: 'Vue Developer' }"
      :sayHello="() => alert('Hello!')"
      status="success"
      :proper_linker="proper_linker"
      :updateLinker="updateLinker"
    />

    <!-- <props-validation/> -->

    <!-- In this component we dont have send any data -->
    <!-- <prop_data  /> -->
    <!-- <SlotComponent>click here</SlotComponent>
     <SlotComponent></SlotComponent> -->

    <SlotComponent>click here</SlotComponent>

    <SlotComponent>
      <template v-slot:cardTitle>Named slot</template>
      <template v-slot:Parenttitle>From Parent</template>
      <template v-slot:title="p">{{ p.pTitle }}</template>
    </SlotComponent>

    <router-view></router-view>
    <router-view name="users"/>
  </div>
</template>


<style scoped>
.router-link-exact-active {
  color: red;
}
</style>