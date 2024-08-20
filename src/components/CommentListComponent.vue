<template>
  <div class="border-l border-gray-300 pl-6 overflow-y-auto comments">
    <h2 class="text-2xl font-semibold mb-8">Comments</h2>
    <div class="flex flex-col space-y-6">
      <div
        v-for="comment in comments"
        :key="comment.id"
        class="flex gap-4 mb-6 comment-item"
      >
        <div class="w-12 h-12">
          <img
            src="https://picsum.photos/150"
            alt="user-pic"
            class="w-12 h-12 rounded-full max-w-none"
          />
        </div>
        <div>
          <h2 class="text-lg font-medium">{{ comment.name }}</h2>
          <p class="text-lg font-normal">
            {{ comment.body }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comments: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.comments {
  overflow-y: auto;
  max-height: 100%;
  margin-bottom: 20px;
}
</style>
