import React, { useState } from "react";
import classnames from "classnames";

const TodoTextInput = (props) => {
  const [text, setText] = useState(props.text || "");

  const handleSubmit = (e) => {
    const val = e.target.value.trim();
    if (e.which === 13) {
      props.onSave(val);
      if (props.newTodo) {
        setText("");
      }
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleBlur = (e) => {
    if (!props.newTodo) {
      props.onSave(e.target.value);
    }
  };

  return (
    <input
      className={classnames({
        edit: props.editing,
        "new-todo": props.newTodo,
      })}
      type="text"
      placeholder={props.placeholder}
      // autoFocus="true"
      value={text}
      onBlur={handleBlur}
      onChange={handleChange}
      onKeyDown={handleSubmit}
    />
  );
};

export default TodoTextInput;
