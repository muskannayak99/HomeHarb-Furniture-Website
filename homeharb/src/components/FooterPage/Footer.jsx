import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className='bg-white'>
                <div className='container p-0'>
                    <div className='row m-0 '>
                        <div className='col-lg-6 m-0 d-flex flex-column '>
                            <div className='foot pt-5 pb-3 d-flex flex-column '>
                                <i className="   bi-house-door h1 px-3 m-0"></i>
                                <h6 className=' m-0 p-0'>HOMEHARB</h6>
                                <p className='m-0 p-0 pt-1'>Remember to adapt the content to your<br />brand's unique style messaging.High-<br />quality visual,consistent branding,and a<br />user-friendly layout are essential for an <br />effective furniture.</p>
                            </div>
                        </div>
                        <div className='list5 col-lg-6 m-0 p-0  pt-5 d-flex flex-row justify-content-evenly'>
                            {/* <div className='d-flex flex-coulmn '> */}
                            <span>
                                <h6>Navigation Links</h6>
                                <li>Home</li>
                                <li>About Us</li>
                                <li>Collections</li>
                                <li>Blog</li>
                                <li>Contact us</li>
                            </span>

                            <span>
                                <h6>Our Collections</h6>
                                <li>Living Room</li>
                                <li>Bedroom</li>
                                <li>Office</li>
                                <li>Dining Room</li>
                            </span>

                            <span>
                                <h6>Servicess</h6>
                                <li>FAQs</li>
                                <li>WhyChooseUs</li>
                            </span>

                            <span>
                                <h6>Social Link</h6>
                                <li>Facebook</li>
                                <li>Instagram</li>
                                <li>Linkdin</li>
                                <li>Twitter</li>
                            </span>
                            {/* </div> */}
                        </div>
                        <p className='foot text-center'>2024 &copy; HomeHarb</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer