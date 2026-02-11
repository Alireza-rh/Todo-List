import React, { useState } from "react";

const Form = ({ onAddNewItem, setFilter }) => {
  const [item, setItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!item) return
    const newItem = { id: crypto.randomUUID(), item: item, complete: false };
    onAddNewItem(newItem);
    setItem("");
  };
  return (
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a new task..."
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <div className="filters">
        <button className="filter-btn" onClick={() => setFilter("all")}>
          All
        </button>
        <button className="filter-btn" onClick={() => setFilter("active")}>
          Active
        </button>
        <button className="filter-btn" onClick={() => setFilter("complete")}>
          Completed
        </button>
      </div>
    </div>
  );
};

export default Form;
