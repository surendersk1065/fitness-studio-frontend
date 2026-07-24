import React from 'react'
import banner from "../assets/banner.png"

const Banner = () => {
  return (
    <div className='mx-5 h-screen bg-center bg-cover bg-no-repeat flex justify-center items-center' style={{backgroundImage:`url(${banner})`}} data-aos="zoom-in">
        <div className='w-[60%] m-auto text-center'>
            <p className='text-2xl md:text-4xl lg:text-6xl font-extrabold '>One membership for all your fitness needs</p>
        </div>
        
    </div>
  )
}

export default Banner