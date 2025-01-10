import React from "react";
import img1 from "../assets/image1.jpeg";
import img2 from "../assets/image2.jpeg";
import img3 from "../assets/image3.jpeg";
import { FaArrowRightLong } from "react-icons/fa6";

function HeroSection() {
  return (
    <div className="flex flex-col lg:flex-row items-center  lg:max-h-[500px] justify-between px-4 bg-slate-50 w-full   relative overflow-hidden max-w-[1600px] mx-auto my-[50px] px-3 md:px-5 lg:px-7 2xl:px-10 ">
      {/* Hero Section */}
      <div
        className="hero lg:min-h-screen min-h-[500px] w-full lg:max-w-[70%] mb-4 lg:mb-0 rounded-xl relative  overflow-hidden flex-1 shrink"
        style={{
          backgroundImage: `url(${img1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute left-4 top-2/4 md:left-10 lg:left-16  text-black px-4 sm:px-0 transform -translate-y-1/2">
          <button className=" bg-blue-600 border-0 font-semibold  text-[0.8em] md:text-[1.2em] lg:text-[1.4em] py-1 rounded-md  px-1 sm:px-2 md:px-3 text-white">
            Mobile
          </button>
          <h1 className="mt-6 text-xl sm:text-3xl md:text-4xl lg:text-4xl font-bold leading-tight">
            Best mobile options
          </h1>
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-4xl font-bold leading-tight mt-2">
            at any resolution
          </h1>
          <button className="bg-none text-[16px] sm:text-[20px] md:text-[23px] py-2 px-3 border-[2px] text-slate-800 rounded-md border-slate-800 mt-6 flex justify-center items-center">
            <div className="mr-3">Learn more</div>
            <FaArrowRightLong />
          </button>
        </div>
      </div>
       {/* <Temp/> */}
      {/* Card Section */}
      <div className="w-full lg:w-[465px] flex flex-row lg:flex-col lg:h-auto h-full bg-slate-50 justify-between gap-4 lg:gap-6 lg:py-4 shrink-0">
        {/* Card 1 */}

        <div className="w-[48%] lg:w-full h-[140px] md:h-auto shadow-xl bg-slate-50 rounded-xl flex items-center text-[1em]">
          <div className="h-full text-[9px] leading-[10px] sm:leading-[22px] sm:text-[14px] md:text-[20px] w-[50%]  flex justify-center flex-col items-start px-[5px] sm:px-[30px]">
            <div className="text-blue-700 uppercase font-bold  ">wearables</div>
            <div>Intelligent</div>
            <div>& Durable</div>
            <div>Design</div>
          </div>
          <figure className="w-1/2 h-full py-3">
            <img
              src={img2}
              alt="Wearables"
              className="h-full w-full object-cover object-left-[] rounded-xl"
            />
          </figure>
        </div>

        <div className="w-[48%] lg:w-full h-[140px] md:h-auto shadow-xl bg-slate-50 rounded-xl flex items-center text-[1em]">
          <div className="h-full text-[9px] leading-[10px] sm:leading-[22px] sm:text-[14px] md:text-[20px] w-[50%]  flex justify-center flex-col items-start px-[5px] sm:px-[30px] ">
            <div className="text-blue-700 uppercase font-bold ">computers</div>
            <div>Build your</div>
            <div>own high</div>
            <div>powered</div>
          </div>
          <figure className="w-1/2 h-full py-3">
            <img
              src={img3}
              alt="Wearables"
              className="h-full w-full object-cover object-left-[] rounded-xl"
            />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
