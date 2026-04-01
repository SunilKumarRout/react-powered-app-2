// Task 5: Lists & Keys 

import { useState } from "react";

const initialTodos = [
  { id: 1, task: "Learn React components" },
  { id: 2, task: "Understand JSX syntax" },
  { id: 3, task: "Master useState hook" },
];

let nextId = 4; // counter for unique IDs

function TodoList() {
  const [todos, setTodos] = useState(initialTodos);
  const [useIndex, setUseIndex] = useState(false); // toggle between id vs index as key

  const addToBeginning = () => {
    const newTodo = { id: nextId++, task: `New Task #${nextId - 1}` };
    setTodos([newTodo, ...todos]); //  this is where index-as-key breaks!
  };

  return (
    <div className="todo-wrapper">
      <div className="todo-controls">
        <button className="todo-btn add" onClick={addToBeginning}>
          ➕ Add to Beginning
        </button>
        <label className="key-toggle">
          <input
            type="checkbox"
            checked={useIndex}
            onChange={() => setUseIndex(!useIndex)}
          />
          <span>Use <code>index</code> as key (⚠️ bad practice)</span>
        </label>
      </div>

      <p className="key-note">
        {useIndex
          ? "⚠️ Using index as key — React may lose track of items when list order changes."
          : "✅ Using unique id as key — React correctly tracks each item."}
      </p>

      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li
            key={useIndex ? index : todo.id}   // swap 
            className="todo-item"
          >
            <span className="todo-id">#{todo.id}</span>
            <span>{todo.task}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
