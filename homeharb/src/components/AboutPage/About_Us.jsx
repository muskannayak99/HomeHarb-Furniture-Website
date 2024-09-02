import React from 'react'
import { Link } from 'react-router-dom'
import './About_Us.css'
import sofa from '../Assests/sofa.jpg'

const About_Us = () => {

  return (
    <>
      <div className='container p-0'>
        <h1 className='About-Us text-white align-items-center justify-content-center d-flex pt-4'><a href='#'>About Us</a></h1>
        {/* <p className=' line d-flex flex-column justify-content-center align-items-center border-bottom border-3 pt-0 '></p> */}
        {/* <div className='about text-white  m-0 col-lg-6 p-0 mb-5 d-flex flex-column justify-content-between'>
            <p className='m-0 p-0'>About HomeHarb</p>
            <h1>Crafting Quality<br />Furniture Since 2021</h1>
            <p className='text-white-50 p-0 m-0'>Transforming Houses into Homes with Exceptional Furniture</p>


            <div className='list row w-100 p-0 m-0'>
              <div className='col-6 d-flex p-0 '>
                <span className='list1 d-flex flex-column border-end pe-5 p-0 m-0'>
                  <h5 className='d-flex'>Key Values</h5>
                  <p className='m-0 p-0 text-white'>-Quality Craftsminship</p>
                  <p className='m-0 p-0 text-white'>-Design Innovation</p>
                  <p className='m-0 p-0 text-white'>-Customer Satisfaction</p>
                </span>
              </div>
              <div className='col-6 d-flex'>
                <span className=' d-flex flex-column ps-5 p-0 m-0'>
                  <h5 className='d-flex '>Our Key Features </h5>
                  <p className='m-0 p-0 text-white'>-Early Eras</p>
                  <p className='m-0 p-0 text-white'>-Industrial Era</p>
                  <p className='m-0 p-0 text-white'>-Modern & Post-WWII Eras</p>
                </span>
              </div>

            </div>

          </div> */}
        <div className='row m-0 p-0'>
          <div className='about  text-white m-0 col-lg-6 p-0 pt-2 mb-5 d-flex flex-column '>
            <p className='m-0 p-0'>About HomeHarb</p>
            <h1>Crafting Quality<br />Furniture Since 2021</h1>
            <p className='text-white-50 p-0 m-0'>Transforming Houses into Homes with Exceptional Furniture</p>
            <div className='list row  pt-2 p-0 m-0'>
              <div className='col-6 d-flex p-0'>
                <span className='list1 d-flex flex-column border-end p-0 m-0'>
                  <h5 className='d-flex'>Key Benefits</h5>
                  <p className='m-0 p-0 text-white'>-Quality Craftsminship</p>
                  <p className='m-0 p-0 text-white'>-Design Innovation</p>
                  <p className='m-0 p-0 text-white'>-Customer Satisfaction</p>
                </span>
              </div>
              <div className='col-6 d-flex '>
                <span className=' list2 d-flex flex-column ps-lg-5 ps-md-0 p-0 m-0'>
                  <h5 className='d-flex  '>Our Key Features </h5>
                  <p className='m-0 p-0  text-white'>-Early Eras</p>
                  <p className='m-0 p-0 text-white'>-Industrial Era</p>
                  <p className='m-0 p-0 text-white'>-Modern & Post-WWII Eras</p>
                </span>
              </div>
            </div>
          </div>
          <div className=' col-lg-6 mb-5 d-flex flex-column p-2 align-items-center'>
            <img src={sofa} className='w-100 sofa rounded' alt='' />
          </div>
        </div >
      </div >
      <div className='bg-image1'>
        <div className='container w-100 p-0'>
          <div className='row m-0 py-5'>
            <div className='limited d-flex flex-column justify-content-center align-items-center'>
              <h1>Limited Time Offers!</h1>
              <p className='text-light'>Enjoy up to 20% off on select items.Hurry,while supplies last!</p>
              <Link to = '/Shop'><button className='btn1 rounded border-1 text-light'>Shop Now</button></Link>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default About_Us