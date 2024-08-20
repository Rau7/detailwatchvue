import { defineStore } from "pinia";

export const useTodoStore = defineStore("todoStore", {
  state: () => ({
    todos: JSON.parse(localStorage.getItem("todos")) || [],
  }),
  actions: {
    setTodos(todos) {
      this.todos = todos;
      localStorage.setItem("todos", JSON.stringify(todos));
    },
    initializeTodos() {
      if (this.todos.length === 0) {
        const initialTodos = [
          {
            id: 1,
            userid: 1,
            title: "Todo 1",
            completed: false,
          },
          {
            id: 2,
            userid: 1,
            title: "Todo 2",
            completed: true,
          },
          {
            id: 3,
            userid: 1,
            title: "Todo 3",
            completed: false,
          },
          {
            id: 4,
            userid: 2,
            title: "Todo 4",
            completed: true,
          },
          {
            id: 5,
            userid: 2,
            title: "Todo 5",
            completed: false,
          },
          {
            id: 6,
            userid: 3,
            title: "Todo 6",
            completed: true,
          },
          {
            id: 7,
            userid: 3,
            title: "Todo 7",
            completed: false,
          },
          {
            id: 8,
            userid: 3,
            title: "Todo 8",
            completed: true,
          },
        ];
        this.setTodos(initialTodos);
      }
    },
    getUserTodos(userid) {
      return this.todos.filter((todo) => todo.userid === userid);
    },
    toggleTodoCompletion(todoId) {
      const todo = this.todos.find((t) => t.id === todoId);
      console.log(this.todos);
      if (todo) {
        todo.completed = !todo.completed;
        localStorage.setItem("todos", JSON.stringify(this.todos));
      }
    },
  },
});
