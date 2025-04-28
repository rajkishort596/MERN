import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./TodoApp.css";
const TodoList = () => {
  const [Todos, setTodos] = useState([
    { id: uuidv4(), task: "Code", completed: false },
  ]);
  const [task, setTask] = useState("");
  const AddTask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), task: task, completed: false }];
    });
    setTask("");
  };
  const AddTaskValue = (e) => {
    setTask(e.target.value);
  };
  const deleteTodo = (id) => {
    const newTodos = Todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  const toggleTodo = (id) => {
    const updatedTodos = Todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  const clearAllTodos = () => {
    setTodos([]);
  };
  const markAllDone = () => {
    const updatedTodos = Todos.map((todo) => {
      return { ...todo, completed: true};
    });
    setTodos(updatedTodos);
  };
  return (
    <div className="todo-app">
      <h1>Todo List App</h1>

      <div className="input-group">
        <input
          type="text"
          placeholder="Enter your task here..."
          value={task}
          onChange={AddTaskValue}
        />
        <button onClick={AddTask}>Add</button>
      </div>
      <ul className="todo-list">
        {Todos.map((todo) => (
          <li
            className={`todo-item ${todo.completed ? "completed" : ""}`}
            key={todo.id}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <p>{todo.task}</p>
            <div className="todo-actions">
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>

      <div className="actions">
        <button onClick={markAllDone}>Mark All as Done</button>
        <button onClick={clearAllTodos}>Clear All Todos</button>
      </div>
    </div>
  );
};

export default TodoList;
