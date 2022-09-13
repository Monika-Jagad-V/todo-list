import React, { useState } from "react";
import TodoItem from "../TodoItem/index";
import Footer from "../Footer/index";
import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE,
} from "../../constants/TodoFilters";

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: (todo) => !todo.completed,
  [SHOW_COMPLETED]: (todo) => todo.completed,
};

const MainSection = (props) => {
  const [filter, setFilter] = useState(SHOW_ALL);

  const handleClearCompleted = () => {
    props.actions.clearCompleted();
  };

  const handleShow = (filter) => {
    setFilter(filter);
  };

  const renderToggleAll = (completedCount) => {
    const { todos, actions } = props;
    if (todos.length > 0) {
      return (
        <input
          className="toggle-all"
          type="checkbox"
          checked={completedCount === todos.length}
          onChange={actions.completeAll}
        />
      );
    }
  };

  const renderFooter = (completedCount) => {
    const { todos } = props;
    const activeCount = todos.length - completedCount;

    if (todos.length) {
      return (
        <Footer
          completedCount={completedCount}
          activeCount={activeCount}
          filter={filter}
          onClearCompleted={handleClearCompleted}
          onShow={handleShow}
        />
      );
    }
  };
  const { todos, actions } = props;

  const filteredTodos = todos.filter(TODO_FILTERS[filter]);
  const completedCount = todos.reduce(
    (count, todo) => (todo.completed ? count + 1 : count),
    0
  );

  return (
    <section className="main">
      {renderToggleAll(completedCount)}
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} {...actions} />
        ))}
      </ul>
      {renderFooter(completedCount)}
    </section>
  );
};
export default MainSection;
