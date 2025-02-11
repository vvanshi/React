// import { useState } from 'react'
// import './index.css'
// function App() {
//   const [username,setUsername] = useState('');

//  const submitHandler=(e)=>{
//   e.preventDefault();
//   console.log(username);
//   setUsername('');
//  }

//   return(
//     <div>
//       <form onSubmit={(e)=>{
//         submitHandler(e)
//       }}>
//         <input
//         value={username}
//         onChange={(e)=>{
//           setUsername(e.target.value)
//         }} 
//         className='bg-white px-4 py-3 m-5 text-xl rounded'
//          type="text" placeholder="Enter your Name"/>
//         <button className='m-5 px-4 py-3 font-semibold text-xl text-white bg-emerald-400 rounded'>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App;

import Footer from './components/Footer'
import Header from './components/Navbar'
import React from 'react'

const App = () => {
  return (
   <>
   <Header />
   <Footer></Footer>
   </>
  )
}

export default App
