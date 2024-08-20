import { defineStore } from "pinia";

export const usePhotoStore = defineStore("photoStore", {
  state: () => ({
    photos: JSON.parse(localStorage.getItem("photos")) || [],
  }),
  actions: {
    setPhotos(photos) {
      this.photos = photos;
      localStorage.setItem("photos", JSON.stringify(photos));
    },
    initializePhotos() {
      if (!this.photos.length) {
        const defaultPhotos = [
          {
            id: 1,
            albumId: 1,
            url: "https://picsum.photos/150",
            title: "Photo 1",
          },
          {
            id: 2,
            albumId: 1,
            url: "https://picsum.photos/150",
            title: "Photo 2",
          },
          {
            id: 3,
            albumId: 2,
            url: "https://picsum.photos/150",
            title: "Photo 3",
          },
        ];
        this.setPhotos(defaultPhotos);
      }
    },
    getPhotosByAlbumId(albumId) {
      return this.photos.filter((photo) => photo.albumId === albumId);
    },
    getPhotoById(photoId) {
      return this.photos.find((photo) => photo.id === photoId);
    },
  },
});
