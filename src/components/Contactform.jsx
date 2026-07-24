import React, { useState } from 'react';
import axios from 'axios';

const Contactform = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert("Please fill in both Name and Email.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        "https://fitness-studio-backend-5hbi.onrender.com/sendmail",
        { name, email }
      );
      alert("Thanks for submission!");
      setName("");
      setEmail("");
    } catch (error) {
      console.error("ERROR:", error);
      const msg = error.response?.data?.message || "Something went wrong while sending mail.";
      alert(`Error: ${msg}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='my-10 text-center'>
      <p className='font-bold text-4xl mb-10'>Contact Form</p>
      <form onSubmit={submit} className="form flex flex-col gap-5 justify-center items-center">
        <input 
          type="text" 
          placeholder='Name' 
          className='placeholder-white font-medium p-1 border-b md:w-[30%] w-[80%]' 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <input 
          type="email" 
          placeholder='Email' 
          className='placeholder-white font-medium p-1 border-b md:w-[30%] w-[80%]' 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="text" 
          placeholder='Mobile Number' 
          className='placeholder-white font-medium p-1 border-b md:w-[30%] w-[80%]' 
        />
        <textarea 
          className='border md:w-[30%] w-[80%] h-48 placeholder-white font-light p-1' 
          placeholder='Comments Your Feedback here' 
          maxLength={500}
        />
        <button 
          type="submit" 
          disabled={loading}
          className='bg-white p-3 text-black font-bold rounded-lg hover:bg-black hover:text-white cursor-pointer transition-all duration-300 ease-in-out disabled:opacity-50'
        >
          {loading ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Contactform;