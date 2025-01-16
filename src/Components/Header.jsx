import React, { useState } from "react";
import { FaSearch, FaUserCircle, FaPen, FaRegHeart } from "react-icons/fa";
import { RiExchangeLine } from "react-icons/ri";
import { TiShoppingCart } from "react-icons/ti";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCaretDown } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full sm:bg-slate-200 py-2">
      <div className="flex items-center  h-[60px] justify-between   max-w-[1600px]  mx-auto    px-3 md:px-5 lg:px-7 2xl:p-10 ">
        <div className="w-auto font-extrabold hover:text-slate-950 text-[30px] sm:text-[34px] md:text-[45px]  font-mono   uppercase">
          Journal
        </div>

        <div className="hidden xl:flex w-[45%] ">
          <ul className="menu menu-horizontal px-1 box-border w-[100%] flex">
            <li>
              <summary className="bg-blue-700 text-slate-50 rounded-none py-[9px]">
                All{" "}
                <span>
                  <FaCaretDown />
                </span>
              </summary>
            </li>
            <li className="w-[70%]">
              <input
                type="text"
                placeholder="Search here..."
                className="rounded-none w-[100%] bg-slate-50 border-[0.2px] border-slate-300"
              />
            </li>
            <li className="bg-blue-700  flex justify-center items-center">
              <div>
                <FaSearch className="text-slate-50 h-[100%] text-[100%]" />
              </div>
            </li>
          </ul>
        </div>

        <div className="md:flex w-auto lg:w-[20%] hidden text-slate-700 ">
          {[
            { icon: <FaUserCircle />, label: "Login" },
            { icon: <FaPen />, label: "Register" },
            { icon: <FaRegHeart />, label: "WishList" },
            { icon: <RiExchangeLine />, label: "Compare" },
          ].map((item, index) => (
            <div
              className="flex flex-col mx-2 hover:text-slate-950 "
              key={index}
            >
              <div className="flex w-[100%] justify-center text-[24px] hover:text-[26px]">
                {item.icon}
              </div>
              <div className="text-[13px] hover:text-[15px] text-center">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <div className="hidden lg:flex h-[100%] items-center text-slate-700 justify-end border-2 border-slate">
          0 items(s) - $0.00
          <button className="bg-blue-700 h-[38px] w-[35px] flex justify-center items-center text-white text-[28px] ml-3 hover:bg-white hover:text-blue-700">
            <TiShoppingCart />
          </button>
        </div>

        <div className="lg:hidden flex justify-end  flex-grow md:flex-grow-0 items-center ">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[30px]  hover:text-slate-500 px-3"
          >
            <GiHamburgerMenu />
          </button>
          <div className="px-2 hover:text-slate-500  text-[27px]">
            {" "}
            <FaSearch className="" />
          </div>
          <div className="px-3 hover:text-slate-500  text-[30px]">
            <TiShoppingCart />
          </div>
        </div>

        {isMenuOpen && (
          <div className="absolute top-[60px] left-0 w-[100%] bg-base-200 z-20 flex flex-col items-center p-4 lg:hidden">
            <ul className="w-[60%]">
              <li className="mb-2 flex">
                <input
                  type="text"
                  placeholder="Search here..."
                  className="rounded-none w-[90%] p-2 text-black"
                />
                <li className="w-[10%] flex justify-center items-center bg-slate-600 text-white ">
                  <FaSearch className="" />
                </li>
              </li>

              {[
                "Login",
                "Register",
                "WishList",
                "Compare",
                "Cart: 0 items(s) - $0.00",
              ].map((item, index) => (
                <li
                  key={index}
                  className="text-center text-[16px] my-2 bg-slate-700 text-white rounded-md p-2 hover:bg-slate-900"
                >
                  {item}
                </li>
              ))}
              <button
                className="text-white text-[25px] w-full text-center hover:text-[27px] hover:box-border"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                <IoMdClose />
              </button>
            </ul>
          </div>
        )}

        {/* Content Below the Menu */}
        <div
          className={`${
            isMenuOpen
              ? "opacity-0 pointer-events-none"
              : "opacity-100 pointer-events-auto"
          } transition-opacity duration-300`}
        >
          {/* This is the content below the menu */}
          <div className="content-below-menu">
            {/* Your content goes here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
