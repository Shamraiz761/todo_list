import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([
    "Learn React",
    "Learn Firebase",
    "Learn Nodejs",
  ]);
  const [input, setInput] = useState("");
  const addTodo = (e) => {
    e.preventDefault();
    setTodo([...todo, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Hello Programmers</h1>
      <form>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button onClick={addTodo}>Add</button>
      </form>
      <ul>
        {todo.map((item , index) => {
          return <li key={in}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
