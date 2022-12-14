import React from "react";
import classnames from "classnames";
import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE,
} from "../../constants/TodoFilters";

const FILTER_TITLES = {
  [SHOW_ALL]: "All",
  [SHOW_ACTIVE]: "Active",
  [SHOW_COMPLETED]: "Completed",
};

const Footer = (props) => {
  const renderTodoCount = () => {
    const { activeCount } = props;
    const itemWord = activeCount === 1 ? "item" : "items";

    return (
      <span className="todo-count">
        <strong>{activeCount || "No"}</strong> {itemWord} left
      </span>
    );
  };

  const renderFilterLink = (filter) => {
    const title = FILTER_TITLES[filter];
    const { filter: selectedFilter, onShow } = props;

    return (
      <a
        className={classnames({ selected: filter === selectedFilter })}
        style={{ cursor: "pointer" }}
        onClick={() => onShow(filter)}
      >
        {title}
      </a>
    );
  };

  const renderClearButton = () => {
    const { completedCount, onClearCompleted } = props;
    if (completedCount > 0) {
      return (
        <button className="clear-completed" onClick={onClearCompleted}>
          Clear completed
        </button>
      );
    }
  };

  return (
    <footer className="footer">
      {renderTodoCount()}
      <ul className="filters">
        {[SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED].map((filter) => (
          <li key={filter}>{renderFilterLink(filter)}</li>
        ))}
      </ul>
      {renderClearButton()}
    </footer>
  );
};

export default Footer;
