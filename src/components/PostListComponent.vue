<template>
  <div class="post-list">
    <div class="posts-container">
      <PostCard
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @show-details="openModal(post)"
      />
    </div>

    <PostDetailModal
      v-if="selectedPost"
      :post="selectedPost"
      @close="closeModal"
    />
  </div>
</template>

<script>
import PostCard from "./PostCardComponent.vue";
import PostDetailModal from "@/modals/PostDetailModal.vue";

export default {
  components: {
    PostCard,
    PostDetailModal,
  },
  data() {
    return {
      posts: [], // Replace with your actual data fetching
      selectedPost: null,
    };
  },
  methods: {
    openModal(post) {
      this.selectedPost = post;
    },
    closeModal() {
      this.selectedPost = null;
    },
  },
  mounted() {
    // Fetch your posts here
    this.posts = [
      { id: 1, title: "Post 1", body: "This is the body of post 1" },
      { id: 2, title: "Post 2", body: "This is the body of post 2" },
      { id: 3, title: "Post 3", body: "This is the body of post 3" },
    ];
  },
};
</script>

<style scoped>
.posts-container {
}
</style>
