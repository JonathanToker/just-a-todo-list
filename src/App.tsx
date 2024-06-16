import { ChangeEvent, useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const addTodo = () => {
    if (inputValue.length < 1) {
      setErrorMessage("You need a minimum of 1 character to submit");
      return;
    }
    setTodos((prev) => [...prev, inputValue]);
    setInputValue("");
    const inputEl = document.getElementById("input-value");
    inputEl?.focus();
  };
  const deleteTodo = (index: number) => {
    const duplicatedTodos = [...todos];
    duplicatedTodos.splice(index, 1);
    setTodos(duplicatedTodos);
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (errorMessage) {
      setErrorMessage("");
    }
  };
  return (
    <>
      <div className="container">
        <h1>Todo List</h1>
        <div>
          <input
            className="input-field"
            id="input-value"
            value={inputValue}
            onChange={(e) => handleInputChange(e)}
            type="text"
            placeholder="Add your task"
          />
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <div>
            <button onClick={addTodo} className="submit-button">
              Submit
            </button>
          </div>
        </div>
        <ul className="todos-list">
          {todos.length > 0
            ? todos.map((todo, index) => (
                <li key={index} className="list-item">
                  <span className="list-item-span">{todo}</span>
                  <button
                    onClick={() => deleteTodo(index)}
                    className="list-item-button"
                  >
                    Delete
                  </button>
                </li>
              ))
            : ""}
        </ul>
      </div>
    </>
  );
}

export default App;
