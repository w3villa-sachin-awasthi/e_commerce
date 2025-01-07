import React from 'react';
import img1 from '../assets/image1.jpeg';
import img2 from '../assets/image2.webp';
import img3 from '../assets/image3.webp';
import { FaArrowRightLong } from "react-icons/fa6";

function HeroSection() {
    return (
        <div className="flex flex-col lg:flex-row items-center bg-base-200 justify-between px-4 bg-slate-50 w-full my-[30px] lg:max-h-[550px] relative overflow-hidden max-w-[1600px] mx-auto">
          
          <div
    className="hero lg:min-h-screen min-h-[500px] w-full lg:max-w-[70%] mb-4 lg:mb-0 rounded-xl relative"
    style={{
        backgroundImage: `url(${img1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }}
>
    <div className="absolute left-4 top-2/4 md:left-10 lg:left-16 text-white px-4 sm:px-0">
        <button className="btn btn-primary font-normal text-[0.8em] md:text-[1.2em] lg:text-[1.2em] p-1  sm:p-2 md:p-3">
            Mobile
        </button>
        <h1 className="mt-6 text-xl sm:text-3xl md:text-4xl lg:text-4xl font-bold leading-tight ">
            Best mobile options
        </h1>
        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-4xl font-bold leading-tight mt-2">
            at any resolution
        </h1>
        <button className="bg-none text-[16px] sm:text-[20px] md:text-[23px] py-2 px-3 border-[1px] border-slate-100 mt-6 flex justify-center items-center">
            <div className="mr-3">Learn more</div>
            <FaArrowRightLong />
        </button>
    </div>
</div>


           
            <div className="w-full lg:w-[30%] flex flex-row bg-slate-50 lg:flex-col h-full justify-around gap-4">
                {/* Card 1 */}
                <div className="card card-side bg-base-100 shadow-xl bg-slate-50 max-h-[270px] w-full lg:w-auto">
                    <div className="card-body">
                        <div className='text-blue-700 uppercase'>wearables</div>
                        <div>Intelligent</div>
                        <div>& Durable</div>
                        <div>Design</div>
                    </div>
                    <figure>
                        <img src={img2} alt="Movie" className="max-w-[400px] w-[70%]" />
                    </figure>
                </div>

                {/* Card 2 */}
                <div className="card card-side bg-base-100 bg-slate-50 shadow-xl max-h-[270px] w-full lg:w-auto">
                    <div className="card-body">
                       <div className='text-blue-700 uppercase'>computers</div>
                       <div>Build your</div>
                       <div>own high</div>
                       <div>powered </div>
                    </div>
                    <figure>
                        <img src={img3} alt="Movie" className="max-w-[500px] w-full" />
                    </figure>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
