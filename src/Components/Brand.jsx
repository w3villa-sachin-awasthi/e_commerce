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
                    slidesToShow: 7,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
            {
                breakpoint: 1220, // For tablets
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
            {
                breakpoint: 950, // For tablets
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
           
            {
                breakpoint: 620, // For small devices
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 420, // For small devices
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 370, // For small devices
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            }
        ],
    };

    return (
        <div className="flex flex-col items-center max-w-[1600px] mx-auto my-14">

            <div className="text-[30] sm:text-[32px] xl:text-[43px] font-semibold">Shop by Brand</div>
            <div className="h-[2px] w-[120px] bg-orange-600 my-2"></div>
          


         


            <div className="w-[90%]  text-center mt-9">
                <Slider {...settings}>
                    {data.map((val, index) => (
                        <div
                            key={index}
                            className="bg-cover bg-center  max-w-[140px] sm:min-w-[140px] sm:max-w-[120px] min-w-[120px] flex    text-xl font-bold mx-4 relative mx-6 shadow-md rounded-xl shadow-slate-400"

                        >

                            <img src={val.img} alt="" className='overflow-hidden w-full rounded-lg' />
                           
                          
                        </div>
                    ))}
                </Slider>
            </div>
          <div className='w-full flex justify-center my-10'>
           <button className='uppercase bg-blue-600 text-white text-[0.8em] px-3 py-2 flex items-center rounded-sm'>
            see all products <span className='ml-2'><BsArrowRight/></span>
           </button>
          </div>
        </div>
    );
}

export default Brand;
