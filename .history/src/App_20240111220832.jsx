
import { useState } from 'react'
import './App.css'

function App() {
  const [todo, setTodo] = useState(["Learn React", "Learn Firebase", "Learn Nodejs"])
  const [input, setInput] = useState('')

  return (
    <div className='App'>
  <h1>Hello Programmers</h1>

  <input type='text' value={input} onChange={setInput((e) => e.target.value)}/>
  <button onClick={() => setTodo([...tode, input])}>Add</button>

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
