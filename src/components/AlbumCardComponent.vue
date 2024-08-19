<template>
  <RouterLink
    :to="`/albums/${album.id}`"
    class="group block border border-gray-300 rounded-lg p-4 mb-4 transition-transform transform hover:scale-105 hover:shadow-lg"
  >
    <div class="grid grid-cols-2 p-2 pb-2 gap-2">
      <img
        src="https://picsum.photos/150"
        alt="albumpic-1"
        class="w-full h-auto"
      />
      <img
        src="https://picsum.photos/150"
        alt="albumpic-2"
        class="w-full h-auto"
      />
      <img
        src="https://picsum.photos/150"
        alt="albumpic-3"
        class="w-full h-auto"
      />
      <img
        src="https://picsum.photos/150"
        alt="albumpic-4"
        class="w-full h-auto"
      />
    </div>
    <h3 class="text-lg font-normal pl-4 text-gray-800">{{ album.title }}</h3>
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
