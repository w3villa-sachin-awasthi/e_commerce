import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { RiExchangeLine } from "react-icons/ri";
import { CiDollar } from "react-icons/ci";
import { FaRegQuestionCircle } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { TiShoppingCart } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";
import { productCategory, categorySectionSetting as settings } from "../Config/data";
import { selectProduct } from "../Config/redux/slices.js/product";
import { useDispatch } from "react-redux";
import { productCategory as products } from "../Config/data";
function CategorySection() {
  const navigate=useNavigate();
  const dispatch=useDispatch();
   function handleModal(val) {
      dispatch(selectProduct(val));
  
      navigate(`/home/product/${val.id}`);
    }

  return (
    <div className="w-full bg-slate-100 pt-[10px] sm:pt-0">
      <div className="flex flex-col md:items-center max-w-[1600px] mx-auto my-10 px-3 md:px-5 lg:px-7 2xl:px-10">
        <div className="text-[26px] sm:text-[37px] xl:text-[43px] font-semibold">
          Featured Products
        </div>
        <div className="h-[2px] w-[60px] md:w-[120px] bg-orange-600 my-2"></div>
        <div className="w-[90%] sm:w-[74%] text-start text-[14px] sm:text-normal sm:text-center  text-slate-500 mb-6">
          Display any products as tabs or accordions with optional grid or
          carousal mode. Custom products per row per modules and per breakpoint.
          Each module can display products in either grid or list with different
          styles per module.{" "}
          <span className="text-blue-800 underline">Learn more</span>
        </div>

        <div className="flex h-[33px] sm:h-[40px]   flex-wrap  bg-slate-200 mb-[50px] ">
          <div className="h-full w-[50%] sm:w-[33%] md:w-auto bg-blue-700 text-white px-4 flex justify-center hover:text-blue-700 hover:font-bold cursor-pointer hover:bg-white  items-center font-semibold text-[11px] md:text-[15px]">
            FEATURES
          </div>
          <div className="h-full w-[50%] sm:w-[33%] md:w-auto flex justify-center items-center px-3 hover:font-bold border-[0.5px] border-slate-300 cursor-pointer text-[11px] md:text-[15px]">
            LATEST
          </div>
          <div className="h-full w-[50%] sm:w-[33%] md:w-auto flex justify-center items-center hover:font-bold px-3 border-[0.5px] border-slate-300 cursor-pointer text-[11px] md:text-[15px]">
            BESTSELLERS
          </div>
          <div className="h-full w-[50%] sm:w-[33%] md:w-auto flex justify-center items-center hover:font-bold px-3 border-[0.5px] cursor-pointer border-slate-300 text-[11px] md:text-[15px] ">
            SPECIALS
          </div>
        </div>

        <div className="w-[100%]   text-center  ">
          <Slider {...settings}>
            {/* first */}
            {
              products.map((val)=>
                <div key={val.id}
                onClick={(e) => handleModal(val)}
                 className="bg-cover bg-center  w-[100%] sm:max-w-[90%]  min-w-[250px] sm:min-w-[48%]  flex items-center rounded-xl overflow-hidden justify-center text-black text-xl font-bold  relative  my-6 border-[1px] border-slate-300 shadow-[0px_0px_0px_0px_grey] ">
                 
              <div
                className="absolute top-[34px] left-[-50px] text-[14px] bg-red-600 text-white text-center uppercase w-[200px] "
                style={{ transform: "rotate(-45deg)" }}
              >
                2-3 days
              </div>
              <div className="absolute right-2  text-[9px] leading-3 top-2 ">
                <div className="w-[60px] bg-orange-600 text-white px-2 py-1 flex justify-center mt-1 rounded-sm">
                  Top Brand
                </div>
              </div>
              <div className="overflow-hidden h-[100%] sm:h-[250px] ">
                <img
                  src={productCategory[0].image}
                  alt=""
                  className="overflow-hidden h-[100%] w-[100%] h-full object-cover"
                />
              </div>{" "}
              <div className="flex justify-between bg-slate-200 text-slate-500 py-2 font-light text-[15px] px-1">
                <div>Erickson</div>
                <div>Model 519</div>
              </div>
              <div className="w-full text-[30px] flex justify-start font-normal mt-2 px-2">
                Sandal's
              </div>
              <div className="font-light w-full text-start text-[16px] text-slate-500 px-2 mt-[10px]">
                $999.00 <span className="text-[12px]  ">$3,299.00</span>{" "}
              </div>
              <div className="flex justify-between mt-[8px] px-3">
                <div className="flex font-normal text-[17px]">
                  <div className="text-[19px] w-[35px] py-1 border-[1px] border-slate-400 text-slate-700">
                    1
                  </div>
                  <div className="bg-slate-300 font-light px-[px] ">
                    <div className="hover:bg-slate-200">
                      <FaAngleUp />
                    </div>
                    <div className="hover:bg-slate-200">
                      {" "}
                      <FaAngleDown />{" "}
                    </div>
                  </div>
                  <button className="bg-blue-800 px-2 rounded-sm text-white font-light text-[13px]">
                    {/* <div className="">ADD TO CART</div> */}
                    <div className="text-[28px] hover:text-black">
                      <TiShoppingCart />
                    </div>
                  </button>
                </div>
                <div className="flex items-center text-[1.3em]">
                  <div className="mr-2 hover:text-slate-500">
                    {" "}
                    <FaRegHeart />{" "}
                  </div>
                  <div className="mr-2 text-[1.1em] hover:text-slate-500">
                    {" "}
                    <RiExchangeLine />{" "}
                  </div>
                </div>
              </div>
              <div className="flex bg-slate-300 font-normal justify-between text-[19px] px-2 py-2 mt-6">
                <div
                  className="flex items-center
                                     "
                >
                  <div className="text-green-800 text-[1.2em] mr-1">
                    {" "}
                    <CiDollar />{" "}
                  </div>
                  Buy Now
                </div>
                <div className="flex items-center ">
                  <div className="text-red-800 text-[1.2em] mr-1">
                    <FaRegQuestionCircle />
                  </div>{" "}
                  Question
                </div>
              </div>
            </div>)
            }
          
           
          </Slider>
        </div>
        <div className="w-full flex justify-center my-10">
          <Link  to={'/home'} className="uppercase bg-blue-800  text-white text-[0.8em] px-3 py-2 flex items-center rounded-sm hover:text-black">
            see all products{" "}
            <span className="ml-2">
              <BsArrowRight />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CategorySection;
