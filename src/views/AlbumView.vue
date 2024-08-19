<template>
  <div class="albums-view">
    <AlbumListComponent />
  </div>
</template>

<script>
import AlbumListComponent from "@/components/AlbumListComponent.vue";

export default {
  name: "AlbumView",
  components: {
    AlbumListComponent,
  },
};
</script>

<style scoped></style>
