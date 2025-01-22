import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImQuotesLeft } from "react-icons/im";
import { personData as data } from '../Config/data';
function People() {
   



    const settings = {
        dots: true,
        arrows: false,
        infinite: false, // Disable infinite scrolling for better control
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1, // Scroll one slide at a time for better user experience
        responsive: [
            {
                breakpoint: 1100, // For tablets
                settings: {
                    slidesToShow: 2,
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
        <div className="flex flex-col sm:items-center max-w-[1600px] mx-auto my-5 py-10 px-3 md:px-5 lg:px-7 2xl:px-10">
         
            <div className="text-[25px] sm:text-[37px] xl:text-[43px] font-semibold " >What are people saying about us</div>
            <div className="h-[2px] w-[60px] sm:w-[120px] bg-orange-600 my-2"></div>






            <div className="w-full text-center mt-4 ">
                <Slider {...settings}>
                    {data.map((val, index) => (
                        <div
                            key={index}
                            className="bg-cover bg-center max-w-[90%] md:max-w-[330px] lg:max-w-[380]  xl:max-w-[420px] min-w-[220px] flex text-xl font-bold  sm:mx-4 relative shadow-sm shadow-slate-200 pb-5 mx-2 my-2 pt-5  hover:shadow-[0px_0px_2px_0px_grey]rounded-md "
                        >

                            <div className='w-full flex justify-center text-orange-600 text-[60px]'>
                                <ImQuotesLeft />
                            </div>

                            <div className="font-normal text-slate-600 w-full leading-[18px] sm:leading-[20px] text-[14px] sm:text-[16px] px-2 text-center">
                                {val.saying}
                            </div>
                            <div className="w-full flex justify-center font-semibold text-slate-600 my-3 text-[14px] sm:text-[18px] px-2 mt-4">
                                - {val.name}
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

        </div>
    );
}

export default People;
