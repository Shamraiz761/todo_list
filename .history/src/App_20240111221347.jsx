
import { useState } from 'react'
import './App.css'

function App() {
  const [todo, setTodo] = useState(["Learn React", "Learn Firebase", "Learn Nodejs"])
  const [input, setInput] = useState('')
  const addTodo = (e) =>{
    e.preventDefault();
    setTodo([...todo, input])

  }

  return (
    <div className='App'>
  <h1>Hello Programmers</h1>

  <input type='text' value={input} onChange={e =>{setInput(e.target.value)}}/>
  <button onClick={() => setTodo([...todo, input])}>Add</button>

<ul>
  {
    todo.map((item)=>{
      return(
      <li>{item}</li>
      )
    })
  }
  </ul>
  </div>
  )
}

export default App
