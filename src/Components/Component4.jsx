import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import { GiReturnArrow } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { SiCodeblocks } from "react-icons/si";

function Component4() {
  return (
    <div className="bg-slate-800 w-full">
      <div className="max-w-[1600px] mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 text-white py-6 px-4">
       
        <div className="flex items-center">
          <div className="text-[30px] lg:text-[37px] border-2 border-blue-600 h-[70px] w-[70px] rounded-full flex justify-center items-center text-orange-700 mr-3">
            <TbTruckDelivery />
          </div>
          <div className="flex flex-col">
            <div className="text-[1em] lg:text-[1.3em]">Free Shipping</div>
            <div className="text-[0.8em] text-slate-300">Free delivery over $100</div>
          </div>
        </div>

       
        <div className="flex items-center">
          <div className="text-[30px] lg:text-[37px] border-2 border-blue-600 h-[70px] w-[70px] rounded-full flex justify-center items-center text-orange-700 mr-3">
            <GiReturnArrow />
          </div>
          <div className="flex flex-col">
            <div className="text-[1em] lg:text-[1.3em]">Free Returns</div>
            <div className="text-[0.8em] text-slate-300">Hassle-free returns</div>
          </div>
        </div>

       
        <div className="flex items-center">
          <div className="text-[30px] lg:text-[37px] border-2 border-blue-600 h-[70px] w-[70px] rounded-full flex justify-center items-center text-orange-700 mr-3">
            <RiSecurePaymentLine />
          </div>
          <div className="flex flex-col">
            <div className="text-[1em] lg:text-[1.3em]">Secure Shopping</div>
            <div className="text-[0.8em] text-slate-300">Best security features</div>
          </div>
        </div>

      
        <div className="flex items-center">
          <div className="text-[30px] lg:text-[37px] border-2 border-blue-600 h-[70px] w-[70px] rounded-full flex justify-center items-center text-orange-700 mr-3">
            <SiCodeblocks />
          </div>
          <div className="flex flex-col">
            <div className="text-[1em] lg:text-[1.3em]">Unlimited Blocks</div>
            <div className="text-[0.8em] text-slate-300">Any content, any page</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component4;
