<template>
  <div class="user-view">
    <h2>All Users</h2>
    <UserListComponent :users="users" />
  </div>
</template>

<script>
import UserListComponent from "../components/UserListComponent.vue";

export default {
  name: "UserView",
  components: {
    UserListComponent,
  },
  data() {
    return {
      users: [
        {
          id: 1,
          name: "John Doe",
          email: "john.doe@example.com",
          phone: "555-1234",
          website: "http://johnswebsite.com",
          company: {
            name: "John's Company",
          },
        },
        {
          id: 2,
          name: "Jane Doe",
          email: "jane.doe@example.com",
          phone: "555-5678",
          website: "http://janeswebsite.com",
          company: {
            name: "Jane's Company",
          },
        },
        {
          id: 3,
          name: "Alice Smith",
          email: "alice.smith@example.com",
          phone: "555-9876",
          website: "http://aliceswebsite.com",
          company: {
            name: "Alice's Company",
          },
        },
        {
          id: 4,
          name: "Bob Johnson",
          email: "bob.johnson@example.com",
          phone: "555-4321",
          website: "http://bobswebsite.com",
          company: {
            name: "Bob's Company",
          },
        },
        {
          id: 5,
          name: "Charlie Brown",
          email: "charlie.brown@example.com",
          phone: "555-8765",
          website: "http://charlieswebsite.com",
          company: {
            name: "Charlie's Company",
          },
        },
        {
          id: 6,
          name: "David Lee",
          email: "david.lee@example.com",
          phone: "555-2468",
          website: "http://davidsswebsite.com",
          company: {
            name: "David's Company",
          },
        },
      ],
    };
  },
};
</script>

<style scoped>
.user-view {
  padding: 1rem;
}

.user-view h2 {
  padding-left: 2rem;
  margin-bottom: 3rem;
  font-size: 2rem;
  font-weight: 600;
}
</style>
