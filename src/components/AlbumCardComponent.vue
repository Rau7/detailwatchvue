<template>
  <RouterLink :to="`/albums/${album.id}`" class="album-card">
    <div class="album-images">
      <img src="https://picsum.photos/150" alt="albumpic-1" />
      <img src="https://picsum.photos/150" alt="albumpic-2" />
      <img src="https://picsum.photos/150" alt="albumpic-3" />
      <img src="https://picsum.photos/150" alt="albumpic-4" />
    </div>
    <h3>{{ album.title }}</h3>
  </RouterLink>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  name: "AlbumCard",
  components: {
    RouterLink,
  },
  props: {
    album: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.album-card {
  border: 1px solid #d8d9dd;
  border-radius: 1.2rem;
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
  transition: all 0.3s ease;
  text-decoration: none;
}

.album-images {
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 0px;
  column-gap: 0px;
  align-content: center;
  justify-items: center;
  padding: 2rem 2rem;
  padding-bottom: 1rem;
}

.album-images img {
  width: 100%;
}

.album-card h3 {
  font-size: 1.4rem;
  font-weight: 400;
  padding-left: 2rem;
  text-decoration: none;
  color: rgba(38, 48, 62, 1);
}

.album-card:hover {
  box-shadow: 0 0 2rem 1rem rgba(85, 85, 85, 0.2);
  cursor: pointer;
}
</style>
