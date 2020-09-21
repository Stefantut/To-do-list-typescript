import React from "react";
import { TodoListItem } from "./TodoListItem";

type Todo = {
  text: string;
  complete: boolean;
};

const todos: Array<Todo> = [
  { text: "buy coffee", complete: true },
  { text: "eat pizza", complete: false },
];

function App() {
  return <TodoListItem />;
}

export default App;
