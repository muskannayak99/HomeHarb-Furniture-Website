import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
    return (
        <div>
            <div className='bg-image2'>
                <div className='container w-100 p-0'>
                    <div className='row m-0 py-5'>
                        <div className='limited d-flex flex-column justify-content-center align-items-center'>
                            <h1>Newsletter Signup</h1>
                            <p className='text-light'>Join our newsletter for Exclusive Offers and Updates</p>
                            {/* <div class="container mt-5"> */}
                                <div className="row justify-content-center mt-4">
                                    {/* <div class="col-md-8"> */}
                                        <div className="mb-3 d-flex flex-row ">
                                            {/* <label for="email" className="form-label">Email address</label> */}
                                            <input type="email" className="form-control bg-transparent text-white rounded-5 border-2" id="email" placeholder="Write your Email here...." required />
                                            <span><button type="submit" className="text-light btn4 rounded-5 border-1">Subscribe Now</button></span>
                                        </div>

                                    {/* </div> */}
                                </div>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Newsletter