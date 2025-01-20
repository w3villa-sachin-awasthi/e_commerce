import React from 'react'
    import { Link } from 'react-router-dom'
function NotFound() {
  return (
    <div className='flex w-screen h-screen justify-center items-center text-[40px] bg-slate-300 text-black flex-col  '>
        <div>Page Not Found</div>
     <Link className='text-[20px] bg-slate-200 px-3 py-1' to={"/home"}>Go to Home</Link>
    </div>
   
  )
}

export default NotFound