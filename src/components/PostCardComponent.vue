<template>
  <div class="post-card" @click="showDetails">
    <h3>{{ post.title }}</h3>
    <p>{{ post.body.substring(0, 50) }}...</p>
    <div class="post-card-footer">
      <p>See More</p>
      <IconSquareRoundedArrowRight />
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

<style scoped>
.post-card {
  border-bottom: 1px solid #ccc;
  padding: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.post-card h3 {
  font-size: 1.8rem;
  font-weight: 500;
}

.post-card p {
  font-size: 1.4rem;
  font-weight: 400;
}

.post-card-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
}

.post-card-footer svg {
  width: 2rem;
  height: 2rem;
  color: #4f359b;
}

.post-card:hover {
  background-color: #eee;
}
</style>
