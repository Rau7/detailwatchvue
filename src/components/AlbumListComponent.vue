<template>
  <div class="album-list">
    <div class="w-full grid grid-cols-3 gap-16 px-8">
      <AlbumCardComponent
        v-for="album in albums"
        :key="album.id"
        :album="album"
      />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useAlbumStore } from "@/stores/albumStore";
import AlbumCardComponent from "./AlbumCardComponent.vue";

export default {
  components: {
    AlbumCardComponent,
  },
  setup() {
    const albumStore = useAlbumStore();
    onMounted(() => {
      albumStore.initializeAlbums();
    });

    const albums = computed(() => albumStore.getAlbumsForCurrentUser());

    return { albums };
  },
};
</script>
