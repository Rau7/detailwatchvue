import { defineStore } from "pinia";

/* 
commentStore,

the state will be array of comments from local storage if not empty

the actions will be setComments, initializeComments, getCommentsByPostId

setComments: when new comment set added, set them both comments state and local storage

initializeComments: on comments/ page or endpoint initialize the comments
if comments are empty, set comments with an example data.

getCommentsByPostId: get comments of a single post with given id
*/
export const useCommentStore = defineStore("commentStore", {
  state: () => ({
    comments: JSON.parse(localStorage.getItem("comments")) || [],
  }),
  actions: {
    setComments(comments) {
      this.comments = comments;
      localStorage.setItem("comments", JSON.stringify(comments));
    },
    initializeComments() {
      if (!this.comments.length) {
        const defaultComments = [
          {
            id: 1,
            postId: 1,
            name: "John Doe",
            email: "john.doe@example.com",
            body: "This is a sample comment.",
          },
          {
            id: 2,
            postId: 1,
            name: "Jane Smith",
            email: "jane.smith@example.com",
            body: "This is another sample comment.",
          },
          {
            id: 3,
            postId: 2,
            name: "Alice Johnson",
            email: "alice.johnson@example.com",
            body: "This is yet another sample comment.",
          },
          {
            id: 4,
            postId: 2,
            name: "Bob Williams",
            email: "bob.williams@example.com",
            body: "This is yet another sample comment.",
          },
        ];
        this.setComments(defaultComments);
      }
    },
    getCommentsForPost(postId) {
      return this.comments.filter((comment) => comment.postId === postId);
    },
  },
});
