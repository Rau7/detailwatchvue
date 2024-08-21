<template>
  <div class="post-list">
    <div class="posts-container">
      <PostCard
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @show-details="openModal"
      />
    </div>

    <PostDetailModal
      v-if="selectedPost"
      :post="selectedPost"
      :postId="selectedPost.id"
      @close="closeModal"
    />
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { usePostStore } from "@/stores/postStore";
import PostCard from "./PostCardComponent.vue";
import PostDetailModal from "@/modals/PostDetailModal.vue";

export default {
  components: {
    PostCard,
    PostDetailModal,
  },
  setup() {
    /* initialize the userPosts */
    const postStore = usePostStore();
    postStore.initializePosts();

    /* get posts of current user */
    const posts = computed(() => postStore.getPostsForCurrentUser());
    const selectedPost = ref(null);

    const openModal = (post) => {
      selectedPost.value = post;
    };

    const closeModal = () => {
      selectedPost.value = null;
    };

    return { posts, selectedPost, openModal, closeModal };
  },
};
</script>
