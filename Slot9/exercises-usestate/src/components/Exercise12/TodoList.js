import React, { useState } from 'react';
import '../../assets/style/TodoList.css';

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Học lập trình .NET' },
    { id: 2, text: 'Học lập trình Java' },
  ]); // Initial todos to match the image
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input }]);
      setInput('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todolist-container">
      <div className="todolist-layout">
        <div className="todolist-input-section">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="todolist-input"
            placeholder="Please input a task"
          />
          <button className="todolist-add-button" onClick={addTodo}>
            Add Todo
          </button>
        </div>
        <div className="todolist-list">
          <h3 className="todolist-title">Todo List</h3>
          {todos.length === 0 ? (
            <p className="todolist-empty">No tasks available</p>
          ) : (
            <ul className="todolist-items">
              {todos.map((todo) => (
                <li key={todo.id} className="todolist-item">
                  {todo.text}
                  <button
                    className="todolist-delete-button"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default TodoList;