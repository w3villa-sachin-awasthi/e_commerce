import React from 'react'
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { BsFillChatSquareTextFill } from "react-icons/bs";

function Navbar2() {
   
  return (
    <div className='flex items-center  h-[50px] justify-between px-4 my-4 w-[100%] bg-blue-600 text-white text-[18px]'>
        <div className='flex  justify-between item center w-[33%] h-[100%]'>
             <div className='flex items-center hover:bg-yellow-500 h-[100%] px-3' > <div><RiBarChartHorizontalFill/></div> All departments</div>
             <div className='flex items-center hover:bg-yellow-500 h-[100%] px-3' >Multilevel</div>
             <div className='flex items-center hover:bg-yellow-500 h-[100%] px-3'>Mega Menu</div>
             <div className='flex items-center hover:bg-yellow-500 h-[100%] px-3'>Fullwidth</div>
        </div>
        <div className='flex item-center w-[15%] justify-between h-[100%] '>
           <div className='flex items-center h-[100%] hover:bg-yellow-500 px-3'>
          <div><MdOutlinePhoneInTalk/></div>  1.800.555.6789
           </div>
           <div className='flex items-center h-[100%] hover:bg-yellow-500 px-3'>
          <div><BsFillChatSquareTextFill/></div>  Blog
           </div>
        </div>
    </div>
  )
}

export default Navbar2