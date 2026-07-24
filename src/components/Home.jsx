import React from 'react'
import Logo from './Logo'
import Passes from './Passes'
import Banner from './Banner'
import Passdet from './Passdet'


const Home = () => {
  return (
    <>
      <div className='my-10'>
        <Logo />
        <Passes />
        <Banner />
        <Passdet />
      </div>
    </>
  )
}

export default Home