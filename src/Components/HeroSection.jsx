import React from "react";
import img1 from "../assets/image1.jpeg";
import img2 from "../assets/image2.jpeg";
import img3 from "../assets/image3.jpeg";
import { FaArrowRightLong } from "react-icons/fa6";

function HeroSection() {
  return (
    <div className="flex flex-col lg:flex-row items-center  lg:max-h-[500px] justify-between px-4 bg-slate-50 w-full   relative overflow-hidden max-w-[1600px] mx-auto my-[50px]">
      {/* Hero Section */}
      <div
        className="hero lg:min-h-screen min-h-[500px] w-full lg:max-w-[70%] mb-4 lg:mb-0 rounded-xl relative  overflow-hidden"
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

      {/* Card Section */}
      <div className="w-full lg:w-[30%] flex flex-row lg:flex-col lg:h-auto h-full bg-slate-50 justify-between gap-4 lg:gap-6 lg:py-4 ">
        {/* Card 1 */}
        <div className="w-[46%] lg:w-full shadow-xl bg-slate-50 rounded-xl flex items-center">
          <div className="card-body w-[50%]">
            <div className="text-blue-700 uppercase font-bold">wearables</div>
            <div>Intelligent</div>
            <div>& Durable</div>
            <div>Design</div>
          </div>
          <figure className="w-1/2">
            <img
              src={img2}
              alt="Wearables"
              className="h-full w-full object-cover rounded-xl"
            />
          </figure>
        </div>

        {/* Card 2 */}
        <div className="w-[46%] lg:w-full  shadow-xl bg-slate-50 rounded-xl flex items-center">
          <div className="card-body">
            <div className="text-blue-700 uppercase font-bold">computers</div>
            <div>Build your</div>
            <div>own high</div>
            <div>powered</div>
          </div>
          <figure className="w-1/2 object-cover object-center">
            <img
              src={img3}
              alt="Computers"
              className="h-full w-full object-cover rounded-xl"
            />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
