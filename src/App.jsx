import { useState } from 'react'
import './App.css'
import Sayac from './components/Sayac';
function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <Sayac/>
  </>
  )
}

export default App
