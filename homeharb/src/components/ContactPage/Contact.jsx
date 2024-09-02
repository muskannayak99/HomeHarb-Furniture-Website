import React from 'react'
import './Contact.css'
import stool from '../Assests/stool4.png'
import last_sofa from '../Assests/last_sofa.jpg'
import Navbar from '../Navbar/Navbar'
import Newsletter from '../NewaletterPage/Newsletter'
import Footer from '../FooterPage/Footer'
const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className='MN'>
                <div className='container p-0'>
                    <div className='row p-0 m-0 pt-3'>
                        <div className='col-5 hl pt-5 d-flex flex-column'>
                            <h3 className='fw-bold pt-5 p-0 m-0'>Contact Us</h3>
                            <p className='us m-0 p-0 fw-semibold'>Home to Contact Us</p>
                        </div>
                        <div className='col-7 d-flex flex-column justify-content-end'>
                            <img src={stool} alt='' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container p-0 '>
                <h1 className='About-Us text-white align-items-center justify-content-center d-flex pt-4'><a href='#'>Contact Us</a></h1>
                <div className='row m-0 p-0'>
                    <div className='contact text-white m-0 col-lg-6 p-0 pt-2 mb-5 d-flex flex-column '>
                        <p className='m-0 p-0'>Contact Details</p>
                        <h1>Feel Free To Contact <br />With Us.</h1>
                        <div className='con'>
                            <i className="bi bi-envelope-open h2 d-flex pt-4 gap-4">
                                <p className='h5 text-white  p-0 m-0'>homeharb@gmail.com</p></i>
                            <i className="bi bi-telephone h2 d-flex py-3 gap-4 ">
                                <p className='h5 text-white p-0 m-0'>019-00-00-998-00</p></i>
                            <i className="bi bi-geo-alt h2 d-flex gap-4">
                                <p className='h5 text-white p-0 m-0'>Location in your phone</p></i>
                        </div>
                        <div className='d-flex gap-4 pt-1'>
                            <i className=" bi-instagram h1  "></i>
                            <i className="bi bi-twitter h1"></i>
                            <i className="bi-facebook h1 "></i>
                            <i className="bi-linkedin h1  "></i>
                        </div>
                    </div>
                    <div className='contact_Us col-lg-6 mb-5 d-flex flex-column p-2 align-items-center'>
                        <img src={last_sofa} className='w-100 rounded' alt='' />
                    </div>
                </div >
            </div>
            <div className='container p-0'>
                <h1 className='testimonials text-light d-flex pt-5 justify-content-center'><a href='#'>Contact Form</a></h1>
                <div className=' d-flex justify-content-center '>
                    <form id="contact_form" name="contact_form" >
                        <div className="mb-5  form-group">

                            <input type="text" className="form-control bg-transparent text-white border " id="first_name" name="first_name"
                                placeholder="Enter Name" />

                        </div>

                        <div className="col form-group mb-5">
                            <input type="email" className="form-control  bg-transparent text-white " id="email_addr" name="email"
                                placeholder="Email Address " />
                        </div>


                        <div className=" form-group mb-5">
                            <input type="tel" className="form-control bg-transparent text-white" id="phone_input" name="Phone"
                                placeholder="Phone Number" />
                        </div>

                        <div className="mb-5 form-group">
                            <textarea className="form-control text-white  bg-transparent" id="message" name="message" rows="5" placeholder="Message"></textarea>
                        </div>

                        <button type="submit" className="btn7  rounded-1 border-0 ">Send Message</button>
                    </form>
                </div>

            </div>
            <div className='container p-0'>
                <div className='row pt-5'>
                    <div className='col-5 text-white ms-5'>
                        <h1>Customer Support Hours</h1>
                        <p className='border-bottom border-2 pt-2'></p>

                        <h3 className='time'>Support Availability:</h3>
                        <p>Our customer support team is available to assist you:</p>
                        <p>Monday to Friday: <span className='time'>2PM-8PM</span></p>
                        <p>Suterday to Sunday: <span className='time'>4PM-10PM</span></p>
                    </div>
                    <div className='col-6 text-white border-start ms-5'>

                        <h1 className='ms-5'>Visit Our Showroom</h1>
                        <p className='border-bottom border-2 pt-2 ms-5'></p>
                        <h3 className='time ms-5'>Showroom Information:</h3>
                        <p className='ms-5'>If you prefer an in-person experience, visit our showroom:<br />
                            <span className='time'>HomeHarb<br />The adderss of our showroom<br />City,State,Zip Code</span></p>

                    </div>
                </div>
            </div>
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Contact