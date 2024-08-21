import { defineStore } from "pinia";
/* 
photoStore,

the state will be array of photos from local storage if not empty

the actions will be setPhotos, initializePhotos, getPhotosByAlbumId and getPhotoById

setPhotos: when new photo set added, set them both photos state and local storage

initializePhotos: on photos/ page or endpoint initialize the photos
if photos are empty, set photos with an example data.

getPhotoById: get photos for a specific given id

getPhotosByAlbumId: get photos of a single album with given id
*/

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
