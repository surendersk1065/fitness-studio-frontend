import React from 'react'
import banner2 from '../assets/banner2.webp'
import banner3 from '../assets/banner3.png'

const Fitbanner = () => {
  return (
    <div >
        <img src={banner2} alt="" data-aos="zoom-in"/>
        <img src={banner3} alt=""  className=' mt-5' data-aos="zoom-in"/>
    </div>
  )
}

export default Fitbanner