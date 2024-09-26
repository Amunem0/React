import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-slate-600 text-black-300 p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card username="Jessica" buttontxt="Visit My Profile"/>
      <Card username="Jessa"/>
    </>
  )
}

export default App
