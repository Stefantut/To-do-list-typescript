import React from "react";

interface TodoListItemProps {
  todo: {
    text: String;
    complete: boolean;
  };
}
// passed todolistiremprops as generic
export const TodoListItem: React.FunctionComponent<TodoListItemProps> = ({
  todo,
}) => {
  return (
    <li>
      <label>
        <input type="checkbox" checked={todo.complete} />
      </label>
    </li>
  );
};
