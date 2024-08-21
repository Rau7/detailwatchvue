import { createRouter, createWebHistory } from "vue-router";
import AlbumView from "../views/AlbumView.vue";
import AlbumDetail from "../views/AlbumDetailView.vue";
import TodoView from "@/views/TodoView.vue";
import UserView from "@/views/UserView.vue";
import PostView from "@/views/PostView.vue";

/* used for the routes that are needed */
const routes = [
  {
    path: "/",
    name: "home",
    component: TodoView,
  },
  {
    path: "/users",
    name: "users",
    component: UserView,
  },
  {
    path: "/albums",
    name: "albums",
    component: AlbumView,
  },
  {
    path: "/albums/:id",
    name: "album-detail",
    component: AlbumDetail,
    props: true,
  },
  {
    path: "/posts",
    name: "Posts",
    component: PostView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
