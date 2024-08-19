<template>
  <aside>
    <div class="aside-header">
      <div class="user-sec">
        <img src="https://picsum.photos/200" alt="user-pic" />
        <div class="user-info">
          <h3>User Name</h3>
          <p>user@email.com</p>
        </div>
      </div>
      <ul>
        <li :class="{ active: isExactActive('/') }">
          <RouterLink class="side-nav-link" to="/"
            ><IconCheckupList />Todos</RouterLink
          >
        </li>
        <li :class="{ active: isExactActive('/posts') }">
          <RouterLink class="side-nav-link" to="/posts"
            ><IconNotebook />Posts</RouterLink
          >
        </li>
        <li :class="{ active: isAlbumActive('/albums') }">
          <RouterLink class="side-nav-link" to="/albums"
            ><IconPhotoHeart />Albums</RouterLink
          >
        </li>
        <li :class="{ active: isExactActive('/users') }">
          <RouterLink class="side-nav-link" to="/users"
            ><IconUsers />Users</RouterLink
          >
        </li>
      </ul>
    </div>
    <div class="aside-footer">
      <div class="aside-firm-logo">
        <img src="../assets/FirmLogo.png" alt="user-pic" />
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

    return {
      isExactActive,
      isAlbumActive,
    };
  },
};
</script>

<style scoped>
aside {
  width: 260px;
  height: 100vh;
  background-color: #f5f5f5;
  overflow-y: auto; /* İçerik taşarsa kaydırma ekler */
  overflow-x: hidden;
  border-right: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.user-sec {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
  margin: 4rem 2rem;
  padding-bottom: 2rem;
}
.user-sec img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 10px;
}
.user-info h3 {
  font-size: 1.8rem;
  font-weight: 500;
  margin: 0;
}
.user-info p {
  font-size: 1.4rem;
  font-weight: 300;
  text-decoration: underline;
  margin: 0;
}

aside ul {
  list-style-type: none;
  padding: 0;
  margin-top: 5rem;
}
aside ul li {
  margin-bottom: 2.5rem;
  transition: all 0.3s ease-in;
}
aside ul li a {
  display: flex;
  gap: 1rem;
  align-items: center;
  font-size: 1.8rem;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.45);
  font-weight: 400;
  padding-left: 4rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

aside ul li a svg {
  width: 2.4rem;
  height: 2.4rem;
  color: #4f359b;
}

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

.aside-firm-logo {
  display: flex;
  justify-content: start;
  border-top: 1px solid #ddd;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-bottom: 5rem;
  padding-top: 2rem;
}

aside ul li:hover {
  position: relative;
  background-color: white;
}

aside ul li:hover a {
  color: #4f359b;
}

aside ul li:hover::before {
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
