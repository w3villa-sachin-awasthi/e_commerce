


import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../assets/categoryImages/imgmain.jpeg'
import image2 from '../assets/categoryImages/img1.jpeg'
import image3 from '../assets/categoryImages/img2.jpeg'
import image4 from '../assets/categoryImages/img3.jpeg'
import image5 from '../assets/categoryImages/img4.jpeg'
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { RiExchangeLine } from "react-icons/ri";
import { CiDollar } from "react-icons/ci";
import { FaRegQuestionCircle } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

function FeaturedCatergory() {
    let data = [

        { img: image2, content: "Bodycorn Dress", price: "$1099.00", model: "222" },
        { img: image3, content: "Black Lace Dress", price: "$899.00", model: "820" },
        { img: image4, content: "Jacob Turtleneck Sweater", price: "$699.00", model: "402" },
        { img: image5, content: "Black Vintage T-shirt", price: "$1999.00", model: "210" },
    ];

    const settings = {
        dots: true,
        arrows: false, 
        infinite: false, // Disable infinite scrolling for better control
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
            }
        ],
    };

    return (
        <div className="flex flex-col items-center max-w-[1600px] mx-auto my-14 " >

            <div className="text-[30] sm:text-[47px] xl:text-[43px] font-semibold">Featured Category</div>
            <div className="h-[2px] w-[120px] bg-orange-600 my-2"></div>
            <div className="w-[70%] text-center text-slate-500 mb-6">
                Easily create category based modules and dispaly products from specific categories or brand only. The advanced page builder allows you to create any grid layout with full control at any breakpoint.

            </div>


            <div className="flex flex-col md:flex-row w-full justify-center items-start ">
    {/* First Child Div */}
    <div className="w-full md:w-[30%] lg:w-[20%] flex justify-center items-center md:items-start px-10 md:px-0">
    <div
        className="bg-cover bg-slate-300 bg-center w-full flex flex-col relative shadow-sm shadow-slate-400 max-w-full"
    >
        <div className="pl-5 h-[40px] mt-3 hidden  md:block font-semibold text-slate-700 text-[0.8em]">
            Fashion
            <div className="h-[1.3px] bg-orange-500 w-[60px]"></div>
        </div>
        <img src={image1} alt="" className="overflow-hidden md:h-[250px] w-full object-cover mx-auto pt-10 px-10 md:pt-auto" />
        <div className="flex flex-col justify-between bg-slate-300 py-2 font-light text-[15px] px-10 md:px-1 w-full mb-6 md:mb-2">
            <div>Accessories</div>
            <div>Dresses</div>
            <div>Pants</div>
            <div>T-shirts</div>
            <div className="text-blue-900 font-bold underline">See all in Fashion</div>
        </div>
    </div>
</div>



    {/* Second Child Div */}
    <div className="w-full md:w-[70%] xl:[80%] text-center overflow-hidden flex flex-col justify-start ">
        <div className="pl-10 h-[40px] mt-3 font-semibold text-slate-700 text-[1em] text-start">
            New in Fashion
            <div className="h-[1.3px] bg-orange-500 w-[60px]"></div>
        </div>
        <Slider {...settings}>
    {data.map((val, index) => (
        <div
            key={index}
            className="bg-cover bg-center max-w-[170px] min-w-[170px] sm:max-w-[270px] sm:min-w-[270px] flex pb-10 text-xl font-bold mx-4 relative shadow-lg shadow-slate-400 mb-10"
        >
            <img src={val.img} alt="" className="overflow-hidden h-[170px] sm:h-[250px] mx-auto" />
            {/* Content */}
            <div className="w-full flex justify-start font-normal mt-2 px-2 text-[12px] sm:text-[15px]">
                {val.content}
            </div>
            {/* Price */}
            <div className="font-light w-full text-start text-[10px] sm:text-[14px] px-2 mt-[-7px]">
                {val.price}
            </div>
            {/* Buttons */}
            <div className="flex justify-between mt-[8px] px-2">
                <div className="flex font-normal text-[13px] sm:text-[15px]">
                    <button className="bg-blue-800 px-2 rounded-sm text-white font-light text-[11px] sm:text-[13px]">
                        ADD TO CART
                    </button>
                </div>
                <div className="flex items-center">
                    <div className="mr-2">
                        <FaRegHeart />
                    </div>
                    <div className="mr-2">
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
    );
}

export default FeaturedCatergory;













