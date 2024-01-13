import { useState ,useEffect} from "react";
import db from './firebase';
function App() {
  const [todo, setTodo] = useState([  ]);
  const [input, setInput] = useState("");
  

   useEffect(()=>{
    db.collection("todos").onSnapshot((snapshot)=>{
      setTodo(snapshot.docs.map((doc)=>doc.data().todo))
    })


  },[])

  const addTodo = (e) => {
    e.preventDefault();
    db.collection('todos').add({
      todo:input,
      times
    })
   
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
            <button className="px-3 bg-gray-900 rounded-md text-white font-medium" onClick={addTodo}>Add Todo</button>
          </form>
          <ul className="my-5">
            {todo.map((item, index) => {
              return <li className="border border-gray-500 pl-2 py-2 mb-2 hover:bg-gray-200 text-sm rounded-md" key={index}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
