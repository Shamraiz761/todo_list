
import './App.css'

function App() {
  const [todo, settodo] = useState([])
  const [input, setInput] = useState('')

  return (
    <div className='App'>
  <h1>Hello Programmers</h1>

  <input type='text' value={input} onChange={setInput((e) => e.target.value)}/>
  <button onClick={() => settodo([...tode, input])}>Add</button>
  
  </div>
  )
}

export default App
