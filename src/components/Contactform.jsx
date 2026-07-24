import React, { useState } from 'react'
import axios from 'axios'

const Contactform = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState('')
    function submit() {
    axios.post(
        "https://fitness-studio-backend-5hbi.onrender.com/sendmail",
        {
            name: name,
            email: email
        }
    )
    .then((response) => {
        console.log(response.data);
        alert("Thanks for submission");
    })
    .catch((error) => {
        console.log("ERROR:", error);

        if (error.response) {
            console.log("Server response:", error.response.data);
            alert(error.response.data.message);
        } else {
            alert("Something went wrong");
        }
    });
}
  return (
    <div className='my-10 text-center '>
        <p className='font-bold text-4xl mb-10'>Contact Form</p>
        <div className="form flex flex-col gap-5 justify-center items-center">
            <input type="text"  placeholder='Name' className='placeholder-white font-medium p-1 border-b md:w-[30%] w-[80%]' value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email"  placeholder='Email' className='placeholder-white font-medium p-1 border-b md:w-[30%] w-[80%]' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text"  placeholder='Mobile Number' className='placeholder-white font-medium p-1 border-b md:w-[30%] w-[80%]' />
            <textarea name="" id="" className='border md:w-[30%] w-[80%] h-48 placeholder-white font-light p-1' placeholder='Comments Your Feedback here' maxLength={500}></textarea>
            <button className='bg-white p-3 text-black font-bold rounded-lg hover:bg-black hover:text-white cursor-pointer transition-all duration-300 ease-in-out' onClick={submit}>Submit</button>
        </div>
    </div>
  )
}

export default Contactform