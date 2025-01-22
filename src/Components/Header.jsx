import React, { useState } from "react";
import { FaSearch, FaUserCircle, FaPen, FaRegHeart } from "react-icons/fa";
import { RiExchangeLine } from "react-icons/ri";
import { TiShoppingCart } from "react-icons/ti";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCaretDown } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Search from "../Components2/Search";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [search, setSearch] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cart.value.length)

  function handleClick() {
    navigate("/home/search");
    console.log(search)
  }
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
                className="rounded-none w-full bg-slate-50 border-[0.2px] border-slate-300 placeholder-gray-500 text-black focus:text-slate-800"
                value={search}
                name="search"
                onChange={e => setSearch(e.target.value)}
              />

            </li>
            <li className="bg-blue-700  flex justify-center items-center">
              <button onClick={handleClick}>
                <FaSearch className="text-slate-50 h-[100%] text-[100%]" />
              </button>
            </li>
          </ul>
        </div>

        <div onClick={() => navigate('/')} className="md:flex w-auto lg:w-[20%] hidden text-slate-700">

          <div className="flex flex-col mx-2 hover:text-slate-950">
            <div className="flex w-[100%] justify-center text-[24px] hover:text-[26px]">
              <FaUserCircle />
            </div>
            <div className="text-[13px] hover:text-[15px] text-center">Login</div>
          </div>

          <Link to={'/register'} className="flex flex-col mx-2 hover:text-slate-950">
            <div className="flex w-[100%] justify-center text-[24px] hover:text-[26px]">
              <FaPen />
            </div>
            <div className="text-[13px] hover:text-[15px] text-center">Register</div>
          </Link>

          <div className="flex flex-col mx-2 hover:text-slate-950">
            <div className="flex w-[100%] justify-center text-[24px] hover:text-[26px]">
              <FaRegHeart />
            </div>
            <div className="text-[13px] hover:text-[15px] text-center">WishList</div>
          </div>

          <div className="flex flex-col mx-2 hover:text-slate-950">
            <div className="flex w-[100%] justify-center text-[24px] hover:text-[26px]">
              <RiExchangeLine />
            </div>
            <div className="text-[13px] hover:text-[15px] text-center">Compare</div>
          </div>
        </div>


        <div className="hidden lg:flex h-[100%] items-center text-slate-700 justify-end border-2 border-slate">
          0 items(s) - $0.00
          <button
            onClick={() => navigate('/home/cart')}
            className="bg-blue-700 relative h-[38px] w-[35px] flex justify-center items-center text-white text-[28px] ml-3 hover:bg-white hover:text-blue-700">
            <TiShoppingCart />
            <div className="absolute top-[-19px] right-[-6px] text-red-600 text-[25px] ">{carts}</div>

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
          <div className="px-1 relative bg-slate-400  hover:text-slate-500  text-[30px]"
            onClick={() => navigate('/home/cart')}
          >
            <TiShoppingCart />
            <div className="absolute top-[-19px] right-[-6px] text-red-600 text-[25px] ">{carts}</div>
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
              <li onClick={()=>{
                 setIsMenuOpen(false);
                navigate("/home")
              }} className="text-center text-[16px] my-2 bg-slate-700 text-white rounded-md p-2 hover:bg-slate-900">
                Home
              </li>
              <li className="text-center text-[16px] my-2 bg-slate-700 text-white rounded-md p-2 hover:bg-slate-900">
                Login
              </li>
              <li className="text-center text-[16px] my-2 bg-slate-700 text-white rounded-md p-2 hover:bg-slate-900">
                Register
              </li>
             

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
          className={`${isMenuOpen
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
