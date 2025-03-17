import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div className='container w-full h-full flex justify-center flex-col'>
    <div>
          <Navbar/>
    </div>
      <div className='main bg-stone-400 mx-auto w-1/2 h-40 mt-10'>
        <div className="input">
          <input 
          type="text" 
          />
        </div>
      </div>
   </div>
    </>
  )
}

export default App
