import React from 'react'

const Card = (props) => {
  return (
    <div className=' mr-7 bg-white text-black font-bold inline-block p-8 text-center rounded '>
      <img className='ml-8 h-32 w-32 rounded-full mb-3' src={props.image} alt=""  />
      <h1 className='text-2xl font-semibold mb-4'>{props.username}</h1>
      <h2>City: {props.city}, Age: {props.age}</h2>
      <h4 className='text-blue-400'>{props.profession}</h4>
      <button className=' mt-5 bg-emerald-600 text-white px-4 py-3 rounded font-medium'>Add Friend</button>
    </div>
  )
}

export default Card
