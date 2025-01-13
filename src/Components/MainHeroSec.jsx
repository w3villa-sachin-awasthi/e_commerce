import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import img4 from "../assets/img4.webp";
import laptop from '../assets/laptop.png';
import watch from '../assets/watch.webp';
function MainHeroSec() {
  return (
    <div className="w-full lg:w-[70%]  rounded-xl sm:mx-2 h-[250px] md:h-[400px] flex lg:h-full relative bg-slate-200 overflow-hidden my-2 hover:shadow-[0px_0px_3px_0px_grey] "
   
   >
      {/* First Child Div */}
      <div className="flex-grow text-[10px]  sm:text-[20px] items-start justify-center flex flex-col relative px-3 md:px-4 lg:px-6 2xl:px-8">
        <button className="bg-blue-700 text-white px-2 py-1 rounded-[4px] text-[0.9em] hover:bg-blue-900">
          MOBILE
        </button>
        <div className="text-[2em] font-medium whitespace-nowrap">
          Best Mobile Options{" "}
        </div>
        <div className="text-[2em] font-medium leading-4 sm:leading-7">
          at any resolution{" "}
        </div>

        <button className="flex justify-center items-center border-2 border-slate-600  mt-4 sm:mt-6 px-2 py-1 rounded-[5px] hover:border-slate-100 hover:bg-blue-700 hover:text-white ">
          Learn more
          <div className="ml-1">
            <FaArrowRightLong />
          </div>
        </button>
      </div>

      {/* Second Child Div */}
      <div className="h-[90%] my-auto overflow-hidden min-w-[30%] md:min-w-[min(450px,50%)]  flex justify-center items-center relative z-10 o">
        <img src={img4} alt="" className="h-full" />
      </div>
    </div>
  );
}

export default MainHeroSec;
