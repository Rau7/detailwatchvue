<template>
  <div class="todo-view p-4 pl-8">
    <ul class="list-none p-0">
      <li v-for="todo in userTodos" :key="todo.id" class="my-8">
        <label class="flex items-center cursor-pointer text-lg font-normal">
          <input
            type="checkbox"
            v-model="todo.completed"
            @change="this.todoStore.syncStorage()"
            class="mr-4 h-6 w-6 cursor-pointer accent-[#4f359b]"
          />
          <span
            :class="[
              'text-lg',
              { 'line-through text-gray-500': todo.completed },
            ]"
            >{{ todo.title }}</span
          >
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
import { useTodoStore } from "@/stores/todoStore";

export default {
  name: "TodoView",
  setup() {
    const todoStore = useTodoStore();
    return { todoStore };
  },

  computed: {
    userTodos() {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      if (!currentUser || !currentUser.id) return [];
      console.log("updating the list!");
      return this.todoStore.getUserTodos(currentUser.id);
    },
  },
  methods: {},
  mounted() {
    this.todoStore.initializeTodos();
  },
};
</script>
