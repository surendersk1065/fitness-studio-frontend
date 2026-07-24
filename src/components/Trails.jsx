import React from 'react'
import t1 from '../assets/t1.webp'
import t2 from '../assets/t2.webp'
import t3 from '../assets/t3.webp'

const Trails = () => {
    const images = [t1,t2,t3]
  return (
    <div className='text-center my-10 px-3'>
        <p className='mb-10 text-4xl font-medium'>Free Trails</p>
        <div className='flex justify-center'>
            {images.map((items,ind) => {
                return (
                    <div key={ind}>
                        <img src={items} alt="" />
                        <p className='p-2 bg-white text-black mr-2 font-bold cursor-pointer'>Free trial</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Trails