import React from "react";
import { TodoListItem } from "./TodoListItem";

const todos: Array<Todo> = [
  { text: "buy coffee", complete: true },
  { text: "eat pizza", complete: false },
];

function App() {
  return <TodoListItem todo={todos[0]} />;
}

export default App;
