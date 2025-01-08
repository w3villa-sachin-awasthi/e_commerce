import React from 'react'

function Footer() {
    return (
        <footer className="footer bg-slate-50 text-black p-10 max-w-[1600px] mx-auto ">
            <nav>
                <h6 className="footer-title">About us</h6>
                <div className='h-[1.2px] bg-orange-600 w-[50px] '></div>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Delivery</a>
                <a className="link link-hover">Privacy Policy</a>
                <a className="link link-hover">Terms & Conditions</a>
                <a className="link link-hover">Custom Links</a>
            </nav>
            <nav>
                <h6 className="footer-title">Customer Service</h6>
                <div className='h-[1.2px] bg-orange-600 w-[50px] '></div>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Returns</a>
                <a className="link link-hover">Site Map</a>
                <a className="link link-hover">Brands</a>
                <a className="link link-hover">Unlimited Links</a>
            </nav>
            <nav>
                <h6 className="footer-title">My Account</h6>
                <div className='h-[1.2px] bg-orange-600 w-[50px] '></div>
                <a className="link link-hover">My Account</a>
                <a className="link link-hover">Order History</a>
                <a className="link link-hover">Affiliates</a>
                <a className="link link-hover">Newsletter</a>
                <a className="link link-hover">Gift Certificates</a>
            </nav>
            <form>
                <h6 className="footer-title">Newsletter</h6>
                <div className='h-[1.2px] bg-orange-600 w-[50px] '></div>
                <fieldset className="form-control w-80">

                    <label className="label">
                        <span className="label-text">Stay up to date with news and promotions by siging up for our newsletter</span>
                    </label>
                    <div className="join">
                        <input
                            type="text"
                            placeholder="Your email"
                            className="input input-bordered join-item bg-white" />
                        <button className="btn bg-blue-800 border-0 join-item">Send</button>
                       
                    </div>
                     <div className="join">
                        <input
                            type="checkbox"
                          
                            className="input input-bordered join-item bg-white" />
                       <p></p>
                       
                    </div>
                </fieldset>
            </form>
        </footer>
    )
}

export default Footer