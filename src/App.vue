<template>
  <div id="appMain" class="flex w-full">
    <SidebarComponent />
    <div class="content flex-1 overflow-y-auto">
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
