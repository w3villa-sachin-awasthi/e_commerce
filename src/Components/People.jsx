import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImQuotesLeft } from "react-icons/im";
function People() {
    const data = [
        {
            name: "John Doe",
            saying: "Our company thrives on innovation, collaboration, and dedication. We believe in empowering our team to create impactful solutions that drive success and foster growth. We’re proud to have a passionate team committed to excellence."
        },
        {
            name: "Jane Smith",
            saying: "At our company, we embrace challenges and transform them into opportunities. Every member of our team plays a pivotal role in achieving our goals. Together, we deliver quality results and build lasting relationships with our clients."
        },
        {
            name: "Mike Johnson",
            saying: "Our company is built on trust and integrity. We value creativity and hard work, constantly pushing boundaries to deliver exceptional results. Our people are the heart of our success, and we are committed to supporting their growth and development."
        },
        {
            name: "Emily White",
            saying: "In our company, innovation and teamwork go hand in hand. We’re driven by a shared vision to create the best solutions for our clients. The passion and dedication of our team make us stand out in the industry."
        }
    ];



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
        <div className="flex flex-col items-center max-w-[1600px] mx-auto my-14 py-10">

            <div className="text-[30] sm:text-[37px] xl:text-[43px] font-semibold text-center" >What are people saying about us</div>
            <div className="h-[2px] w-[120px] bg-orange-600 my-2"></div>






            <div className="w-full text-center mt-10 ">
                <Slider {...settings}>
                    {data.map((val, index) => (
                        <div
                            key={index}
                            className="bg-cover bg-center max-w-[90%] md:max-w-[330px] lg:max-w-[380]  xl:max-w-[420px] min-w-[220px] flex text-xl font-bold  sm:mx-4 relative shadow-sm shadow-slate-200 pb-10 mx-2 my-4 pt-10"
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
