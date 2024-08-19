<template>
  <div class="p-8">
    <h1 class="text-2xl font-normal mb-4">Album Name</h1>
    <div class="flex flex-wrap gap-6">
      <img
        src="https://picsum.photos/150"
        alt="albumpic-1"
        class="w-80 h-auto object-cover"
      />
      <img
        src="https://picsum.photos/150"
        alt="albumpic-2"
        class="w-80 h-auto object-cover"
      />
      <img
        src="https://picsum.photos/150"
        alt="albumpic-3"
        class="w-80 h-auto object-cover"
      />
      <img
        src="https://picsum.photos/150"
        alt="albumpic-4"
        class="w-80 h-auto object-cover"
      />
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
