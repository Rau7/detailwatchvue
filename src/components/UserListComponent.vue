<template>
  <div class="user-list">
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

<style scoped>
.user-list {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6rem;
  row-gap: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
}
</style>
