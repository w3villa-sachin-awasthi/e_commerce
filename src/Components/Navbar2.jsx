import React from 'react'
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { BsFillChatSquareTextFill } from "react-icons/bs";

function Navbar2() {

    return (
        <div className="bg-blue-600 w-full my-6 box-border">
        <div className='hidden md:flex items-center  h-[50px] justify-between  my-4 w-[100%]  text-white text-[18px] max-w-[1600px]  mx-auto  my-10'>
            <div className='flex  justify-between item center  h-[100%] '>
                <div className='flex items-center hover:bg-yellow-500 h-[100%] px-8  indicator bg-yellow-500' >
                    <span className="indicator-item badge right bg-orange-600 border-0 text-white rounded-none ">Sale</span>
                    <div><RiBarChartHorizontalFill /></div> All departments

                </div>
              
                <div className='flex items-center hover:bg-yellow-500 h-[100%] px-3 ml-5' >Multilevel</div>
                <div className='flex items-center hover:bg-yellow-500 h-[100%] px-3 indicator'>Mega Menu
                <span className="indicator-item badge badge-secondary rounded-none">New</span>
                </div>
                <div className='flex items-center hover:bg-yellow-500 h-[100%] px-3'>Fullwidth</div>
            </div>
            <div className='flex item-center  justify-between h-[100%] '>
                <div className='flex items-center h-[100%] hover:bg-yellow-500 px-3'>
                    <div className='text-[1.4rem]'><MdOutlinePhoneInTalk /></div>  1.800.555.6789
                </div>
                <div className='flex items-center h-[100%] hover:bg-yellow-500 px-3 ml-10 bg-yellow-500'>
                    <div className='mr-2 mt-1 '><BsFillChatSquareTextFill /></div>  Blog
                </div>
            </div>
        </div>
        </div>
    )
}

export default Navbar2