import React from 'react'
import { FaRegCopyright } from "react-icons/fa6";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { FaCcDiscover } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcStripe } from "react-icons/fa";
import { FaCcAmazonPay } from "react-icons/fa";

function Payment() {
    return (
        <div className="bg-slate-700  w-full">
            <div className='flex flex-col sm:flex-row  sm:items-center max-w-[1600px] mx-auto mt-10 px-3 md:px-5 lg:px-7 2xl:px-10 
               text-[13px] sm:text-[15px] md:text-[17px] text-slate-500 justify-between  py-5
            '>
                <div className="flex justify-center items-center">Copyright  <div> <FaRegCopyright /></div>
                    2014, Your Stor, All Right Reserved</div>
                <div className="flex gap-2 text-[2.1em] justify-center items-center">
                  <FaCcVisa/>
                  <FaCcMastercard/>
                <div className=''>
                <FaCcAmazonPay/>
                </div>
                  <FaCcDiscover/>
                  <FaCcPaypal/>
                  <FaCcStripe/>
                </div>
            </div>
        </div>
    )
}

export default Payment