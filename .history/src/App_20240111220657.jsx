
import './App.css'

function App() {
  const [todo, setTodo] = useState([])
  const [input, setInput] = useState('')

  return (
    <div className='App'>
  <h1>Hello Programmers</h1>

  <input type='text' value={input} onChange={setInput((e) => e.target.value)}/>
  <button onClick={() => setTodo([...tode, input])}>Add</button>

  {
    todo.map((item)=>{
      return
    })
  }
  
  </div>
  )
}

export default App
