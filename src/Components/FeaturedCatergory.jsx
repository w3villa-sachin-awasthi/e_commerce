import React, { useEffect ,useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/categoryImages/imgmain.jpeg";
import image2 from "../assets/categoryImages/img1.jpeg";
import image3 from "../assets/categoryImages/img2.jpeg";
import image4 from "../assets/categoryImages/img3.jpeg";
import image5 from "../assets/categoryImages/img4.jpeg";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { RiExchangeLine } from "react-icons/ri";
import { CiDollar } from "react-icons/ci";
import { FaRegQuestionCircle } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import axios from "axios";

function FeaturedCatergory() {

   let data = [
    { img: image2, content: "Bodycorn Dress", price: "$1099.00", model: "222" },
    {
      img: image3,
      content: "Black Lace Dress",
      price: "$899.00",
      model: "820",
    },
    {
      img: image4,
      content: "Jacob Turtleneck Sweater",
      price: "$699.00",
      model: "402",
    },
    {
      img: image5,
      content: "Black Vintage T-shirt",
      price: "$1999.00",
      model: "210",
    },
  ];

  const settings = {
    dots: true,
    arrows: false,
    infinite: true, // Disable infinite scrolling for better control
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1, // Scroll one slide at a time for better user experience
    responsive: [
      {
        breakpoint: 1480, // For tablets
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 1130, // For tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 530, // For small devices
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
   
   <div className="w-full bg-slate-200 py-3">
     <div className="flex flex-col md:items-center max-w-[1600px] mx-auto my-10 px-3 md:px-5 lg:px-7 2xl:px-10">
      <div className="text-[25px] sm:text-[47px] xl:text-[43px] font-semibold">
        Featured Category
      </div>
      <div className="h-[2px] w-[120px] bg-orange-600 my-2"></div>
      <div className="w-[70%] md:text-center text-slate-500 mb-6">
                Easily create category based modules and dispaly products from specific
        categories or brand only. The advanced page builder allows you to create
        any grid layout with full control at any breakpoint.
      </div>

      <div className="flex   flex-col md:flex-row w-full h-auto justify-center   mt-5  ">
        {/* First Child Div */}
        <div className="w-[100%] md:w-[30%] xl:w-[20%] flex justify-center items-center md:items-start px-0 sm:px-10 md:px-0  f-full  md:h-[500px]  ">
          <div className="bg-cover md:bg-slate-300 bg-center w-full flex flex-col relative  maxw-full h-full ">
            <div className="pl-5 h-[40px] mt-3 hidden  md:block font-semibold text-slate-700 text-[0.8em]">
              Fashion
              <div className="h-[1.5px] bg-orange-500 w-[47px]"></div>            </div>
            {/* imgage */}
            <div               className="overflow-hidden  w-full object-cover mx-auto pmd:x-5  md:pt-auto md:mt-[20px] md:h-[310px] "
            >
                 <img
              src={image1}
              alt=""
              className="w-full object-cover h-full object-center"
            />
            </div>
             {/* content  */}
            <div className="flex flex-col justify-between md:bg-slate-300 py-2 font-light text-[18px] sm:text-[15px]  sm:px-5 w-full mb-6 md:mb-7">
              <div>Accessories</div>
              <div>Dresses</div>
              <div>Pants</div>
              <div>T-shirts</div>
              <div className="text-blue-900 font-bold underline hover:text-black hover:no-underline">
                See all in Fashion
              </div>
            </div>
          </div>
        </div>

        {/* Second Child Div */}
        <div className="w-full md:w-[70%] xl:w-[80%] text-center overflow-hidden  flex flex-col justify-start bg-white ">
          <div className="md:pl-5 h-[40px] mt-3 font-semibold text-slate-700 text-[1em] text-start">
            New in Fashion
            <div className="h-[1.3px] bg-orange-500 hidden sm:block w-[60px]"></div>
          </div>
          <Slider {...settings}>
            {data.map((val, index) => (
              <div
                key={index}
                className="bg-cover bg-center max-w-[90%]  min-w-[95%] sm:max-w-[270px] sm:min-w-[270px] flex pb-10 text-xl font-bold mt-[20px] sm:nt-auto relative  border-[1.5px] rounded-sm border-slate-200 mb-10 overflow-hidden"
              >
                <div    className="overflow-hidden object-cover   sm:h-[250px] mx-auto"
                >
               <img
                  src={val.img}
                  alt=""
                className="w-full"
                />
                </div>
               
                {/* Content */}
                <div className="w-full flex justify-start font-normal mt-2 px-2 text-[12px] sm:text-[15px] overflow-hidden whitespace-nowrap text-ellipsis  ">
                  {val.content}
                </div>
                {/* Price */}
                <div className="font-light w-full text-start text-[10px] sm:text-[14px] px-2 mt-[-7px]">
                  {val.price}
                </div>
                {/* Buttons */}
                <div className="flex justify-between mt-[8px] px-2">
                  <div className="flex font-normal text-[13px] sm:text-[15px]">
                    <button className="bg-blue-800 px-2 rounded-sm text-white font-light text-[9px] sm:text-[13px] overflow-hidden whitespace-nowrap text-ellipsis hover:text-black">
                      ADD TO CART
                    </button>
                  </div>
                  <div className="flex items-center text-slate-700">
                    <div className="md:mr-6 mr-2 hover:text-black">
                      <FaRegHeart />
                    </div>
                    <div className="md:mr-4 mr-2 hover:text-black">
                      <RiExchangeLine />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
   </div>
  );
}

export default FeaturedCatergory;
