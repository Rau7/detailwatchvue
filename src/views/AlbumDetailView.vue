<template>
  <div class="p-8">
    <h1 class="text-2xl font-normal mb-4">{{ album.title }}</h1>
    <div class="flex flex-wrap gap-6">
      <img
        v-for="photo in photos"
        :key="photo.id"
        :src="photo.url"
        :alt="photo.title"
        class="w-80 h-auto object-cover"
      />
    </div>
  </div>
</template>

<script>
import { usePhotoStore } from "@/stores/photoStore";
import { useAlbumStore } from "@/stores/albumStore";
import { computed, onMounted } from "vue";

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const photoStore = usePhotoStore();
    const albumStore = useAlbumStore();
    const albumId = parseInt(props.id);
    /* these also can be placed in computed action instead of setup */
    const album = computed(() => albumStore.getAlbumById(albumId));
    const photos = computed(() => photoStore.getPhotosByAlbumId(albumId));

    /* this can be placed in mounted */
    onMounted(() => {
      photoStore.initializePhotos();
    });

    return { photos, album };
  },
};
</script>
