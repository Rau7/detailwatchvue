<template>
  <aside
    class="w-64 h-screen bg-gray-100 overflow-y-auto border-r border-gray-200 flex flex-col justify-between"
  >
    <div class="aside-container">
      <div class="p-4 mt-4 flex items-center space-x-4">
        <div
          class="flex items-center space-x-4 border-b border-b-gray-200 pb-4"
        >
          <img
            class="w-12 h-12 rounded-full"
            src="https://picsum.photos/200"
            alt="user-pic"
          />
          <div class="text-gray-800">
            <h3 class="text-xl font-semibold">{{ currentUser.name }}</h3>
            <p class="text-base font-light text-sm">{{ currentUser.email }}</p>
          </div>
        </div>
      </div>
      <ul class="mt-12 space-y-5">
        <li :class="{ active: isExactActive('/') }">
          <RouterLink
            class="flex items-center space-x-4 px-6 py-3 text-gray-600 hover:text-indigo-600"
            to="/"
          >
            <IconCheckupList class="w-6 h-6 text-indigo-600" />
            <span>Todos</span>
          </RouterLink>
        </li>
        <li :class="{ active: isExactActive('/posts') }">
          <RouterLink
            class="flex items-center space-x-4 px-6 py-3 text-gray-600 hover:text-indigo-600"
            to="/posts"
          >
            <IconNotebook class="w-6 h-6 text-indigo-600" />
            <span>Posts</span>
          </RouterLink>
        </li>
        <li :class="{ active: isAlbumActive('/albums') }">
          <RouterLink
            class="flex items-center space-x-4 px-6 py-3 text-gray-600 hover:text-indigo-600"
            to="/albums"
          >
            <IconPhotoHeart class="w-6 h-6 text-indigo-600" />
            <span>Albums</span>
          </RouterLink>
        </li>
        <li :class="{ active: isExactActive('/users') }">
          <RouterLink
            class="flex items-center space-x-4 px-6 py-3 text-gray-600 hover:text-indigo-600"
            to="/users"
          >
            <IconUsers class="w-6 h-6 text-indigo-600" />
            <span>Users</span>
          </RouterLink>
        </li>
      </ul>
    </div>
    <div class="flex items-center justify-start p-4">
      <div class="firm-logo-container border-t border-gray-200 w-full">
        <img
          class="w-full h-auto pt-4"
          src="../assets/FirmLogo.png"
          alt="firm-logo"
        />
      </div>
    </div>
  </aside>
</template>

<script>
import { RouterLink, useRoute } from "vue-router";
import {
  IconCheckupList,
  IconNotebook,
  IconPhotoHeart,
  IconUsers,
} from "@tabler/icons-vue";

export default {
  name: "SidebarComponent",
  components: {
    IconCheckupList,
    IconNotebook,
    IconPhotoHeart,
    IconUsers,
    RouterLink,
  },
  setup() {
    const route = useRoute();

    const isExactActive = (path) => {
      return route.path === path;
    };

    const isAlbumActive = () => {
      return route.path.startsWith("/albums");
    };

    const currentUser = JSON.parse(localStorage.getItem("currentUser")) || {
      name: "Guest",
      email: "guest@example.com",
    };

    return {
      isExactActive,
      isAlbumActive,
      currentUser,
    };
  },
};
</script>

<style>
.active {
  position: relative;
  background-color: white;
}

.active a {
  color: #4f359b;
}

.active::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 6px;
  height: 100%;
  background-color: #4f359b;
  border-radius: 0 6px 6px 0;
}
</style>
