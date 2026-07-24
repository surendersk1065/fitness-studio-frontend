import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Reviews = () => {
    const [review, setReviews] = useState([])
    const [newName,setnewName] = useState("")
    const [newReview,setnewReview] = useState("") 
    useEffect(() => {
        axios.get("https://fitness-studio-backend-5hbi.onrender.com/reviews").then((res) => {
            console.log(res.data)
            setReviews(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    function submit() {
        const today = new Date()
        const date = today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
        if(!newReview){
            alert("Review field is required")
            return
        }
        
        axios.post("https://fitness-studio-backend-5hbi.onrender.com/reviews", { newName,newReview,date }).then((res) => {
            console.log(res.data)

            axios.get("https://fitness-studio-backend-5hbi.onrender.com/reviews").then((res) => {
                console.log(res.data)
                setReviews(res.data)
            }).catch(() => {
                console.log("Error fetching data")
            })

        });




        setnewName('');
        setnewReview('');
    }
    return (
        <div className='p-3'>
            <p className='text-center font-bold text-4xl mb-10'>Reviews and comments about Fitness studio</p>
            {/* review container */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 container mx-auto px-4' >
                {review.map((data) => {
                    return (
                        <div className='mb-8 p-6  shadow-lg rounded-lg text-black font-bold' key={data._id} style={{ backgroundColor: "white" }}>
                            <p className='mb-3'>{data.newName}</p>
                            <p className='font-normal'>{data.newReview}</p>
                            <p className='font-light text-sm'>Posted on {data.date}</p>
                        </div>
                    )
                })}


            </div>
            {/* review form */}
            <div className="form flex flex-col items-center justify-center gap-5">
                <input type="text" placeholder='Name' className='placeholder-white font-medium p-1 border-b md:w-[30%] w-[80%]' value={newName} onChange={(e) => setnewName(e.target.value)}/>
                <textarea name="" id="" className='border md:w-[30%] w-[80%] h-48 placeholder-white font-light p-1' placeholder='Comments Your Reviews here' maxLength={500} value = {newReview} onChange={(e) => setnewReview(e.target.value) }></textarea>
                <button className='bg-white p-3 text-black font-bold rounded-lg hover:bg-black hover:text-white cursor-pointer transition-all duration-300 ease-in-out' onClick={submit}>Submit</button>
            </div>
        </div>
    )
}

export default Reviews