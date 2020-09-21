//type declaration file(by adding .d in the name of the file)- no longer need to export
type Todo = {
  text: string;
  complete: boolean;
};

type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (newTodo: string) => void;
