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
            description: "Discover daily insights and thought-provoking articles crafted to inspire, inform, and entertain. Dive into a world of creativity and knowledge, where every blog post offers unique perspectives and valuable takeaways. Perfect for those who love exploring ideas and expanding their understanding of the world around them."
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
        infinite: false, // Disable infinite scrolling for better control
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1, // Scroll one slide at a time for better user experience
        responsive: [
            {
                breakpoint: 1220, // For tablets
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
        <div className="flex flex-col items-center max-w-[1600px] mx-auto my-14">

            <div className="text-[30] sm:text-[47px] xl:text-[43px] font-semibold">From our Blog</div>
            <div className="h-[2px] w-[120px] bg-orange-600 my-2"></div>
            <div className="w-[70%] text-center text-slate-500 mb-6">
                Journal comes with its own simple yet powerful blog. With the new advnced typography styles your post page design will be unmatched

            </div>


            <div className="flex h-[40px] bg-slate-200 mb-6">
                <div className="h-full uppercase bg-blue-700 text-white px-4 flex justify-center items-center font-semibold text-[11px] md:text-[15px]">
                    Latest post
                </div>
                <div className="h-full uppercase flex justify-center items-center px-3 border-[0.5px] border-slate-300 text-[11px] md:text-[15px]">
                    Most read
                </div>

            </div>


            <div className="w-[90%]  text-center mt-9">
                <Slider {...settings}>
                    {data.map((val, index) => (
                        <div
                            key={index}
                            className="bg-cover bg-center  max-w-[320px] min-w-[320px] flex    text-xl font-bold mx-4 relative mx-6 shadow-lg shadow-slate-400 pb-10"

                        >
                            <div className='relative h-[250px] '>
                                <img src={val.img} alt="" className='overflow-hidden h-[100%] rounded-t-xl' />
                                <div className='text-white bg-blue-900 absolute  leading-4 px-4 py-2 rounded-md text-[px] top-2 left-2'>
                                    <div>02</div>
                                    <div className='text-[12px]'>Aug</div>
                                </div>
                                <div className='flex justify-center items-center bg-slate-200 py-2 font-light text-[15px] px-1 absolute bottom-0 w-full opacity-60 '>
                                    <FaUserAlt />
                                    <div className='mx-3'>
                                        admin
                                    </div>
                                      <AiFillMessage/>
                                    <div className='mx-3'>
                                        38
                                    </div>
                                    <FaEye/>
                                    <div className='mx-3'>
                                        19340
                                    </div>
                                </div>
                            </div>



                            <div className='w-full flex justify-center font-semibold text-slate-800 my-3 text-[24px] px-2'>{val.content}</div>
                            <div className='font-normal text-slate-600 w-full leading-[20px]  text-[16px]  px-2 text-center'>{val.description}  </div>


                        </div>
                    ))}
                </Slider>
            </div>

        </div>
    );
}

export default Blog;
