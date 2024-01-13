import { useState } from "react";

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
    <div className="m-5 p-3 ">
      <h1 className="text-3xl font-bold  text-center">
        Hello Programmers, Lets make a todo list
      </h1>
      <div className="flex justify-center items-center my-3">
        <div>
          <form>
            <input
              type="text"
              value={input}
              className="border border-gray-800 mr-3  px-2 rounded-md"
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <button className="" onClick={addTodo}>Add Todo</button>
          </form>
          <ul className="mt-2">
            {todo.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
