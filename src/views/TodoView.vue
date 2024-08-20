<template>
  <div class="todo-view p-4 pl-8">
    <ul class="list-none p-0">
      <li v-for="todo in userTodos" :key="todo.id" class="my-8">
        <label class="flex items-center cursor-pointer text-lg font-normal">
          <input
            type="checkbox"
            v-model="todo.completed"
            @change="toggleCompletion(todo.id)"
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
//import { useUserStore } from "@/stores/userStore";

export default {
  name: "TodoView",
  computed: {
    userTodos() {
      const todoStore = useTodoStore();
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      if (currentUser.id === null) return [];
      return todoStore.getUserTodos(currentUser.id);
    },
  },
  methods: {
    toggleCompletion(todoId) {
      const todoStore = useTodoStore();
      todoStore.toggleTodoCompletion(todoId);
    },
  },
  mounted() {
    const todoStore = useTodoStore();
    todoStore.initializeTodos();
  },
};
</script>
