<template>
  <div id="appMain">
    <SidebarComponent />
    <div class="content">
      <HeaderComponent />
      <router-view />
    </div>
  </div>
</template>

<script>
import SidebarComponent from "./components/SidebarComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";

export default {
  name: "App",
  components: {
    SidebarComponent,
    HeaderComponent,
  },
};
</script>

<style>
#appMain {
  display: flex;
  width: 100vw;
}
.content {
  width: calc(100% - 330px);
}
</style>
