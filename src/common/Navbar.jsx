import React, { useContext, useEffect, useState } from 'react'
import { CgGym } from "react-icons/cg";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../authentication/firebase';
import { Storedata } from '../usecontextdata/UseDataProvider';


const Navbar = () => {
    const [log,setLog] = useState(false)
    const  {mycart} = useContext(Storedata)

    const [menuOpen, setMenuOpen] = useState(false);
    useEffect(() => {
        auth.onAuthStateChanged((user)=> {
            if(user){
                console.log("logged in")
                setLog(true)
            }
            else{
                setLog(false)
                console.log("logged out")
            }
        })
    },[])

    function logout (){
        signOut(auth)
    }

    return (
        <>
            <div className='flex items-center justify-between px-6 md:px-2 py-6 sticky top-0 bg-black relative z-10'>
                <Link to="/home">
                <div className="logo flex items-center gap-2" >
                    <CgGym className='lg:text-6xl text-5xl' />
                    <p className='lg:text-4xl text-2xl font-bold'>Fitness Studio</p>
                </div></Link>

                <div className="hidden md:flex font-medium lg:gap-10 gap-4">
                    <Link to = "/fitness"><p className='lg:text-2xl hover:text-gray-500 transition-all duration-300 ease-in-out '>Fitness</p></Link>
                    <Link to="/store"><p className='lg:text-2xl hover:text-gray-500 transition-all duration-300 ease-in-out'>Store</p></Link>
                    <Link to="/contact"><p className='lg:text-2xl hover:text-gray-500 transition-all duration-300 ease-in-out'>Contact</p></Link>
                </div>

                <div className='hidden md:flex font-bold gap-4'>
                    <p className='border py-2 px-3 rounded-lg hover:bg-white hover:text-black c'>Get App</p>
                    {log ? <p className='border py-2 px-3 rounded-lg hover:bg-white hover:text-black transition-all duration-300 ease-in-out cursor-pointer' onClick={logout}>Logout</p> : <Link to="/login"><p className='border py-2 px-3 rounded-lg hover:bg-white hover:text-black transition-all duration-300 ease-in-out cursor-pointer'>Login</p></Link> }
                    <Link to="/mycart" className=''><p className='border py-2 px-3 rounded-lg hover:bg-white hover:text-black transition-all duration-300 ease-in-out'>My Cart</p><p className='absolute right-3 top-5 text-black text-2xl bg-yellow-200 px-2 rounded-full' data-aos="zoom-in">{mycart.length}</p></Link>
                    
                </div>

                <div
                    className='md:hidden cursor-pointer'
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? (
                        <IoClose className='text-3xl' />
                    ) : (
                        <CiMenuBurger className='text-3xl' />
                    )}
                </div>
            </div>

            {/* hidden navbar */}
            <div
                className={`md:hidden shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
                    menuOpen
                        ? 'max-h-90 opacity-100 py-4'
                        : 'max-h-0 opacity-0'
                }`}
            >
                <div className='flex flex-col items-center gap-5 font-medium text-lg'>
                    <Link to="/fitness"><p >Fitness</p></Link>
                    <Link to="/store"><p>Store</p></Link>
                    <Link to="/contact"><p>Contact</p></Link>
                    <p className='border px-4 py-2 rounded-lg hover:bg-white hover:text-black transition-all duration-300 ease-in-out'>Get App</p>
                   {log ? <p className='border py-2 px-3 rounded-lg hover:bg-white hover:text-black transition-all duration-300 ease-in-out cursor-pointer' onClick={logout}>Logout</p> : <Link to="/login"><p className='border py-2 px-3 rounded-lg hover:bg-white hover:text-black transition-all duration-300 ease-in-out cursor-pointer'>Login</p></Link> }
                    <Link to="/mycart"><p className='border py-2 px-3 rounded-lg hover:bg-white hover:text-black transition-all duration-300 ease-in-out'>My Cart</p></Link>
                </div>
            </div>
        </>
    )
}

export default Navbar;