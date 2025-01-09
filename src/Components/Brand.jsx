import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../assets/logo/logo1.png'
import image2 from '../assets/logo/logo2.png';
import image3 from '../assets/logo/logo3.jpeg'
import image4 from '../assets/logo/logo4.jpeg'
import image5 from '../assets/logo/logo5.png';
import image6 from '../assets/logo/logo6.jpeg';
import image7 from '../assets/logo/logo7.png';
import image8 from '../assets/logo/logo8.jpeg';
import image9 from '../assets/logo/logo9.jpeg';
import image10 from '../assets/logo/logo10.png'
import image11 from '../assets/logo/logo11.png'
import image12 from '../assets/logo/logo12.png'
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { RiExchangeLine } from "react-icons/ri";
import { CiDollar } from "react-icons/ci";
import { FaRegQuestionCircle } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

function Brand() {
    let data = [
        { img: image1,  },
        { img: image2,},
        { img: image3,  },
        { img: image4,  },
        { img: image5, },
        { img: image6,  },
        { img: image7,},
        { img: image8,  },
        { img: image9,  },
        { img: image10, },
        { img: image11,  },
        { img: image12,},
       
    ];

    const settings = {
        dots: true,
        arrows: false, 
        infinite: false, // Disable infinite scrolling for better control
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1, // Scroll one slide at a time for better user experience
        responsive: [
            {
                breakpoint: 1500, // For tablets
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
            {
                breakpoint: 1250, // For tablets
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
            {
                breakpoint: 1100, // For tablets
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
           
            {
                breakpoint: 900, // For small devices
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 770, // For small devices
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 630, // For small devices
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            }
        ],
    };

    return (
        <div className=" max-w-[1600px] mx-auto my-14 px-3 md:px-5 lg:px-7 2xl:px-10">

          
        
        
          
          <div className='flex sm:items-center items-start flex-col'>
          <div className="text-[30] sm:text-[32px] xl:text-[43px] font-semibold">Shop by Brand</div>
          <div className="h-[1.5px] w-[60px] sm:w-[120px] bg-orange-600 my-2"></div>
          </div>


         


            <div className=" mt-9  w-full  h-[160px] sm:h-[240px]">
                <Slider {...settings}>
                    {data.map((val, index) => (
                        <div
                            key={index}
                            className="bg-cover  object-cover bg-center  max-w-[140px] sm:min-w-[140px] sm:max-w-[120px] min-w-[95%] max-w-[95%] flex    text-xl font-bold  relative  shadow-md rounded-xl shadow-slate-400"

                        >

                            <img src={val.img} alt="" className='overflow-hidden w-full rounded-lg' />
                           
                          
                        </div>
                    ))}
                </Slider>
            </div>
        
        </div>
    );
}

export default Brand;
