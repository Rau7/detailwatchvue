import { defineStore } from "pinia";

/* 
postStore,

the state will be array of posts from local storage if not empty

the actions will be setPosts, initializePosts, getPostsForCurrentUser and getPostById

setPosts: when new post set added, set them both posts state and local storage

initializePosts: on posts/ page or endpoint initialize the posts
if posts are empty, set posts with an example data.

getPostById: get posts for a specific given id

getPostsForCurrentUser: get currentUser from localstorage and get posts for current user

*/
export const usePostStore = defineStore("postStore", {
  state: () => ({
    posts: JSON.parse(localStorage.getItem("posts")) || [],
  }),
  actions: {
    setPosts(posts) {
      this.posts = posts;
      localStorage.setItem("posts", JSON.stringify(posts));
    },
    initializePosts() {
      //const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      if (!this.posts.length) {
        const defaultPosts = [
          { id: 1, userId: 1, title: "Post 1", body: "Post 1 body" },
          { id: 2, userId: 1, title: "Post 2", body: "Post 2 body" },
          { id: 3, userId: 2, title: "Post 3", body: "Post 3 body" },
        ];
        this.setPosts(defaultPosts);
      }
    },
    getPostsForCurrentUser() {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      return this.posts.filter((post) => post.userId === currentUser.id);
    },
    getPostById(postId) {
      return this.posts.find((post) => post.id === postId);
    },
  },
});
