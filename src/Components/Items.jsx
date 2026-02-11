import React from "react";

const Items = ({ items, onComplete, onDelete }) => {
  return (
    <div>
      <ul className="todo-list">
        {items.map((item) => (
          <li
            key={item.id}
            className={`todo-item ${item.complete ? "completed" : ""}`}
          >
            <span className="todo-text"> {item.item}</span>
            <div className="todo-actions">
              <button className="complete" onClick={() => onComplete(item.id)}>
                ✔
              </button>
              <button className="delete" onClick={() => onDelete(item.id)}>
                ✖
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Items;
