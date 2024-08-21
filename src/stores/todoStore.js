import { defineStore } from "pinia";

/* 
todoStore,

the state will be array of todos from local storage if not empty

the actions will be setTodos, initializeTodos, toggleTodoCompletion and getUserTodos

setTodos: when new todo set added, set them both todos state and local storage

initializeTodos: on todos/ page or endpoint initialize the todos
if todos are empty, set todos with an example data.

getUserTodos: get todos for a specific user with given id

toggleTodoCompletion: toggle todo completion and set them both for local storage and todos state

syncStorage: after seeing v-model also used in toggle. Discovered that one spesific todo-
- toggled two times. so syncStorage used for changing the data in localStorage

*/
export const useTodoStore = defineStore("todoStore", {
  state: () => ({
    todos: JSON.parse(localStorage.getItem("todos")) || [],
  }),
  actions: {
    setTodos(todos) {
      console.log(todos);
      this.todos = todos;
      localStorage.setItem("todos", JSON.stringify(todos));
    },
    initializeTodos() {
      if (!this.todos.length) {
        const defaultTodos = [
          { id: 1, userId: 1, title: "Todo 1", completed: false },
          { id: 2, userId: 1, title: "Todo 2", completed: false },
          { id: 3, userId: 2, title: "Todo 3", completed: false },
        ];
        this.setTodos(defaultTodos);
      }
    },
    syncStorage() {
      localStorage.setItem("todos", JSON.stringify(this.todos));
      /*const index = this.todos.findIndex((t) => t.id === todoId);
      if (index !== -1) {
        this.todos[index].completed = false;
        console.log("changedTodos", this.todos);
        this.setTodos(this.todos);
      }*/
    },
    getUserTodos(userId) {
      return this.todos.filter((todo) => todo.userId === userId);
    },
  },
});
