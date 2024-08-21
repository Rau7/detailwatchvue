<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4"
  >
    <UserCardComponent v-for="user in users" :key="user.id" :user="user" />
  </div>
</template>

<script>
import UserCardComponent from "./UserCardComponent.vue";

export default {
  name: "UserListComponent",
  components: {
    UserCardComponent,
  },
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
};
</script>
