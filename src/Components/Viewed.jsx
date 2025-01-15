import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../assets/cimages/cimg1.webp';
import image2 from '../assets/cimages/cimg2.webp';
import image3 from '../assets/cimages/cimg3.webp';
import image4 from '../assets/cimages/cimg4.webp';
import image5 from '../assets/cimages/cimg5.webp';
import { TiShoppingCart } from "react-icons/ti";
import { CiHeart } from "react-icons/ci";
import { RiExchangeLine } from "react-icons/ri";

function Viewed() {
  let data = [
    { img: image1, content: "fashion" },
    { img: image2, content: "bags" },
    { img: image3, content: "health & beauty" },
    { img: image4, content: "footwear" },
    { img: image5, content: "home decor" },
  ];

  const settings = {
    dots: true,
    arrows: false,
    infinite: true, // Enable infinite scrolling for continuous looping
    speed: 500,
    slidesToShow: 4,
    autoplay: false, // Enable autoplay
    autoplaySpeed: 2000, // Adjust the speed (in milliseconds) for auto sliding
    slidesToScroll: 1, // Scroll one slide at a time for better user experience
    responsive: [
      {
        breakpoint: 1190, // For tablets
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 950, // For smaller tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 620, // For small devices
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <div className='bg-slate-700 py-6 sm:py-7 md:py-10'>
      <div className="flex flex-col  sm:items-center max-w-[1600px] mx-auto  px-3 md:px-5 lg:px-7 2xl:px-10  ">


        <div className="text-[23px] w-full sm:text-[21px] uppercase font-medium">Most Viewed</div>
       <div className='w-full'>
       <div className="h-[2px] w-[80px] sm:w-[160px] bg-orange-600 my-2"></div>
       </div>






        <div className="w-[100%] text-center   ">
          <Slider {...settings}>
            {data.map((val, index) => (
              <div
                key={index}
                className="bg-cover bg-center  relative sm:h-[100px] bg-white max-w-[80%] sm:max-w-[90%]  min-w-[80%] sm:min-w-[48%]     overflow-hidden  text-white text-xl font-bold    my-6 hover:shadow-[0px_0px_6px_0px_grey] 
                flex flex-col sm:flex-row  mr-10 rounded-md"
              > 

                <div
                  className="overflow-hidden h-[140px] sm:h-[100%] w-full sm:w-[30%] p-1 rounded-xl  "
                  style={{ objectPosition: "80% 100%" }}
                >
                  <img
                    src={val.img}
                    alt=""
                    className='w-[100%] object-cover object-center h-[100%]'
                  />

                </div>
                
                <div className="  h-full w-full sm:w-[70%]  sm:absolute  top-0 right-0 text-black px-2 sm:px-0 flex flex-col items-start  ">
                               <div className='font-normal sm:font-medium text-slate-600 mt-3 overflow-hidden'>{val.content}</div>
                               <div className='text-[16px] text-red-500 font-light sm:font-normal'>
                                $399.00
                               </div>
                               <div className='flex w-[50%] sm:w-[55%] justify-between sm:text-[23px] text-slate-700    sm:mt-[4px] sm:ml-2 mb-2'>
                                <TiShoppingCart/>
                                <CiHeart/>
                                <RiExchangeLine/>
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

export default Viewed;
