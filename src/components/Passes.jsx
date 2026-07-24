import React from 'react'

const Passes = () => {
    const pass = [
        {
            id:1,
            name:'Fitness Elite',
            desc:"Unlimited access to group classes,all gyms,and at home workouts"
        },
        {
            id:2,   
            name:'Fitness Pro',
            desc:"Unlimited access to all pro gyms and at home workouts"
        },
        {
            id:3,
            name:'Fitness Home',
            desc:"Unlimited access to at home workouts with calorie tracking"
        }

    ]
  return (
        <div className='flex mt-24 justify-around flex-wrap gap-'>
            {pass.map((items) => {
                return <div key={items.id} className='p-8 text-center rounded-2xl mb-12 cursor-pointer hover:opacity-90 transition-all duration-300 ease-in-out' style={{backgroundColor:"#2F313C",width:"400px"}}>
                    <p className='text-base lg:text-3xl font-bold mb-6'>{items.name}</p>
                    <p className=''>{items.desc}</p>
                </div>
            } )}
        </div>
  )
}

export default Passes