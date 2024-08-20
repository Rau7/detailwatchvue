<template>
  <div
    class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center"
    @click.self="close"
  >
    <div class="relative bg-white p-8 rounded-lg w-full max-w-4xl h-[600px]">
      <h3 class="text-3xl font-medium mb-4">{{ post.title }}</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
        <div class="overflow-auto post-body">
          <p class="text-lg font-normal">{{ post.body }}</p>
        </div>
        <CommentList :comments="comments" />
      </div>
      <div class="absolute top-4 right-4 cursor-pointer">
        <IconSquareRoundedX @click="close" class="w-6 h-6 text-gray-800" />
      </div>
    </div>
  </div>
</template>

<script>
import { IconSquareRoundedX } from "@tabler/icons-vue";
import CommentList from "@/components/CommentListComponent.vue";
import { usePostStore } from "../stores/postStore";
import { useCommentStore } from "../stores/commentStore";

export default {
  props: {
    postId: {
      type: Number,
      required: true,
    },
  },
  components: {
    IconSquareRoundedX,
    CommentList,
  },
  computed: {
    post() {
      const postStore = usePostStore();
      return postStore.getPostById(this.postId);
    },
    comments() {
      const commentStore = useCommentStore();
      return commentStore.getCommentsByPostId(this.postId);
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
  mounted() {
    const postStore = usePostStore();
    postStore.initializePosts();

    const commentStore = useCommentStore();
    commentStore.initializeComments();
  },
};
</script>

<style scoped>
.post-body {
  overflow-y: auto;
  max-height: 100%;
  margin-bottom: 20px;
}
</style>
