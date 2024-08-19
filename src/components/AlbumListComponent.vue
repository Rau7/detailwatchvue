<template>
  <div class="album-list">
    <AlbumCardComponent
      v-for="album in albums"
      :key="album.id"
      :album="album"
    />
  </div>
</template>

<script>
import AlbumCardComponent from "./AlbumCardComponent.vue";

export default {
  name: "AlbumList",
  components: {
    AlbumCardComponent,
  },
  data() {
    return {
      albums: [
        { id: 1, title: "Album 1" },
        { id: 2, title: "Album 2" },
        { id: 3, title: "Album 3" },
        { id: 4, title: "Album 4" },
        { id: 5, title: "Album 5" },
        { id: 6, title: "Album 6" },
      ],
    };
  },
};
</script>

<style scoped>
.album-list {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
  padding-left: 2rem;
  padding-right: 2rem;
}
</style>
