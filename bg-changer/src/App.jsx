import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor] = useState('green')
  return (
      <div style={{backgroundColor: color}} className='h-screen w-full'>
        <h1 className='font-semibold'>This is a background-changer app</h1>
        <button onClick={() => setColor('red')}>red</button>
        <button onClick={() => setColor('blue')}>blue</button>
      </div>
  )
}

export default App
