import React, { useState } from 'react'
import { CgGym } from "react-icons/cg";
import { auth } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
    const [email,setEmail] = useState()
    const [pass,setPass] = useState()
    const [cpass,setCpass] = useState()
    const [err,setErr] = useState("")
    const navigate = useNavigate()
    function register (e){
        e.preventDefault()
        if (pass !== cpass) {
            setErr('Passwords does not match');
            return;
        }
        createUserWithEmailAndPassword(auth,email,pass).then((res) => {
            console.log("user added")
            alert("Registered successfully")
            navigate("/login")
        })
        .catch(() => console.log("failed to add"))
    }
  return (
    <div className='my-10'>
      <div className='w-[80%] md:w-[60%] m-auto'>
        <div className='flex flex-col items-center'>
          <CgGym className='text-5xl' />
          <p className='font-bold'>Fitness Studio.com</p>
        </div>
        {/* login form */}
        <div className="login__form text-center my-8 flex flex-col items-center gap-10">
          <input type="text" name="" id="" className='border-b p-1 placeholder-white w-[80%] md:w-[60%]' placeholder='Email ID' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" name="" id="" className='border-b p-1 placeholder-white w-[80%] md:w-[60%]' placeholder='Password' value={pass} onChange={(e) => setPass(e.target.value)}/>
          <input type="password" name="" id="" className='border-b p-1 placeholder-white w-[80%] md:w-[60%]' placeholder='Confirm Password' value={cpass} onChange={(e) => setCpass(e.target.value)}/>
          {err && <p className="text-red-500 text-sm mt-2">{err}</p>}
          <button className='border w-[60%] p-2 rounded-lg hover:bg-white hover:text-black cursor-pointer transition-all duration-300 ease-in-out font-bold' onClick={register}>Register</button>
          <p className='text-xs'>* By Continuing you agree to the Terms of Services and Privacy policy.</p>
        </div>
      </div>



    </div>
  )
}

export default Signup