import React from 'react'

function Footer() {
    return (
        <footer className="footer bg-slate-50 text-black px-5 max-w-[1600px] mx-auto ">
            <nav className='text-blue-700 text-[13px]'>
                <h6 className="text-[15px] text-black ">About us</h6>
                <div className='h-[1.2px] bg-orange-600 w-[50px] '></div>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Delivery</a>
                <a className="link link-hover">Privacy Policy</a>
                <a className="link link-hover">Terms & Conditions</a>
                <a className="link link-hover">Custom Links</a>
            </nav>
            <nav className='text-blue-700 text-[13px]'>
                <h6 className="text-[15px] text-black ">Customer Service</h6>
                <div className='h-[1.2px] bg-orange-600 w-[50px] '></div>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Returns</a>
                <a className="link link-hover">Site Map</a>
                <a className="link link-hover">Brands</a>
                <a className="link link-hover">Unlimited Links</a>
            </nav>
            <nav className='text-blue-600 text-[13px]'>
                <h6 className="text-[15px] text-black ">My Account</h6>
                <div className='h-[1.2px] bg-orange-600 w-[50px] '></div>
                <a className="link link-hover">My Account</a>
                <a className="link link-hover">Order History</a>
                <a className="link link-hover">Affiliates</a>
                <a className="link link-hover">Newsletter</a>
                <a className="link link-hover">Gift Certificates</a>
            </nav>
            <form>
                <h6 className="text-[15px] text-black ">Newsletter</h6>
                <div className='h-[1.2px] bg-orange-600 w-[50px] '></div>
                <fieldset className="form-control w-80">

                    <label className="label">
                        <span className="text-slate-700 text-[13px] w-[70%]">Stay up to date with news and promotions by siging up for our newsletter</span>
                    </label>
                    <div className="join h-[30px]">
                        <input
                            type="text"
                            placeholder="Your email"
                            className="input input-bordered join-item h-full bg-white shadow-sm shadow-slate-300 " />
                        <button className="bg-blue-700 text-white px-2  border-0 max-h-full rounded-r-sm text-[13px]">Send</button>
                       
                    </div>
                    <div className="join h-[30px] mt-4">
                    <input type="checkbox" defaultChecked className="checkbox border-2 border-slate-400 w-4 h-4 rounded-sm" />
                        <div className='ml-2 text-slate-700'>
                            I have read and agree to the <span className='text-blue-800 underline'>Privacy Policy</span>
                        </div>
                       
                    </div>
                    
                </fieldset>
            </form>
        </footer>
    )
}

export default Footer