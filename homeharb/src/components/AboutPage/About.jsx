import React from 'react'
import "./About.css";
import img from '../Assests/indian_furniture.jpg'
import stool from '../Assests/stool4.png'
import m1 from '../Assests/m1.jpg'
import m2 from '../Assests/m3.jpg'
import m3 from '../Assests/m2.jpg'
import imgg from '../Assests/furniture.webp'
import c1 from '../Assests/furni.jpg'
import c2 from '../Assests/furni2.webp'
import p1 from '../Assests/p1.jpg'
import p2 from '../Assests/p2.webp'
import p3 from '../Assests/p3.jpg'
import last_sofa from '../Assests/last_sofa.jpg'
import Navbar from '../Navbar/Navbar';
import Testimonials from '../TestimonialsPage/Testimonials';
import Contact_Us from '../ContactPage/Contact_Us';
import Newsletter from '../NewaletterPage/Newsletter';
import Footer from '../FooterPage/Footer';
const About = () => {
  return (
    <div>
      <Navbar />
      <div className='MN'>
        <div className='container p-0'>
          <div className='row p-0 m-0 pt-3'>
            <div className='col-lg-5 col-md-4 col-sm-4 col-5 pt-md-3 pt-1 hl pt-lg-5 d-flex flex-column'>
              <h3 className='fw-bold pt-lg-5 pt-md-4 pt-sm-4 p-0 m-0'>About Us</h3>
              <p className='us m-0 p-0 fw-semibold'>Home to About Us</p>
            </div>
            <div className='col-lg-7 col-md-8 col-sm-8 col-7 d-flex flex-column justify-content-end'>
              <img src={stool} alt='' />
            </div>
          </div>
        </div>
      </div>
      <div className='container p-0'>
        <div className='welcome align-items-center justify-content-center d-flex flex-column  pt-5 '>
          <h2 className='fw-bold text-light'>Welcome To Homeharb</h2>
          <p>Crafting Timeless Furniture for Your Home</p>
          <button className='text-white border-0'>Explore Our Story</button>
        </div>
      </div>
      <div className='container p-0'>
        <h1 className='story text-white align-items-center justify-content-center d-flex pt-4'><a href='#'>Our Story</a></h1>
        <div className='row m-0 p-0 pt-3'>
          <div className='col-lg-6 m-0 p-0 pt-4'>
            <h6 className='our m-0 p-0 fw-semibold'>Our Story:</h6>
            <p className='text-white'>Founded in 2023, HomeHarb has been a pioneer in the world of furniture<br /> design and craftmanship.</p>
            <h6 className='our m-0 p-0 fw-semibold'>Brand Journey:</h6>
            <p className='text-white'>From our humble beginnings to becoming a trusted name in quality furniture,  Our journey has been guided by a passion for creating pieces that stand the <br />test of time.</p>
          </div>
          <div className='col-lg-6  m-0 p-0 '>
            <img className='imgg rounded-2 w-100' src={img} alt='' />
          </div>
        </div>
      </div>
      <h1 className='testimonials text-light d-flex pt-5  justify-content-center'><a href='#'>Meet the Team</a></h1>
      <div className='container w-100 p-0'>

        <p className='text-light  d-flex pb-2 justify-content-center'>Get to know the skilled artisana and passionate individuals who brings our furniture to life.</p>
      </div>
      <div className='row d-flex flex-row gap-3 justify-content-center'>
        <div className="card-4 rounded bg-white">
          <div className="card-body1 d-flex ">

            <img src={m1} className="img7" alt='' />
          </div>
          <div className='text-center'>
            <p className='Rakib'>Rahmatullah Rakib</p>
            <p className='David'>Manager</p>
            <p className='aries'>Vermont does have this reputation of both producing quality [furniture], but also an incredible design sense and work ethic sense. And that Vermont workmanship- that Vermont attitude of wanting to make the best of anything that they build- I think runs through the state.</p>
          </div>
        </div>
        <div className=" card-4 rounded ">
          <div className="card-body1 d-flex ">
            <img src={m2} className="img7" alt='' />
          </div>
          <div className='text-center text-light '>
            <p className=' mankinew'>Aries Mankinew</p>
            <p className=' mankinew'>Designer</p>
            <p className='aries'>Vermont does have this reputation of both producing quality [furniture], but also an incredible design sense and work ethic sense. And that Vermont workmanship- that Vermont attitude of wanting to make the best of anything that they build- I think runs through the state.</p>
          </div>
        </div>
        <div className="card-4 rounded bg-white ">
          <div className="card-body1 d-flex ">
            <img src={m3} className="img7" alt='' />
          </div>
          <div className='text-center'>
            <p className='Rakib'>David Miller Stok</p>
            <p className='David'>CEO</p>
            <p className='aries'>Vermont does have this reputation of both producing quality [furniture], but also an incredible design sense and work ethic sense. And that Vermont workmanship- that Vermont attitude of wanting to make the best of anything that they build- I think runs through the state.</p>
          </div>
        </div>
      </div>

      <div className='container p-0'>
        <h1 className='story text-white align-items-center justify-content-center d-flex pt-5'><a href='#'>Mission and Values</a></h1>
        <div className='row m-0 p-0 pt-3'>
          <div className='col-lg-6 m-0 p-0 '>
            <img className='imgg rounded-2 w-100' src={imgg} alt='' />
          </div>
          <div className='col-lg-6 m-0 p-0  '>
            <h6 className='our m-0 p-0 ms-4 fw-semibold'>Mission Statement:</h6>
            <p className='text-white ms-4'>At HomeHarb, our mission is to transform houses<br /> into homes by providing exceptional, handcraft<br /> furniture that combines style, comfort, and<br /> durability.</p>
            <h6 className='our m-0 p-0 ms-4 fw-semibold'>Core Values:</h6>
            <span className='text-white '>
              <p className='m-0 p-0 ms-4 text-white'>-Quality Craftsminship</p>
              <p className='m-0 p-0 ms-4 text-white'>-Customer Satisfaction</p>
              <p className='m-0 p-0 ms-4 text-white'>-Design Innovation</p>
              <p className='m-0 p-0 ms-4 text-white'>-Sustainability</p>
            </span>
          </div>
        </div>
      </div>
      <div className='container  p-0'>
        <div className='row m-0 p-0 pb-5 d-flex flex-row pt-5 justify-content-evenly '>
          <div className="card m-0 p-0">
            <img src={c1} className="card-img-top-1" alt="" />
            <div className="card-body d-flex flex-column ">
              <h6 className='d-flex justify-content-center fw-semibold'>Our Workshop</h6>
              <h6 className='contant d-flex justify-content-center fw-bold'>Craftmanship Showcase</h6>
              <p className='d-flex justify-content-center text-center fw-medium'>Step inside our state of the art workshop, where skilled artisans<br /> meticulously craft each piece with precision and care.</p>
            </div>
          </div>
          <div className="card m-0 p-0">
            <img src={c2} className="card-img-top" alt="" />
            <div className="card-body d-flex flex-column">
              <h6 className='d-flex justify-content-center fw-semibold'>Commitment to Sustainablity</h6>
              <h6 className='contant d-flex justify-content-center fw-bold'>Sustainablity Statement</h6>
              <p className='d-flex justify-content-center text-center fw-medium'>At HomeHarb we are commited to sustainable practices. Learn<br /> more about our efforts to reduce our environmental impact.</p>
            </div>
          </div>
        </div>
      </div>
      <Testimonials/>
      <Contact_Us/>
      <Newsletter/>
      <Footer/>
    </div>

  )
}

export default About