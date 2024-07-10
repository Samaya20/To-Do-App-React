import React from "react";

const TodoItem = ({ todo, index, toggleComplete, removeTodo }) => {
  return (
    <div className="todo-item">
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "",
        }}
        onClick={() => toggleComplete(index)}
      >
        {todo.text}
      </span>
      <button onClick={() => removeTodo(index)}>Remove</button>
    </div>
  );
};

export default TodoItem;
