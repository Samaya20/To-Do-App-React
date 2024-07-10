import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "Taskları yaz", completed: true },
    { text: "10 səhifə Kitab oxu", completed: false },
    { text: "Breaking Bad 2 sezon 8 bölüm başla", completed: false },
    { text: "Yemək bişir", completed: false },
    { text: "Çörək al", completed: false },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text, completed: false }];
    setTodos(newTodos);
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];

    newTodos[index].completed = !newTodos[index].completed;

    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];

    newTodos.splice(index, 1);

    setTodos(newTodos);
  };

  return (
    <div className="todo-container">
      <h1>To-do List</h1>
      <TodoForm addTodo={addTodo} />

      <div className="item-container">
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            index={index}
            todo={todo}
            toggleComplete={toggleComplete}
            removeTodo={removeTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
