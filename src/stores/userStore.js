import { defineStore } from "pinia";

/* 
userStore,

the state will be array of users from local storage if not empty

the actions will be setUsers and initializeUsers

setUsers: when new user set added, set them both users state and local storage

initializeUsers: on users/ page or endpoint initialize the users
if users are empty, set users with an example data.

*/
export const useUserStore = defineStore("userStore", {
  state: () => ({
    users: JSON.parse(localStorage.getItem("users")) || [],
  }),
  actions: {
    setUsers(users) {
      this.users = users;
      localStorage.setItem("users", JSON.stringify(users));
    },
    initializeUsers() {
      if (this.users.length === 0) {
        const initialUsers = [
          {
            id: 1,
            name: "John Doe",
            username: "johndoe",
            email: "john@example.com",
            address: {
              street: "123 Main St",
              city: "Anytown",
              zipcode: "12345",
              suite: "Apt. 556",
              geo: {
                lat: "37.7749",
                lng: "-122.4194",
              },
            },
            phone: "555-1234",
            website: "https://johndoe.com",
            company: {
              name: "Acme Corp",
            },
          },
          {
            id: 2,
            name: "Jane Smith",
            username: "janesmith",
            email: "jane@example.com",
            address: {
              street: "456 Oak St",
              city: "Anytown",
              zipcode: "67890",
              suite: "Bldg. 123",
              geo: {
                lat: "37.7749",
                lng: "-122.4194",
              },
            },
            phone: "555-5678",
            website: "https://janesmith.com",
            company: {
              name: "Acme Corp1",
            },
          },
          {
            id: 3,
            name: "Alice Johnson",
            username: "alicejohnson",
            email: "alice@example.com",
            address: {
              street: "789 Elm St",
              city: "Anytown",
              zipcode: "12345",
              suite: "Apt. 123",
              geo: {
                lat: "37.7749",
                lng: "-122.4194",
              },
            },
            phone: "555-9012",
            website: "https://alicejohnson.com",
            company: {
              name: "Acme Corp2",
            },
          },
        ];
        this.setUsers(initialUsers);
      }
    },
  },
});
