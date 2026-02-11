import React, { useState } from "react";
import Form from "./Components/Form";
import Items from "./Components/Items";

const App = () => {
  const [allItems, setAllItems] = useState([
    { id: 1, item: "Sample Task 1", complete: false },
    { id: 2, item: "Sample Task 2", complete: false },
    { id: 3, item: "Sample Task 3", complete: true },
  ]);

  const [filter, setFilter] = useState("all");

  const addNewItem = (newItem) => {
    setAllItems((items) => [...items, newItem]);
  };

  const handleComplete = (id) => {
    setAllItems((items) =>
      items.map((item) =>
        item.id == id ? { ...item, complete: !item.complete } : item
      )
    );
  };

  const handleDelete = (id) => {
    setAllItems((items) => items.filter((item) => item.id !== id));
  };

  const filteredItems = allItems.filter((item) => {
    if (filter == "active") return !item.complete;
    if (filter == "complete") return item.complete;
    return true;
  });

  return (
    <div>
      <div className="todo-container">
        <h1>My Todo List</h1>

        <Form onAddNewItem={addNewItem} setFilter={setFilter} />

        <Items
          items={filteredItems}
          onComplete={handleComplete}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default App;
