<template>
  <div class="h-screen">
    <section>
      <form @submit.prevent="setPost">
        <div>
          <label for="userId">UserID:</label>
          <input type="text" id="userId" v-model="postData.userId" />
        </div>
        <div>
          <label for="title">Title: </label>
          <input type="text" id="title" v-model="postData.title" />
        </div>
        <div>
          <label for="body">Body: </label>
          <textarea
            id="body"
            rows="6"
            cols="22"
            v-model="postData.body"
          ></textarea>
        </div>
        <button>Create Post</button>
      </form>
    </section>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const postData = reactive({
  userId: "",
  title: "",
  body: "",
});

const setPost = () => {
    
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: postData.userId,
      title: postData.title,
      body: postData.body,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Post created:", data);
    })
    .catch((err) => {
      console.error("Error creating post:", err);
    });
};
</script>
<style>
html,body{margin:0;padding:0}
section{height:100vh;display:grid;justify-items:center;padding-top:40px}
div{margin:24px auto}
label{font-weight:bolder;display:block;margin-bottom:4px}
</style>