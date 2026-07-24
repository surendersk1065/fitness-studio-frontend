import React, { useEffect, useState } from 'react'
import b1 from '../assets/b1.webp'
import b2 from '../assets/b2.webp'
import b3 from '../assets/b3.webp'
import b4 from '../assets/b4.webp'

const Imageslider = () => {
    const images = [b1, b2, b3, b4]
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * images.length);
            setCurrent(randomIndex);
        }, 5000);

        return () => clearInterval(interval);
    }, [])

    return (
        <div className=''>
            <div className='text-center text-3xl font-medium'>
                <p>At-center</p>
                <p>Trainer-led group classes</p>
            </div>

            <div className="slider flex justify-center items-center mt-8" >
                <img
                    src={images[current]}
                    alt=""
                    className="w-[80%] md:w-[40%] lg:w-[30%] rounded-lg"
                    
                />
            </div>
        </div>
    )
}

export default Imageslider