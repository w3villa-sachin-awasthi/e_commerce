import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../assets/Blog/img1.jpeg'
import image2 from '../assets/Blog/img2.jpeg'
import image3 from '../assets/Blog/img3.jpeg'
import { FaEye } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
function Blog() {
    let data = [
        {
            img: image1,
            content: "Journal Blog is Here",
            description: "Discover daily insights and thought-provoking articles crafted to inspire, inform, and entertain. Dive into a world of creativity and knowledge, where every blog post offers unique perspectives and valuable takeaways. Perfect for those who love exploring ideas and expanding their understanding of the world"
        },
        {
            img: image2,
            content: "Best Leather Bags",
            description: "Explore our premium collection of stylish and durable leather bags. Perfect for work, travel, or casual outings, these bags combine functionality and fashion effortlessly. Experience unmatched craftsmanship and timeless designs that elevate your everyday style while providing ample storage for your essentials."
        },
        {
            img: image3,
            content: "Another Blog Post",
            description: "Engage with captivating stories and insightful articles designed to spark curiosity and provide inspiration. From lifestyle tips to personal growth strategies, this blog offers a diverse range of topics for readers seeking meaningful and enriching content. Perfect for anyone who enjoys thoughtful, well-crafted writing."
        },
    ];


    const settings = {
        dots: true,
        arrows: false,
        infinite: true, // Disable infinite scrolling for better control
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
        <div className="flex flex-col md:items-center max-w-[1600px] mx-auto my-10 px-3 md:px-5 lg:px-7 2xl:px-10">
                   <div className="text-[30] sm:text-[47px] xl:text-[43px] font-semibold">From our Blog</div>
            <div className="h-[2px] w-[60px] md:w-[120px] bg-orange-600 my-2"></div>
            <div className="w-[90%] leading-5 sm:leading-6 sm:w-[70%] md:text-center text-slate-500 mb-6">
            Journal comes with its own simple yet powerful blog. With the new advnced typography styles your post page design will be unmatched
            </div>

       

         


            <div className="w-full text-center  ">
                <Slider {...settings}>
                    {data.map((val, index) => (
                        <div
                            key={index}
                            className="bg-cover bg-center h-auto max-w-[100%] md:max-w-[330px] lg:max-w-[380px]  xl:max-w-[440px] min-w-[220px] flex flex-wrap text-xl font-bold  sm:mx-4 relative shadow-sm shadow-slate-200 pb-10   my-4 overflow-hidden "
                        >
                            <div className="relative w-full">
                                <img src={val.img} alt="" className="overflow-hidden w-full rounded-t-xl" />
                                <div className="text-white bg-blue-900 absolute leading-4 px-2 py-1 sm:px-4 sm:py-2 rounded-md text-[12px] sm:text-[14px] top-2 left-2">
                                    <div>02</div>
                                    <div className="text-[8px] sm:text-[10px]">Aug</div>
                                </div>
                                <div className="flex justify-center items-center bg-slate-200 py-1 sm:py-2 font-light text-[12px] sm:text-[15px] px-1 absolute bottom-0 w-full opacity-70">
                                    <FaUserAlt className="text-[10px] sm:text-[12px]" />
                                    <div className="mx-1 sm:mx-3 text-[10px] sm:text-[12px]">admin</div>
                                    <AiFillMessage className="text-[10px] sm:text-[12px]" />
                                    <div className="mx-1 sm:mx-3 text-[10px] sm:text-[12px]">38</div>
                                    <FaEye className="text-[10px] sm:text-[12px]" />
                                    <div className="mx-1 sm:mx-3 text-[10px] sm:text-[12px]">19340</div>
                                </div>
                            </div>

                            <div className="w-full flex justify-center font-semibold text-slate-800 my-3 text-[18px] sm:text-[24px] px-2">
                                {val.content}
                            </div>
                            <div className="font-normal text-slate-600 w-full leading-[18px] sm:leading-[20px] text-[14px] sm:text-[16px] px-2 text-center">
                                {val.description}
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

        </div>
    );
}

export default Blog;
