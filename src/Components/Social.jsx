import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaSkype } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
function Viewed() {
    let arr=[
    <FaFacebookF/>,
    <FaTwitter/>,
    <FaInstagram/>,
    <FaLinkedinIn/>,
    <IoLogoYoutube/>,
    <FaSkype/>,
    <FaGoogle/>
    ]
    return (
     
            <div className='max-w-[1600px] w-[100%] mx-auto flex justify-center'>
               {
                arr.map((val,ind)=><div className='h-[40px] w-[40px] bg-blue-700 text-white rounded-[50%] flex justify-center items-center mx-1 my-5'>
                    {val}
                </div>)
               }
            </div>
    
    )
}

export default Viewed