<script setup>
import { ref } from "vue";
import SinglePost from "./SinglePost.vue";

// Array of posts
let post_data = ref([
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
  { id: 3, title: "Post 3" },
]);

// Update post title by id
const updatePost = (postId) => {
  post_data.value = post_data.value.map((post) => {
    if (post.id === postId) {
      return {
        ...post,
        title: "Post is updated",
      };
    }
    return post;
  });
};
</script>

<template>
  <div>
    <h1>Post Details</h1>

    <SinglePost
      v-for="post in post_data"
      :key="post.id"
      :poster="post"
      @edit-post="updatePost"
    />
  </div>
</template>
