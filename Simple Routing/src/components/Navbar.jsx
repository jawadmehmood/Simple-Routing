import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-center'>
        <p className='text-blue-400 text-3xl'><Link to={'/'}>Home</Link></p>
        <p className='text-blue-400 text-3xl'><Link to={'about'}>About</Link></p>
        <p className='text-blue-400 text-3xl'><Link to={'services'}>Services</Link></p>
        <p className='text-blue-400 text-3xl'><Link to={'products'}>Products</Link></p>
        <p className='text-blue-400 text-3xl'><Link to={'contact'}>Contact</Link></p>
    </div>
  )
}

export default Navbar