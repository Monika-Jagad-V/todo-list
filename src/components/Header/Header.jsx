import React from "react";
import TodoTextInput from "../ToDoAddForm/index";

const Header = (props) => {
  const handleSave = (text) => {
    if (text.length !== 0) {
      props.addTodo(text);
    }
  };
  return (
    <header className="header">
      <h1 className="title">todos</h1>
      <TodoTextInput
        newTodo
        onSave={handleSave}
        placeholder="What needs to be done?"
      />
    </header>
  );
};

export default Header;
