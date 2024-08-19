<template>
  <div class="post-view">
    <PostListComponent />
  </div>
</template>

<script>
import PostListComponent from "../components/PostListComponent.vue";

export default {
  components: {
    PostListComponent,
  },
};
</script>

<style scoped>
.post-view {
  padding: 2rem;
}
</style>
