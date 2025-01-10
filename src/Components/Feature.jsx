import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import image1 from '../assets/cimages/cimg1.webp';
import image2 from '../assets/cimages/cimg2.webp';
import image3 from '../assets/cimages/cimg3.webp';
import image4 from '../assets/cimages/cimg4.webp';
import image5 from '../assets/cimages/cimg5.webp';

function Feature() {
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
        infinite: true, // Disable infinite scrolling for better control
        speed: 500,
        slidesToShow: 4,
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
                breakpoint: 950, // For tablets
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
            {
                breakpoint: 620, // For small devices
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            }
        ],
    };

    return (
        <div className="flex flex-col  sm:items-center max-w-[1600px] mx-auto my-10 px-3 md:px-5 lg:px-7 2xl:px-10 ">
            
           
            <div className="text-[30] sm:text-[47px] xl:text-[43px] font-semibold">Why buy from us?</div>
            <div className="h-[2px] w-[120px] bg-orange-600 my-2"></div>
            <div className="w-[90%] sm:w-[70%] text-start sm:text-center text-slate-500 mb-6">
                Journal has been the best selling and most loved Opencart theme since its first launch in 2013. Tried and tested by over 20K people,
                Journal is the best Opencart theme framework on the market today. <span className="text-blue-800 underline">Learn more</span>
            </div>

          
            <div className="flex h-[40px] bg-slate-200 mb-6  ">
                <div className="h-full min-w-[180px] sm:w-auto bg-blue-700 text-white px-4 flex justify-center items-center font-semibold text-[11px] md:text-[15px]">
                    TOP CATEGORIES
                </div>
                <div className="h-full w-1/2 flex justify-center items-center px-3 border-[0.5px] border-slate-300 text-[11px] md:text-[15px]">
                    ELECTRONICS
                </div>
                <div className="h-full hidden sm:flex justify-center items-center px-3 border-[0.5px] border-slate-300 text-[11px] md:text-[15px]">
                    BEAUTY
                </div>
                <div className="h-full hidden sm:flex justify-center items-center px-3 border-[0.5px] border-slate-300 text-[11px] md:text-[15px] ">
                    FASHION
                </div>
            </div>

           
            <div className="w-[100%] text-center ">
  <Slider {...settings}>
    {data.map((val, index) => (
      <div
        key={index}
        className="bg-cover bg-center h-[400px] sm:h-[250px] w-[100%] sm:max-w-[90%]  min-w-[250px] sm:min-w-[48%]  flex items-center rounded-xl overflow-hidden justify-center text-white text-xl font-bold  relative  my-6 " 
      >
        <div
         className="overflow-hidden h-[100%] w-full rounded-xl  mx-auto "
         style={{ objectPosition: "80% 100%" }}
        >
            <img
          src={val.img}
          alt=""
           className='w-[100%] object-cover h-[100%]'
        />

        </div>
        
        
        <div className="w-[100%] absolute bottom-4 text-center">
          <span className="bg-slate-300 text-black bg-opacity-80 px-4 py-2 rounded">{val.content}</span>
        </div>
      </div>
    ))}
  </Slider>
</div>

        </div>
    );
}

export default Feature;
