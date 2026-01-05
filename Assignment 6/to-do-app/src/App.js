import { useState } from "react";
import "./Todo.css";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    const updatedTodos = [...todos, task.trim()].sort((a, b) =>
      a.localeCompare(b)
    );

    setTodos(updatedTodos);
    setTask("");
  };

  const deleteTask = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-container">
      <h2>Todo List</h2>

      <div className="input-group">
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            <span>{todo}</span>
            <button onClick={() => deleteTask(index)}>✕</button>
          </li>
        ))}
      </ul>

      {todos.length === 0 && (
        <p className="empty">No tasks added yet</p>
      )}
    </div>
  );
}

export default App;
