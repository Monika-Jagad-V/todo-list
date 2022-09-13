import React, { useState } from "react";
import classnames from "classnames";
import TodoTextInput from "../ToDoAddForm/index";

const TodoItem = (props) => {
  const [editing, setEditing] = useState(false);

  const handleDoubleClick = () => {
    setEditing(true);
  };

  const handleSave = (id, text) => {
    if (text.length === 0) {
      props.deleteTodo(id);
    } else {
      props.editTodo(id, text);
    }
    setEditing(false);
  };
  const { todo, completeTodo, deleteTodo } = props;

  let element;
  if (editing) {
    element = (
      <TodoTextInput
        text={todo.text}
        editing={editing}
        onSave={(text) => handleSave(todo.id, text)}
      />
    );
  } else {
    element = (
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={() => completeTodo(todo.id)}
        />
        <label onDoubleClick={handleDoubleClick}>{todo.text}</label>
        <button className="destroy" onClick={() => deleteTodo(todo.id)} />
      </div>
    );
  }

  return (
    <li
      className={classnames({
        completed: todo.completed,
        editing: editing,
      })}
    >
      {element}
    </li>
  );
};
export default TodoItem;
