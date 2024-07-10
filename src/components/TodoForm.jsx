import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add a new task"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
