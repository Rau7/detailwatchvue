<template>
  <div class="p-4">
    <h2 class="text-2xl font-semibold mb-12 pl-8">All Users</h2>
    <UserListComponent :users="users" />
  </div>
</template>

<script>
import UserListComponent from "../components/UserListComponent.vue";
import { useUserStore } from "@/stores/userStore";
import { mapState } from "pinia";

export default {
  name: "UserView",
  components: {
    UserListComponent,
  },
  computed: {
    ...mapState(useUserStore, ["users"]),
  },
  mounted() {
    const userStore = useUserStore();
    userStore.initializeUsers();
  },
};
</script>
