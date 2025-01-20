import React from "react";
import { CiHome } from "react-icons/ci";
import { TbCircleDashedLetterA } from "react-icons/tb";
import { RxEnvelopeClosed } from "react-icons/rx";
import { GrCircleQuestion } from "react-icons/gr";
import { FaCaretDown } from "react-icons/fa";
import img from "../assets/britain.webp";
import { RiContactsBookFill } from "react-icons/ri";
import { PiFireTruckBold } from "react-icons/pi";
import { FaCircleUser } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router-dom";

function Info() {
  const navigate=useNavigate();
  return (
      <div className="max-w-[1600px] mx-auto flex justify-between items-center h-[35px] bg-blue-600 md:bg-slate-50 text-slate-500 text-[11px] font-medium   px-3 md:px-5 lg:px-7 2xl:px-10 ">
        <div className="flex justify-between w-full md:hidden  text-white">
          <div className="flex justify-center">
            <div className="flex items-center mx-2 hover:text-black cursor-pointer">
              <div className="flex items-center mx-1 ">
                {" "}
                <div className="text-[1.2em] mr-1 font-semibold">
                  <FaCircleUser />{" "}
                </div>{" "}
              </div>
              Login
            </div>
            <div className="flex items-center hover:text-black cursor-pointer">
              <div className="flex items-center mx-1">
                {" "}
                <div className="text-[1.2em] mr-1 font-semibold">
                  <FaRegCheckCircle />{" "}
                </div>{" "}
              </div>
              Register
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex items-center hover:text-black cursor-pointer">
              $ US Dollar <FaCaretDown />
            </div>
            <div className="flex items-center mx-2 hover:text-black cursor-pointer">
              <img src={img} className="max-w-[15px] mx-2" alt="" />
              English <FaCaretDown />
            </div>
          </div>
        </div>
        <div className="hidden md:flex  ">
          <div className="flex items-center mx-1 hover:text-black cursor-pointer" onClick={()=>navigate("/home/")}>
            {" "}
            <div className="text-[1.2em] mr-1 font-semibold " >
              <CiHome />{" "}
            </div>{" "}
            Home{" "}
          </div>
          <div className="flex items-center mx-1 hover:text-black cursor-pointer">
            {" "}
            <div className="text-[1.2em] mr-1">
              <TbCircleDashedLetterA />
            </div>{" "}
            About us
          </div>
          <div className="flex items-center mx-1 hover:text-black cursor-pointer">
            {" "}
            <div className="text-[1.2em] mr-1">
              <RxEnvelopeClosed />
            </div>
            Contact
          </div>
          <div className="flex items-center mx-1 hover:text-black cursor-pointer">
            {" "}
            <div className="text-[1.2em] mr-1">
              <GrCircleQuestion />{" "}
            </div>{" "}
            FAQ <FaCaretDown />
          </div>
        </div>
        <div className="hidden md:flex justify-center">
          <div className="flex items-center mx-2 hover:text-black cursor-pointer">
            <img src={img} className="max-w-[20px] mx-2" alt="" />
            English <FaCaretDown />
          </div>
          <div className="flex items-center hover:text-black cursor-pointer">
            $ US Dollar <FaCaretDown />
          </div>
        </div>
        <div className="hidden md:flex items-center'">
          <div className="flex items-center mx-2 hover:text-black cursor-pointer">
            <div className="text-[1.2em] ">
              <RiContactsBookFill />
            </div>{" "}
            More Menus <FaCaretDown />
          </div>
          <div className="flex items-center mx-2 hover:text-black cursor-pointer">
            <div className="text-[1.2em] mr-1">
              <PiFireTruckBold />
            </div>{" "}
            Delivery
          </div>
        </div>
      </div>
  );
}

export default Info;
