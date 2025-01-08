import React, { useState } from "react";
import { FaSearch, FaUserCircle, FaPen, FaRegHeart } from "react-icons/fa";
import { RiExchangeLine } from "react-icons/ri";
import { TiShoppingCart } from "react-icons/ti";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="flex items-center  h-[60px] justify-between px-4  max-w-[1600px]  mx-auto bg-slate-50 pt-7">
           
            <div className="w-auto font-semibold text-[24px] sm:text-[32px] uppercase">
                Journal
            </div>

          
            <div className="hidden xl:flex w-[45%]">
                <ul className="menu menu-horizontal px-1 box-border w-[100%] flex">
                    <li>
                        <details>
                            <summary className="bg-blue-700 text-slate-50 rounded-none">
                                All
                            </summary>
                            <ul className="bg-base-100 rounded-t-none p-2">
                                <li><a href="#">Link 1</a></li>
                                <li><a href="#">Link 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li className="w-[80%]">
                        <input
                            type="text"
                            placeholder="Search here..."
                            className="rounded-none w-[100%] bg-slate-50"
                        />
                    </li>
                    <li className="bg-blue-700 flex justify-center items-center">
                        <div>
                            <FaSearch className="text-slate-50 h-[100%] text-[100%]" />
                        </div>
                    </li>
                </ul>
            </div>

            <div className="md:flex w-auto lg:w-[20%] hidden">
                {[
                    { icon: <FaUserCircle />, label: "Login" },
                    { icon: <FaPen />, label: "Register" },
                    { icon: <FaRegHeart />, label: "WishList" },
                    { icon: <RiExchangeLine />, label: "Compare" },
                ].map((item, index) => (
                    <div className="flex flex-col mx-2" key={index}>
                        <div className="flex w-[100%] justify-center text-[24px]">
                            {item.icon}
                        </div>
                        <div className="text-[13px] text-center">{item.label}</div>
                    </div>
                ))}
            </div>

        
            <div className="hidden lg:flex h-[100%] items-center">
                0 items(s) - $0.00
                <button className="bg-blue-700 h-[30px] w-[30px] flex justify-center items-center text-white text-[22px] ml-3">
                    <TiShoppingCart />
                </button>
            </div>

            <div className="lg:hidden flex justify-center items-center ">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-[24px] px-3"
                >
                    <GiHamburgerMenu />

                </button>
                <div className="px-2 text-[20px]"> <FaSearch className="" /></div>
                <div className="px-3 text-[24px]"><TiShoppingCart /></div>
            </div>

          
            {isMenuOpen && (
                <div className="absolute top-[60px] left-0 w-[100%] bg-base-200 z-10 flex flex-col items-center p-4 lg:hidden">
                    <ul className="w-[60%]">
                        <li className="mb-2 flex ">
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
                    </ul>
                </div>
            )}

        </div>
    );
}

export default Header;
