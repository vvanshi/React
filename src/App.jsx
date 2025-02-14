/////////---------FORM AND FUNCTIONS IN FORM------------------------//////


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
//       <form onSubmit={(e )=>{
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


///------------------COMPONENTS & PROPS---------------------------------////////


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


///////////---------JSON DATA RENDERING------------------///////////////////


// import React from 'react'
// import Card from './components/Card'


// const App = () => {
// const users= [
//   {
//     "name": "Vanshika Sharma",
//     "age": 20,
//     "city": "Pinjore",
//     "profession": "Project Manager",
//     "profile_photo": "https://example.com/photos/sanya.jpg"
//   },
//   {
//     "name": "Harsh Mehta",
//     "age": 21,
//     "city": "Chandigarh",
//     "profession": "Software Engineer",
//     "profile_photo": "https://example.com/photos/aarav.jpg"
//   },
//   {
//     "name": "Meera Kapoor",
//     "age": 25,
//     "city": "Delhi",
//     "profession": "Graphic Designer",
//     "profile_photo": "https://example.com/photos/meera.jpg"
//   },
//   {
//     "name": "Rohan Verma",
//     "age": 32,
//     "city": "Bangalore",
//     "profession": "Data Scientist",
//     "profile_photo": "https://example.com/photos/rohan.jpg"
//   },
//   {
//     "name": "Sanya Iyer",
//     "age": 27,
//     "city": "Pune",
//     "profession": "Marketing Manager",
//     "profile_photo": "https://example.com/photos/sanya.jpg"
//   }
// ]

//   return (
//     <div>
//       <div className='p-10'>
//      {users.map(function(elem,idx){
//       return <Card key={idx} username={elem.name} age={elem.age} city={elem.city} profession={elem.profession} image={elem.profile_photo} />
//      })}
//      </div>
//     </div>
//   )
// }

// export default App


///////////-----------API-(AXIOS)-----------------------///////////////////////

// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// const App = () => {

// const [data,setData]=useState([]);

// const getData= async()=>{
//   const response=await axios.get('https://picsum.photos/v2/list')
//   setData(response.data)
//   // console.log(data);

// }

// useEffect(()=>{
//   getData()
// },[])


//   return (
//     <div className='p-10'>
//       {/* <button onClick={getData} className='bg-purple-700 text-white font-bold text-2xl px-6 py-3 rounded active:scale-90'>Get data</button> */}
//       <div className='p-5 mt-5 bg-amber-400 text-2xl font-semibold text-black rounded'>Hello
//       {data.map(function(elem,idx){
//         return <div key={idx} className='bg-gray-100 text-white items-center flex justify-between w-full px-7 py-6 rounded mb-3'>
//           <img className='h-40' src={elem.download_url} alt="" />
//           <h1 className='text-black'>{elem.author}</h1>
//         </div>
//       })}
//       </div>
//       </div>
//   )
// }

// export default App

///////-------------------------------ROUTER---------------------/////////////////////////

// import React from 'react'
// import {Route, Routes}  from 'react-router-dom'
// import About from './pages/About';
// import Product from './pages/Product';
// import Home from './pages/Home';
// import Contact from './pages/Contact';
// import Header from './components/Header';

// const App = () => {
//   return (
//     <div>
//       <Header />
//       <Routes>
//         <Route  path='/about' element={<About />}/>
//         <Route  path='/contact' element={<Contact />}/>
//         <Route  path='/product' element={<Product />}/>
//         <Route  path='/' element={<Home />}/>
//       </Routes>
//     </div>
//   )
// }

// export default App

//------------------------CONTEXT API-------------------------///////////////
import React, { useContext } from 'react'
import { dataContext } from './context/UserContext';
import Header from './components/Header'
import Section from './components/Section'
import Footer from './components/Footer'

const App = () => {

  const  data=useContext(dataContext);
  console.log(data);

  return (
    <div>
      <h1>This is app.{data}</h1>
      <Header />
      <Section />
      <Footer />
    </div>
  )
}

export default App

