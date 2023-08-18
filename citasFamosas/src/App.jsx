import { useState } from 'react'
import './App.css'
import Quote from './Quote'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section>
        <Quote></Quote>
      </section>
    </>
  )
}

export default App
