import React from 'react'
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { BsFillChatSquareTextFill } from "react-icons/bs";

function Navbar2() {

    return (
        <div className="bg-blue-600 w-full my-4 box-border">
            <div className='hidden md:flex items-center  h-[50px] justify-between   w-[100%]  text-white text-[18px] max-w-[1600px]  mx-auto  my-10 px-3 md:px-5 lg:px-7 2xl:p-0 '>
                <div className='flex  justify-between item center  h-[100%] '>
                    <div className='flex items-center hover:bg-yellow-500 h-[100%] px-8 text-black  relative bg-yellow-500 2xl:ml-9' >
                        <span className="absolute top-[-8px] right-4 px-1 h-[17px] flex items-center bg-orange-600 border-0 text-white rounded-none text-[11px] ">Sale</span>
                        <div><RiBarChartHorizontalFill /></div> All departments

                    </div>

                    <div className='hidden lg:flex items-center  hover:bg-yellow-500 h-[100%] px-3 ' >Multilevel</div>
                    <div className='hidden lg:flex items-center hover:bg-yellow-500 h-[100%] px-3 indicator'>Mega Menu
                    <span className="absolute top-[-8px] right-4 px-1 h-[17px] flex items-center bg-yellow-400 border-0 text-black  rounded-none text-[11px] ">new</span>

                    </div>
                    <div className='flex items-center hover:bg-yellow-500 h-[100%] px-3'>Fullwidth</div>
                </div>
                <div className='flex item-center  justify-between h-[100%] '>
                    <div className='flex items-center h-[100%] hover:bg-yellow-500 px-3'>
                        <div className='text-[1.4rem]'><MdOutlinePhoneInTalk /></div>  1.800.555.6789
                    </div>
                    <div className='flex items-center h-[100%] hover:bg-yellow-500 px-3  bg-yellow-500 text-black 2xl:mr-9'>
                        <div className='mr-2 mt-1 '><BsFillChatSquareTextFill /></div>  Blog
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar2