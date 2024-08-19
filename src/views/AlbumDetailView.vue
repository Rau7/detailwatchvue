<template>
  <div class="album-detail">
    <h1>Album Name</h1>
    <div class="album-images">
      <img src="https://picsum.photos/150" alt="albumpic-1" />
      <img src="https://picsum.photos/150" alt="albumpic-2" />
      <img src="https://picsum.photos/150" alt="albumpic-3" />
      <img src="https://picsum.photos/150" alt="albumpic-4" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  computed: {
    albumId() {
      return this.$route.params.id;
    },
  },
  mounted() {
    // Örneğin: this.fetchAlbumDetails(this.albumId);
  },
};
</script>

<style scoped>
.album-detail {
  padding-left: 2rem;
}

.album-detail h1 {
  font-size: 1.8rem;
  font-weight: 400;
}

.album-images {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.album-images img {
  flex-grow: 1;
  height: auto;
  width: 20rem; /* Resimlerin doğal genişliklerini korur */
  max-width: 20rem;
  object-fit: cover; /* Resmin oranını korur ve taşmasını engeller */ /* max-width kullanarak büyük ekranlarda da aynı düzeni korur */
}
</style>
