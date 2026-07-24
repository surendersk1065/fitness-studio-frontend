import React, { useEffect, useState } from 'react'
import sb1 from '../assets/sb1.webp'
import sb2 from '../assets/sb2.webp'
import sb3 from '../assets/sb3.webp'

const Fimageslider = () => {

    const images = [sb1,sb2,sb3]
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * images.length);
            setCurrent(randomIndex);
        }, 5000);

        return () => clearInterval(interval);
    }, [])

  return (
    <div>
        <img src={images[current]} alt="" className=''/>
    </div>
  )
}

export default Fimageslider