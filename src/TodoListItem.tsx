import React from "react";

interface TodoListItemProps {
  todo: Todo;
}
// passed todolistiremprops as generic
export const TodoListItem: React.FunctionComponent<TodoListItemProps> = ({
  todo,
}) => {
  return (
    <li>
      <label>
        <input type="checkbox" checked={todo.complete} />
        {todo.text}
      </label>
    </li>
  );
};
