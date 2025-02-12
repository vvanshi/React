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

// import Footer from './components/Footer'
// import Header from './components/Navbar'
// import React from 'react'

// const App = () => {
//   return (
//    <>
//    <Header />
//    <Footer></Footer>
//    </>
//   )
// }

// export default App


import React from 'react'
import Card from './components/Card'


const App = () => {
const users= [
  {
    "name": "Vanshika Sharma",
    "age": 20,
    "city": "Pinjore",
    "profession": "Project Manager",
    "profile_photo": "https://example.com/photos/sanya.jpg"
  },
  {
    "name": "Harsh Mehta",
    "age": 21,
    "city": "Chandigarh",
    "profession": "Software Engineer",
    "profile_photo": "https://example.com/photos/aarav.jpg"
  },
  {
    "name": "Meera Kapoor",
    "age": 25,
    "city": "Delhi",
    "profession": "Graphic Designer",
    "profile_photo": "https://example.com/photos/meera.jpg"
  },
  {
    "name": "Rohan Verma",
    "age": 32,
    "city": "Bangalore",
    "profession": "Data Scientist",
    "profile_photo": "https://example.com/photos/rohan.jpg"
  },
  {
    "name": "Sanya Iyer",
    "age": 27,
    "city": "Pune",
    "profession": "Marketing Manager",
    "profile_photo": "https://example.com/photos/sanya.jpg"
  }
]

  return (
    <div>
      <div className='p-10'>
     {users.map(function(elem,idx){
      return <Card key={idx} username={elem.name} age={elem.age} city={elem.city} profession={elem.profession} image={elem.profile_photo} />
     })}
     </div>
    </div>
  )
}

export default App

