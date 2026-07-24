import React from 'react'
import elite from '../assets/elite.webp'
import pro from '../assets/pro.webp'
import h from '../assets/h.png'

const Passdet = () => {
    const pass = [
        {
            id:1,
            name:"Fitness Elite",
            img:elite,
            title:"Unlimited access to",
            desc:["At-center group classe","All ELITE & PRO gyms","At-home live workouts"]
        },
        {
            id:2,
            name:"Fitness Pro",
            img:pro,
            title:"Unlimited access to",
            desc:["All PRO gyms","2 Sessions/month at ELITE gyms & group classes","At-home live workouts"]
        },
        {
            id:3,
            name:"Fitness Home",
            img:h,
            title:"Unlimited access to",
            desc:["At home workouts","Celebrity Workouts","Goal-based Workouts and Meditation Sessions"]
        },
    ]
  return (
    <div className=' mt-12'>
        <p className='text-xl font-bold text-center'>Fitness Pass</p>
        <p className='text-blue-600 mt-3 cursor-pointer hover:font-bold text-center'>Learn More</p>

        <div className='flex justify-around  flex-wrap px-2 mt-16'>
            {pass.map((items) => {
                return <div className='mb-5' data-aos="zoom-in">
                    <p className='font-extrabold text-2xl mb-5' >{items.name}</p>
                    <img src={items.img} alt="" />
                    <p className='my-3 font-bold'>{items.title}</p>
                    <ul>
                        {
                            items.desc.map((items,ind) => {
                                return <li key={ind} className='list-disc'>{items}</li>
                            })
                        }
                    </ul>
                    <div className='flex gap-3 my-4'>
                        <p className='p-2 rounded font-light cursor-pointer' style={{backgroundColor:"#2F313C"}}>Try for free</p>
                        <p className='bg-white text-black p-2 rounded font-bold cursor-pointer'>Learn More</p>
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Passdet