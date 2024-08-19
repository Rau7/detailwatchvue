<template>
  <div class="todo-view p-4 pl-8">
    <ul class="list-none p-0">
      <li v-for="todo in todos" :key="todo.id" class="my-8">
        <label class="flex items-center cursor-pointer text-lg font-normal">
          <input
            type="checkbox"
            v-model="todo.completed"
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
export default {
  name: "TodoView",
  data() {
    return {
      todos: [
        { id: 1, title: "Learn Vue.js", completed: true },
        { id: 2, title: "Build a project", completed: false },
        { id: 3, title: "Refactor the code", completed: false },
      ],
    };
  },
};
</script>
