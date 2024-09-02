import React from 'react'
import './Choose_Us.css'
import sofa from '../Assests/golden_sofa.jpg'

const Choose_Us = () => {
  return (
    <div>
      <div className='container p-0'>
        <h1 className='Choose-Us text-white align-items-center justify-content-center d-flex pt-5'><a href='#'>Why Choose Us</a></h1>
        <div className='row pt-3 m-0 p-0'>
          <div className=' col-lg-6 mb-5 d-flex flex-column p-2 align-items-center'>
            <img src={sofa} className='w-100  rounded' alt='' />
          </div>
          <div className='about px-5 text-white m-0 col-lg-6 p-0 mb-5 d-flex flex-column '>
            <p className='m-0 p-0'>Why Choose HomeHarb</p>
            <h2>We Are Provide Our <br />Special benefits</h2>
            <div className='list row pt-2 p-0 m-0'>
              <div className='col-6 d-flex p-0 '>
                <span className='list1 d-flex flex-column border-end  p-0 m-0'>
                  <h5 className='d-flex'>Key Benefits</h5>
                  <p className='m-0 p-0  text-white'>-Quality Craftsminship</p>
                  <p className='m-0 p-0 text-white'>-Wide Selection</p>
                  <p className='m-0 p-0 text-white'>-Hassle-Free-Returns</p>
                  <p className='m-0 p-0 text-white'>-Customer Service</p>
                </span>
              </div>
              <div className='col-6 d-flex fw-bolder'>
                <span className=' list2 d-flex flex-column ps-lg-5 ps-md-0 p-0 m-0'>
                  <h2>17+ </h2>
                  <h3>Years</h3>
                  <p className='m-0 p-0'>Experiances</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div>
  )
}

export default Choose_Us