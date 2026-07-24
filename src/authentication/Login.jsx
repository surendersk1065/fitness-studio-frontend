import React, { useState } from 'react'
import { CgGym } from "react-icons/cg";
import { FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {

  const [email, setEmail] = useState()
  const [pass, setPass] = useState()
  const navigate = useNavigate()
  const [err, setErr] = useState()

  function login(e) {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, pass).then(() => navigate("/home"))
      .catch(() => setErr("Invalid Email/password"))
  }

  const provider = new GoogleAuthProvider();

  function gLogin(e) {
    e.preventDefault();

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Success:", result.user);
        navigate("/home");
      })
      .catch((error) => {
        console.log("Code:", error.code);
        console.log("Message:", error.message);
      });
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
          <input type="password" name="" id="" className='border-b p-1 placeholder-white w-[80%] md:w-[60%]' placeholder='Password' value={pass} onChange={(e) => setPass(e.target.value)} />
          <p className="text-red-500 text-sm mt-2">{err}</p>
          <button className='border w-[60%] p-2 rounded-lg hover:bg-white hover:text-black cursor-pointer transition-all duration-300 ease-in-out font-bold' onClick={login}>Continue</button>
          <p className='flex items-center gap-2  p-2 text-base cursor-pointer ' onClick={gLogin}>or connect with <span><FaGoogle /></span></p>
          <span >New User? <Link className='font-light' to="/register">Register Here</Link></span>
          <p className='text-xs'>* By Continuing you agree to the Terms of Services and Privacy policy.</p>
        </div>
      </div>



    </div>
  )
}

export default Login