import React from 'react'
import img1 from '../assets/Gallery/img1.jpeg'
import img2 from '../assets/Gallery/img2.jpeg'
import img3 from '../assets/Gallery/img3.jpeg'
import img4 from '../assets/Gallery/img4.jpeg'
import img5 from '../assets/Gallery/img5.jpeg'
import img6 from '../assets/Gallery/img6.jpeg'
import img7 from '../assets/Gallery/img7.jpeg'
import img8 from '../assets/Gallery/img10.jpeg'
import img9 from '../assets/Gallery/img9.jpeg'

function Gallery() {
    let arr=[
        img1,img2,img3,img4,img5,img6,img7,img8,img9
    ]
    return (
        <div className='flex justify-center bg-gray-700   text-white '>
            <div className='max-w-[1600px] flex flex-col items-center py-10 '>
                <div className="text-[30] sm:text-[47px] xl:text-[43px] font-semibold">Featured Products</div>
                <div className="h-[2px] w-[120px] bg-orange-600 my-2"></div>
                <div className="w-[70%] text-center text-slate-500 mb-6">
                    Display any products as tabs or accordions with optional grid or carousal mode. Custom products per row per modules and per breakpoint.
                    Each module can display products in either grid or list with different styles per module.

                </div>
                <div className='flex flex-wrap justify-center'>
                 {

                  arr.map((val,ind)=><div key={ind}
                  className='w-[110px] md:w-[160px] m-2 rounded-lg overflow-hidden'
                  >
                   <img src={val} alt="" />
                  </div>)
                }

                </div>
            </div>

        </div>
    )
}

export default Gallery