<template>
  <div
    class="border-b border-gray-300 p-4 cursor-pointer transition-colors duration-300 hover:bg-gray-200"
    @click="showDetails"
  >
    <h3 class="text-xl font-medium mb-2">{{ post.title }}</h3>
    <p class="text-lg font-normal">{{ post.body.substring(0, 50) }}...</p>
    <div class="flex items-center justify-end gap-2 mt-2">
      <p class="text-gray-700">See More</p>
      <IconSquareRoundedArrowRight class="w-8 h-8 text-purple-700" />
    </div>
  </div>
</template>

<script>
import { IconSquareRoundedArrowRight } from "@tabler/icons-vue";

export default {
  props: {
    post: Object,
  },
  components: {
    IconSquareRoundedArrowRight,
  },
  methods: {
    showDetails() {
      this.$emit("show-details", this.post);
    },
  },
};
</script>
