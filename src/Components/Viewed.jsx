import React from 'react'

function Viewed() {
    return (
        <div className='flex justify-center  bg-slate-800 py-10'>
            <div className='max-w-[1600px] w-[100%]'>
                <div className="text-[30] sm:text-[37px] xl:text-[43px] text-white font-semibold">Most viewed</div>
                <div className="h-[2px] w-[120px] bg-orange-600 my-2"></div>
                <div className="w-[70%] text-center text-slate-500 mb-6"> </div>
            </div>
        </div>
    )
}

export default Viewed