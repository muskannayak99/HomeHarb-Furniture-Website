import React from 'react'
import './Contact_Us.css'
import last_sofa from '../Assests/last_sofa.jpg'


const Contact_Us = () => {
    return (
        <div>
            <div className='container p-0'>
                <h1 className='About-Us text-white align-items-center justify-content-center d-flex pt-1'><a href='#'>Contact Us</a></h1>
              
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

        </div>
    )
}

export default Contact_Us