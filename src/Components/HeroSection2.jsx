import React from "react";
import MainHeroSec from "./MainHeroSec";
import laptop from "../assets/laptop.png";
import watch from "../assets/watch.webp";
function HeroSection2() {
  return (
    <div className="max-w-[1600px] mx-auto px-3 md:px-5 lg:px-7 2xl:px-10 lg:h-[400px] mb-2 sm:mb-0 sm:my-7 flex lg:flex-row flex-col  ">
      {/* Main child  */}
      <MainHeroSec />
      
      <div className="w-full lg:w-[450px]   justify-between  sm:mx-2 h-[130px] sm:h-[180px] md:h-[230px]    lg:h-full flex lg:flex-col py-1">
        {/* first Child  */}  
        <div className="w-[50%] lg:w-full lg:h-[50%]  flex p-2 bg-slate-200 my-1 rounded-lg mr-1 hover:shadow-[0px_0px_3px_0px_grey]">
          <div className="h-full w-[40%] flex flex-col items-start justify-center sm:px-2 text-[11px] sm:text-[14px] md:text-[17px] leading-2 sm:leading-6">
            <div className="text-blue-800">wearables</div>
            <div className="font-medium text-[1.1em]">Intelligent</div>
            <div className="font-medium text-[1.1em]">& Durable</div>
            <div className="font-medium text-[1.1em]">Design</div>
          </div>
          <div className="h-full w-[60%] ">
            <img src={watch} className="h-full w-full object-cover " alt="" />
          </div>

        </div>
        {/* second box */}
        <div className="w-[50%] lg:w-full lg:h-[50%]  flex p-2 bg-slate-200 my-1  rounded-xl hover:shadow-[0px_0px_3px_0px_grey]">
          <div className="h-full w-[40%] flex flex-col items-start justify-center sm:px-2 text-[11px] sm:text-[14px] md:text-[17px] leading-2 sm:leading-6">
            <div className="text-blue-800">Computer</div>
            <div className="font-medium text-[1.1em]">Build Your</div>
            <div className="font-medium text-[1.1em]">own high</div>
            <div className="font-medium text-[1.1em]">powered PC</div>
          </div>
          <div className="h-full w-[60%] ">
            <img src={laptop} className="h-full w-full object-cover" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection2;
