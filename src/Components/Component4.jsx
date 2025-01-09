import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import { GiReturnArrow } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { SiCodeblocks } from "react-icons/si";

function Component4() {
  let arr = [
    {
      icons: <TbTruckDelivery />,
      item1: "Free Shipping",
      item2: "Free delivery over %100",
    },
    {
      icons: <GiReturnArrow />,
      item1: "Free Return",
      item2: "Hassle-free returns",
    },
    {
      icons: <RiSecurePaymentLine />,
      item1: "Secure Shopping",
      item2: "Best security features",
    },
    {
      icons: <SiCodeblocks />,
      item1: "Unlimited Blocks",
      item2: "Best security features",
    }
  ]
  return (
    <div className="bg-slate-700 w-full">
      <div className="max-w-[1600px] mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 text-white py-6 px-4">

        {
          arr.map((val, ind) => <div className="flex items-center" key={ind}>
            <div className="text-[19px] sm:text-[23px] md:text-[27px] xl:text-[30px] lg:text-[37px] border-2 border-blue-600 h-[50px] w-[50px] md:h-[60px] md:w-[60px] lg:h-[70px] lg:w-[70px] rounded-full flex justify-center items-center text-orange-700 mr-3">
              {val.icons}
            </div>
            <div className="flex flex-col">
              <div className="text-[0.8em] md:text-[1em] lg:text-[1.3em]">{val.item1}</div>
              <div className="text-[0.6em] md:text-[0.8em] text-slate-300">{val.item2}</div>
            </div>
          </div>)
        }









      </div>
    </div>
  );
}

export default Component4;
