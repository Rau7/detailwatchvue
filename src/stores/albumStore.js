import { defineStore } from "pinia";

export const useAlbumStore = defineStore("albumStore", {
  state: () => ({
    albums: JSON.parse(localStorage.getItem("albums")) || [],
  }),
  actions: {
    setAlbums(albums) {
      this.albums = albums;
      localStorage.setItem("albums", JSON.stringify(albums));
    },
    initializeAlbums() {
      if (!this.albums.length) {
        // Example default albums
        const defaultAlbums = [
          { id: 1, userId: 1, title: "Album 1" },
          { id: 2, userId: 1, title: "Album 2" },
          { id: 3, userId: 2, title: "Album 3" },
          { id: 4, userId: 3, title: "Album 4" },
          { id: 5, userId: 3, title: "Album 5" },
        ];
        this.setAlbums(defaultAlbums);
      }
    },
    getAlbumsForCurrentUser() {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      return currentUser
        ? this.albums.filter((album) => album.userId === currentUser.id)
        : [];
    },
    getAlbumById(albumId) {
      return this.albums.find((album) => album.id === albumId);
    },
  },
});
