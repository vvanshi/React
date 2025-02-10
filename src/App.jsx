import { useState } from 'react'
import './index.css'
function App() {
  const [username,setUsername] = useState('');
  return(
    <div>
      <form>
        <input value={username} className='bg-white px-4 py-3 m-5 text-xl rounded' type="text" placeholder="Enter your Name"/>
        <button className='m-5 px-4 py-3 font-semibold text-xl text-white bg-emerald-400 rounded'>Submit</button>
      </form>
    </div>
  )
}

export default App
