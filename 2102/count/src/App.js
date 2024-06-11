import './App.css'
import Viewer from './viewer.jsx'
import Controller from './Controller.jsx'
import { useState } from 'react'

function App() {
  const [count, setCount] =  useState(0)

  const handleSetCount = ( value ) => {
    setCount(count + value)
  }

  return (
    <div className='App'>
      <section>

        <Viewer count={count}/>
      </section>
      
      <section>
        <Controller handleSetCount={handleSetCount} />
      </section>
        
    </div>
  )
}

export default App
