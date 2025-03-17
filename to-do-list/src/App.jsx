import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

let task = []

let handle_task = (task) =>{
 

  
}


  return (
    <>
   <div className='container w-full h-full flex justify-center flex-col'>
    <div>
          <Navbar/>
    </div>
      <div className='main bg-sky-400 mx-auto w-1/2 h-40 mt-10 flex justify-center '>
        <div className="input p-4">
          <input 
          type="text" 
          className='bg-white w-150 h-12 rounded-2xl'
          placeholder='  please write your task'
        
          />
          <button>sumbit</button>
        </div>
      </div>
   </div>
    </>
  )
}

export default App
