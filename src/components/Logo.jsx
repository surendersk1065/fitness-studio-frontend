import React from 'react'
import logo from '../assets/logo.jpg'

const Logo = () => {
  return (
    <div className='flex flex-col items-center gap-5 px-4 md:px-0 text-center'>
        <img src={logo} alt="logo" width="40%" data-aos="zoom-in"/>
        <p className='text-xl lg:text-2xl font-medium my-3'>Fitness Studio</p>
        <p className='font-light'>A Fitness Moment that is worth breaking a sweat for</p>
        <p className='bg-white text-black p-3 font-bold rounded hover:bg-black hover:text-white transition-all duration-500 ease-in-out cursor-pointer'>EXPLORE PASS</p>
    </div>
  )
}

export default Logo