import React from 'react'
import contact from '../assets/contact.png'
import Contactform from './Contactform'
import Reviews from './Reviews'

const Contact = () => {
  return (
    <div>
        {/* <div className=''>
            <img src={contact} alt="" className='h-100' style={{width:"100%"}}/>
        </div> */}
        <Contactform />
        <Reviews />
    </div>
  )
}

export default Contact