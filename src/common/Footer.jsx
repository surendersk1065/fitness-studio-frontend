import React from 'react'
import { CgGym } from "react-icons/cg";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
    const sec2 = ["Business", "Franchise", "Partnerships", "Network"]
    const sec3 = ["Partner", "blogs", "security", "careers"]
    const sec4 = ["contact us", "privacy policy", "bmi calculator", "terms & conditions"]
    return (
        <div style={{ backgroundColor: "#2F313C" }}>
            <div  className='flex justify-around items-center lg:p-10 p-1 py-2'>
                <div className="sec__1 w-[20%]" >
                    <div className='flex items-center gap-3'>
                        <p className='lg:text-6xl text-2xl'><CgGym /></p>
                        <p className='font-bold text-sm lg:text-2xl'>Fitness Studio</p>
                    </div>
                    <p className='text-sm mt-6 hidden lg:block'>At fitness Studio, we make group workouts fun, daily food healthy & tasty, mental fitness easy with yoga & meditation, Medical & lifestyle care hassle-free.#BeBetterEveryDay</p>

                </div>

                <div className="sec__2">
                    <ul>
                        {sec2.map((items, ind) => {
                            return <li key={ind} className='mb-2 text-xs lg:text-base'>{items}</li>
                        })}
                    </ul>
                </div>

                <div className="sec__3">
                    <ul>
                        {sec3.map((items, ind) => {
                            return <li key={ind} className='mb-2 text-xs lg:text-base'>{items}</li>
                        })}
                    </ul>
                </div>

                <div className="sec__4">
                    <ul>
                        {sec4.map((items, ind) => {
                            return <li key={ind} className='mb-2 text-xs lg:text-base'>{items}</li>
                        })}
                    </ul>
                </div>

            </div>

            <div className="social pb-10">
                        <ul className='flex justify-around lg:text-4xl text-2xl'>
                            <li data-aos="flip-left"><FaYoutube /></li>
                            <li data-aos="flip-left"><FaFacebook /></li>
                            <li data-aos="flip-left"><FaSquareXTwitter /></li>
                            <li data-aos="flip-left"><FaInstagram /></li>
                            <li data-aos="flip-left"><FaLinkedin /></li>
                        </ul>
            </div>

        </div>
    )
}

export default Footer