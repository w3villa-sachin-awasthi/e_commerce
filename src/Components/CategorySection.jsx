import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../assets/productImages/headphone.jpeg'
import image2 from '../assets/productImages/heels.jpeg';
import image3 from '../assets/productImages/tv.jpeg';
import image4 from '../assets/productImages/camera.jpeg';
import image5 from '../assets/productImages/phone.jpeg';
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { RiExchangeLine } from "react-icons/ri";
import { CiDollar } from "react-icons/ci";
import { FaRegQuestionCircle } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

function CategorySection() {


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
        <div className="flex flex-col md:items-center max-w-[1600px] mx-auto my-10 px-3 md:px-5 lg:px-7 2xl:px-10">
            <div className="text-[30] sm:text-[47px] xl:text-[43px] font-semibold">Featured Products</div>
            <div className="h-[2px] w-[60px] md:w-[120px] bg-orange-600 my-2"></div>
            <div className="w-[70%] md:text-center text-slate-500 mb-6">
                Display any products as tabs or accordions with optional grid or carousal mode. Custom products per row per modules and per breakpoint.
                Each module can display products in either grid or list with different styles per module. <span className="text-blue-800 underline">Learn more</span>
            </div>


            <div className="flex h-[40px]   flex-wrap  bg-slate-200 mb-[50px] ">
                <div className="h-full w-[50%] sm:w-[33%] md:w-auto bg-blue-700 text-white px-4 flex justify-center items-center font-semibold text-[11px] md:text-[15px]">
                    FEATURES
                </div>
                <div className="h-full w-[50%] sm:w-[33%] md:w-auto flex justify-center items-center px-3 border-[0.5px] border-slate-300 text-[11px] md:text-[15px]">
                    LATEST
                </div>
                <div className="h-full w-[50%] sm:w-[33%] md:w-auto flex justify-center items-center px-3 border-[0.5px] border-slate-300 text-[11px] md:text-[15px]">
                    BESTSELLERS
                </div>
                <div className="h-full w-[50%] sm:w-[33%] md:w-auto flex justify-center items-center px-3 border-[0.5px] border-slate-300 text-[11px] md:text-[15px] ">
                    SPECIALS
                </div>
            </div>



            <div className="w-[100%]   text-center  ">
                <Slider {...settings}>
                    <div

className="bg-cover bg-center  w-[100%] sm:max-w-[90%]  min-w-[250px] sm:min-w-[48%]  flex items-center rounded-xl overflow-hidden justify-center text-black text-xl font-bold  relative  my-6 " 

                    >
                        <div className="absolute top-[34px] left-[-50px] text-[14px] bg-blue-700 text-white text-center uppercase w-[200px] " style={{ transform: "rotate(-45deg)" }} >
                            CUStom labels
                        </div>
                        <div className='absolute right-2  text-[10px] leading-3 top-2 '>
                            <div className='w-[40px] bg-red-600 text-white px-2 py-1 flex justify-center mt-1 rounded-sm'>
                                -70%
                            </div>
                            <div className='w-[40px]  text-black px-2 py-1  bg-yellow-500 flex justify-center mt-1 rounded-sm'>
                                Hot
                            </div>
                        </div>

                      <div lassName='overflow-hidden h-[100%] sm:h-[250px] '>
                      <img src={image1} alt="" className='overflow-hidden h-[100%] w-[100%] h-full object-cover' />
                      </div> 
                        <div className='flex justify-between bg-slate-200 py-2 font-light text-[15px] px-1'>
                            <div>Erickson</div>
                            <div>Model 519</div>
                        </div>
                        <div className='w-full flex justify-start font-normal mt-2 px-2'>headphone</div>
                        <div className='font-light w-full text-start text-[14px] px-2 mt-[-7px]'>$999.00 <span className='text-[12px]  '>$3,299.00</span> </div>
                        <div className='flex justify-between mt-[8px] px-2'>
                            <div className='flex font-normal text-[15px]'>
                                <div className='text-[17px] w-[26px] border-[1px] border-slate-400 text-slate-700'>1</div>
                                <div className='bg-slate-300 font-light '>
                                    <div className='hover:bg-slate-200'><FaAngleUp /></div>
                                    <div className='hover:bg-slate-200'> <FaAngleDown /> </div>
                                </div>
                                <button className='bg-blue-800 px-2 rounded-sm text-white font-light text-[13px]' >ADD TO CART</button>
                            </div>
                            <div className='flex items-center'>
                                <div className='mr-2'> <FaRegHeart /> </div>
                                <div className='mr-2 '> <RiExchangeLine /> </div>
                            </div>
                        </div>
                        <div className='flex bg-slate-300 font-normal justify-between text-[16px] px-2 py-1 mt-6'>
                            <div className='flex items-center
                                     '>
                                <div className='text-green-800 text-[1.2em] mr-1'> <CiDollar /> </div>
                                Buy Now
                            </div>
                            <div className='flex items-center '>
                                <div className='text-red-800 text-[1.2em] mr-1'><FaRegQuestionCircle /></div> Question
                            </div>
                        </div>
                    </div>
                    <div

className="bg-cover bg-center  w-[100%] sm:max-w-[90%]  min-w-[250px] sm:min-w-[48%]  flex items-center rounded-xl overflow-hidden justify-center text-black text-xl font-bold  relative  my-6 " 

                    >
                        <div className="absolute top-[34px] left-[-50px] text-[14px] bg-red-600 text-white text-center uppercase w-[200px] " style={{ transform: "rotate(-45deg)" }} >
                            2-3 days
                        </div>
                        <div className='absolute right-2  text-[9px] leading-3 top-2 '>
                            <div className='w-[60px] bg-orange-600 text-white px-2 py-1 flex justify-center mt-1 rounded-sm'>
                                Top Brand
                            </div>
                           
                        </div>
                        <div lassName='overflow-hidden h-[100%] sm:h-[250px] '>
                      <img src={image2} alt="" className='overflow-hidden h-[100%] w-[100%] h-full object-cover' />
                      </div>                         <div className='flex justify-between bg-slate-200 py-2 font-light text-[15px] px-1'>
                            <div>Erickson</div>
                            <div>Model 519</div>
                        </div>
                        <div className='w-full flex justify-start font-normal mt-2 px-2'>headphone</div>
                        <div className='font-light w-full text-start text-[14px] px-2 mt-[-7px]'>$999.00 <span className='text-[12px]  '>$3,299.00</span> </div>
                        <div className='flex justify-between mt-[8px] px-2'>
                            <div className='flex font-normal text-[15px]'>
                                <div className='text-[17px] w-[26px] border-[1px] border-slate-400 text-slate-700'>1</div>
                                <div className='bg-slate-300 font-light '>
                                    <div className='hover:bg-slate-200'><FaAngleUp /></div>
                                    <div className='hover:bg-slate-200'> <FaAngleDown /> </div>
                                </div>
                                <button className='bg-blue-800 px-2 rounded-sm text-white font-light text-[13px]' >ADD TO CART</button>
                            </div>
                            <div className='flex items-center'>
                                <div className='mr-2'> <FaRegHeart /> </div>
                                <div className='mr-2 '> <RiExchangeLine /> </div>
                            </div>
                        </div>
                        <div className='flex bg-slate-300 font-normal justify-between text-[16px] px-2 py-1 mt-6'>
                            <div className='flex items-center
                                     '>
                                <div className='text-green-800 text-[1.2em] mr-1'> <CiDollar /> </div>
                                Buy Now
                            </div>
                            <div className='flex items-center '>
                                <div className='text-red-800 text-[1.2em] mr-1'><FaRegQuestionCircle /></div> Question
                            </div>
                        </div>
                    </div>
                    <div

className="bg-cover bg-center  w-[100%] sm:max-w-[90%]  min-w-[250px] sm:min-w-[48%]  flex items-center rounded-xl overflow-hidden justify-center text-black text-xl font-bold  relative  my-6 " 

                    >
                         <div className="absolute top-[10px] left-[-70px] text-[14px] h-[25px] flex justify-center bg-green-600 text-white text-center uppercase w-[200px] " style={{ transform: "rotate(-45deg)" }} >
                            Free
                        </div>
                        <div className="absolute top-[34px] left-[-50px] text-[14px] bg-red-600 text-white text-center uppercase w-[200px] " style={{ transform: "rotate(-45deg)" }} >
                            Pre-order
                        </div>
                        <div lassName='overflow-hidden h-[100%] sm:h-[250px] '>
                      <img src={image3} alt="" className='overflow-hidden h-[100%] w-[100%] h-full object-cover' />
                      </div>                         <div className='flex justify-between bg-slate-200 py-2 font-light text-[15px] px-1'>
                            <div>Erickson</div>
                            <div>Model 519</div>
                        </div>
                        <div className='w-full flex justify-start font-normal mt-2 px-2'>Women's Maria Pump</div>
                        <div className='font-light w-full text-start text-[14px] px-2 mt-[-7px]'>$799.00 <span className='text-[12px]  '>$3,299.00</span> </div>
                        <div className='flex justify-between mt-[8px] px-2'>
                            <div className='flex font-normal text-[15px]'>
                                <div className='text-[17px] w-[26px] border-[1px] border-slate-400 text-slate-700'>1</div>
                                <div className='bg-slate-300 font-light '>
                                    <div className='hover:bg-slate-200'><FaAngleUp /></div>
                                    <div className='hover:bg-slate-200'> <FaAngleDown /> </div>
                                </div>
                                <button className='bg-blue-800 px-2 rounded-sm text-white font-light text-[13px]' >ADD TO CART</button>
                            </div>
                            <div className='flex items-center'>
                                <div className='mr-2'> <FaRegHeart /> </div>
                                <div className='mr-2 '> <RiExchangeLine /> </div>
                            </div>
                        </div>
                        <div className='flex bg-slate-300 font-normal justify-between text-[16px] px-2 py-1 mt-6'>
                            <div className='flex items-center
                                     '>
                                <div className='text-green-800 text-[1.2em] mr-1'> <CiDollar /> </div>
                                Buy Now
                            </div>
                            <div className='flex items-center '>
                                <div className='text-red-800 text-[1.2em] mr-1'><FaRegQuestionCircle /></div> Question
                            </div>
                        </div>
                    </div>
                    {/* <div

className="bg-cover bg-center  w-[100%] sm:max-w-[90%]  min-w-[250px] sm:min-w-[48%]  flex items-center rounded-xl overflow-hidden justify-center text-black text-xl font-bold  relative  my-6 " 

                    > 
                     <div className="absolute top-[34px] left-[-50px] text-[14px] bg-red-600 text-white text-center uppercase w-[200px] " style={{ transform: "rotate(-45deg)" }} >
                            Pre-order
                        </div>
                        <div className='absolute right-2  text-[10px] leading-3 top-2 '>
                           
                            <div className='w-[40px]  text-black px-2 py-1  bg-yellow-500 flex justify-center mt-1 rounded-sm'>
                                Hot
                            </div>
                        </div>
                        <img src={image3} alt="" className='overflow-hidden h-[100%] h-[250px] ' />
                        <div className='flex justify-between bg-slate-200 py-2 font-light text-[15px] px-1'>
                            <div>Erickson</div>
                            <div>Model 519</div>
                        </div>
                        <div className='w-full flex justify-start font-normal mt-2 px-2'>Toshiba 5009 Smart TV</div>
                        <div className='font-light w-full text-start text-[14px] px-2 mt-[-7px]'>$999.00 <span className='text-[12px]  '>$3,299.00</span> </div>
                        <div className='flex justify-between mt-[8px] px-2'>
                            <div className='flex font-normal text-[15px]'>
                                <div className='text-[17px] w-[26px] border-[1px] border-slate-400 text-slate-700'>1</div>
                                <div className='bg-slate-300 font-light '>
                                    <div className='hover:bg-slate-200'><FaAngleUp /></div>
                                    <div className='hover:bg-slate-200'> <FaAngleDown /> </div>
                                </div>
                                <button className='bg-blue-800 px-2 rounded-sm text-white font-light text-[13px]' >ADD TO CART</button>
                            </div>
                            <div className='flex items-center'>
                                <div className='mr-2'> <FaRegHeart /> </div>
                                <div className='mr-2 '> <RiExchangeLine /> </div>
                            </div>
                        </div>
                        <div className='flex bg-slate-300 font-normal justify-between text-[16px] px-2 py-1 mt-6'>
                            <div className='flex items-center
                                     '>
                                <div className='text-green-800 text-[1.2em] mr-1'> <CiDollar /> </div>
                                Buy Now
                            </div>
                            <div className='flex items-center '>
                                <div className='text-red-800 text-[1.2em] mr-1'><FaRegQuestionCircle /></div> Question
                            </div>
                        </div>
                    </div> */}
                    <div

className="bg-cover bg-center  w-[100%] sm:max-w-[90%]  min-w-[250px] sm:min-w-[48%]  flex items-center rounded-xl overflow-hidden justify-center text-black text-xl font-bold  relative  my-6 " 

                    >
                         <div className="absolute top-[34px] left-[-50px] text-[14px] bg-red-600 text-white text-center uppercase w-[200px] " style={{ transform: "rotate(-45deg)" }} >
                            Pre-order
                        </div>
                        <div className='absolute right-2  text-[10px] leading-3 top-2 '>
                           
                            <div className='w-[40px]  text-black px-2 py-1  bg-yellow-500 flex justify-center mt-1 rounded-sm'>
                                Hot
                            </div>
                        </div>
                        <div lassName='overflow-hidden h-[100%] sm:h-[250px] '>
                      <img src={image4} alt="" className='overflow-hidden h-[100%] w-[100%] h-full object-cover' />
                      </div>                         <div className='flex justify-between bg-slate-200 py-2 font-light text-[15px] px-1'>
                            <div>Erickson</div>
                            <div>Model 519</div>
                        </div>
                        <div className='w-full flex justify-start font-normal mt-2 px-2'>Leica Digital Camera</div>
                        <div className='font-light w-full text-start text-[14px] px-2 mt-[-7px]'>$999.00 <span className='text-[12px]  '>$3,299.00</span> </div>
                        <div className='flex justify-between mt-[8px] px-2'>
                            <div className='flex font-normal text-[15px]'>
                                <div className='text-[17px] w-[26px] border-[1px] border-slate-400 text-slate-700'>1</div>
                                <div className='bg-slate-300 font-light '>
                                    <div className='hover:bg-slate-200'><FaAngleUp /></div>
                                    <div className='hover:bg-slate-200'> <FaAngleDown /> </div>
                                </div>
                                <button className='bg-blue-800 px-2 rounded-sm text-white font-light text-[13px]' >ADD TO CART</button>
                            </div>
                            <div className='flex items-center'>
                                <div className='mr-2'> <FaRegHeart /> </div>
                                <div className='mr-2 '> <RiExchangeLine /> </div>
                            </div>
                        </div>
                        <div className='flex bg-slate-300 font-normal justify-between text-[16px] px-2 py-1 mt-6'>
                            <div className='flex items-center
                                     '>
                                <div className='text-green-800 text-[1.2em] mr-1'> <CiDollar /> </div>
                                Buy Now
                            </div>
                            <div className='flex items-center '>
                                <div className='text-red-800 text-[1.2em] mr-1'><FaRegQuestionCircle /></div> Question
                            </div>
                        </div>
                    </div>
                    <div

className="bg-cover bg-center  w-[100%] sm:max-w-[90%]  min-w-[250px] sm:min-w-[48%]  flex items-center rounded-xl overflow-hidden justify-center text-black text-xl font-bold  relative  my-6 " 

                    >
                  <div className="absolute top-[34px] left-[-50px] text-[14px] bg-red-600 text-white text-center uppercase w-[200px] " style={{ transform: "rotate(-45deg)" }} >
                            2-3 days
                        </div>
                        <div className='absolute right-2  text-[10px] leading-3 top-2 '>
                           
                            <div className='w-[40px]  text-black px-2 py-1  bg-yellow-500 flex justify-center mt-1 rounded-sm'>
                                -50%
                            </div>
                        </div>
                        <div lassName='overflow-hidden h-[100%] sm:h-[250px] '>
                      <img src={image5} alt="" className='overflow-hidden h-[100%] w-[100%] h-full object-cover' />
                      </div>                         <div className='flex justify-between bg-slate-200 py-2 font-light text-[15px] px-1'>
                            <div>Erickson</div>
                            <div>Model 519</div>
                        </div>
                        <div className='w-full flex justify-start font-normal mt-2 px-2'>home decor</div>
                        <div className='font-light w-full text-start text-[14px] px-2 mt-[-7px]'>$999.00 <span className='text-[12px]  '>$3,299.00</span> </div>
                        <div className='flex justify-between mt-[8px] px-2'>
                            <div className='flex font-normal text-[15px]'>
                                <div className='text-[17px] w-[26px] border-[1px] border-slate-400 text-slate-700'>1</div>
                                <div className='bg-slate-300 font-light '>
                                    <div className='hover:bg-slate-200'><FaAngleUp /></div>
                                    <div className='hover:bg-slate-200'> <FaAngleDown /> </div>
                                </div>
                                <button className='bg-blue-800 px-2 rounded-sm text-white font-light text-[13px]' >ADD TO CART</button>
                            </div>
                            <div className='flex items-center'>
                                <div className='mr-2'> <FaRegHeart /> </div>
                                <div className='mr-2 '> <RiExchangeLine /> </div>
                            </div>
                        </div>
                        <div className='flex bg-slate-300 font-normal justify-between text-[16px] px-2 py-1 mt-6'>
                            <div className='flex items-center
                                     '>
                                <div className='text-green-800 text-[1.2em] mr-1'> <CiDollar /> </div>
                                Buy Now
                            </div>
                            <div className='flex items-center '>
                                <div className='text-red-800 text-[1.2em] mr-1'><FaRegQuestionCircle /></div> Question
                            </div>
                        </div>
                    </div>

                </Slider>
            </div>
            <div className='w-full flex justify-center my-10'>
                <button className='uppercase bg-blue-800  text-white text-[0.8em] px-3 py-2 flex items-center rounded-sm'>
                    see all products <span className='ml-2'><BsArrowRight /></span>
                </button>
            </div>
        </div>
    );
}

export default CategorySection;
