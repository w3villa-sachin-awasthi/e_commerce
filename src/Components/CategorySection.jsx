import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import image1 from '../assets/cimages/cimg1.webp';
import image2 from '../assets/cimages/cimg2.webp';
import image3 from '../assets/cimages/cimg3.webp';
import image4 from '../assets/cimages/cimg4.webp';
import image5 from '../assets/cimages/cimg5.webp';

function CategorySection() {
    let data = [
        { img: image1, content: "fashion" },
        { img: image2, content: "bags" },
        { img: image3, content: "health & beauty" },
        { img: image4, content: "footwear" },
        { img: image5, content: "home decor" },
    ];

    const settings = {
        dots: true,
        infinite: false, // Disable infinite scrolling for better control
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
        <div className="flex flex-col items-center max-w-[1600px] mx-auto my-14">
            {/* Header Section */}
            <div className="text-[30] sm:text-[47px] xl:text-[43px] font-semibold">Featured Products</div>
            <div className="h-[2px] w-[120px] bg-orange-600 my-2"></div>
            <div className="w-[70%] text-center text-slate-500 mb-6">
               Display any products as tabs or accordions with optional grid or carousal mode. Custom products per row per modules and per breakpoint. 
               Each module can display products in either grid or list with different styles per module.
                
            </div>

            {/* Categories Section */}
            <div className="flex h-[40px] bg-slate-200 mb-6">
                <div className="h-full bg-blue-700 text-white px-4 flex justify-center items-center font-semibold">
                    FEATURES
                </div>
                <div className="h-full flex justify-center items-center px-3 border-[0.5px] border-slate-300">
                   LATEST
                </div>
                <div className="h-full flex justify-center items-center px-3 border-[0.5px] border-slate-300">
                    BESTSELLERS
                </div>
                <div className="h-full hidden sm:flex justify-center items-center px-3 border-[0.5px] border-slate-300 ">
                    SPECIALS
                </div>
            </div>

            {/* Slider Section */}
            <div className="w-[90%]  text-center"> {/* Add padding for better alignment */}
                <Slider {...settings}>
                    {data.map((val, index) => (
                        <div
                            key={index}
                            className="bg-cover bg-center h-[250px] max-w-[250px] min-w-[250px] flex    text-xl font-bold mx-4 relative mx-6"
                            
                        >
                            <img src={val.img} alt="" className='overflow-hidden h-[100%] ' />
                            <div className='flex justify-between bg-slate-200 h-[70px] font-light'>
                                 <div>Erickson</div>
                                 <div>Model 519</div>
                            </div>
                            <div>Headphone</div>
                            <div>$900.00 <span>$3,299.00</span> </div>
                           
                        </div>
                    ))}
                </Slider>
            </div>
            
        </div>
    );
}

export default CategorySection;
