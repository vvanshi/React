import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="py-7 px-10 bg-rose-800 text-white flex items-center justify-between">
        <h2 className='text-3xl font-bold'>Vanshika</h2>
      <div className='flex gap-10 text-lg underline'>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/product'}>Product</Link>
        <Link to={'/contact'}>Contact</Link>
      </div>
    </div>
  )
}

export default Header
