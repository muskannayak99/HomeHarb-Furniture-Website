import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom'
// Import Swiper React components

// import React from 'react'
import './Home.css'
import sofa_room from '../Assests/sofa_room.jpg'
import living_room from '../Assests/living_room.jpg'
import Navbar from '../Navbar/Navbar';
import About_Us from '../AboutPage/About_Us';
import Collections from '../CollectionsPage/Collections';
import Testimonials from '../TestimonialsPage/Testimonials';
import Catagories from '../CatagoriesPage/Catagories';
import Footer from '../FooterPage/Footer';
import Choose_Us from '../ChooseUsPage/Choose_Us';
import Our_Blog from "../BlogPage/Our_Blog"
import Contact_Us from '../ContactPage/Contact_Us';
import Newsletter from '../NewaletterPage/Newsletter';



const Home = () => {

  return (
    <>
      <Navbar />
      <div className="bg-image">
        <div className='container bg-image h-100 w-100 p-0'>
          <div className='row m-0 py-lg-5 py-md-1 ms-lg-0 ms-md-0 ms-sm-0 '>
            <div className=" headings col-lg-6 pt-md-1 pt-sm-1 pt-1 p-0 m-0 pt-lg-5 d-flex flex-column  justify-content-start">
              <p className='welcome text-light pt-5 pt-md-0 pt-sm-0 ms-lg-0 ms-md-0  m-0 p-0'>Welcome To HomeHarb</p>
              <h1 className=' text-light ms-lg-0   '>Discover Timeless Elegance in <span className='Every'>Every piece</span></h1>
              <Link to="/shop"><button className='btn ms-md-0 ms-lg-0 text-light'>Explore Our Collections</button></Link>
            </div>

            {/* <div className='living_room col-lg-6 col-md-9  pt-4 d-flex flex-column justify-content-end'>
              <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={living_room} className="rounded-4 border border-4 border-white d-block w-100" alt="" />
                  </div>
                  <div className="carousel-item">
                    <img src={sofa_room} className="rounded-4  border border-4 border-white d-block w-100" alt="" />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div> */}
            <div className='living_room col-lg-6 col-md-9  pt-4 d-flex flex-column justify-content-end'>
              <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={living_room} className="rounded-4 border border-4 border-white d-block w-100" alt="" />
                  </div>
                  <div className="carousel-item">
                    <img src={sofa_room} className="rounded-4  border border-4 border-white d-block w-100" alt="" />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About_Us />
      <Collections />
      <Testimonials />
      <Catagories />
      <Choose_Us />
      <Our_Blog />
      <Contact_Us />
      <Newsletter />
      <Footer />






    </>
  )
}

export default Home