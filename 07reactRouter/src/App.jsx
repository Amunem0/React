import { useState } from 'react'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-white bg-gray-500 p-4'>React Router</h1>
    </>
  )
}

export default App
