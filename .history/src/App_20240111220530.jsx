
import './App.css'

function App() {
  const [tode, setTode] = useState([])
  const [input, setInput] = useState('')

  return (
    <div className='App'>
  <h1>Hello Programmers</h1>

  <input type='text' value={input} onChange={(e) => e.target.value}/>
  
  </div>
  )
}

export default App
