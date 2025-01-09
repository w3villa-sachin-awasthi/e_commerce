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
                <div className="text-[30] sm:text-[37px] xl:text-[43px] font-semibold">Improved Gallery Module</div>
                <div className="h-[2px] w-[120px] bg-orange-600 my-2"></div>
                <div className="w-[80%] text-center text-[12px] text-slate-500 mb-6">
                     The Gallery module supports images, video and can also acts as banners that can point to say other page or open other Popup modules.
                     Create different modules with images, videos, banners or a combination of all. Add your modules on any page in any grid format.

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