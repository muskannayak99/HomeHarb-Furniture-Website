
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom'
// Import Swiper React components
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

import './Our_Blog.css';



// import required modules
// import { Pagination } from 'swiper/modules';
import c1 from '../Assests/gray.jpg'
import card2 from '../Assests/blue_sofaaa.jpg'
import card3 from '../Assests/white_sofaaa.jpg'
import data_blog from '../Assests/data_blog';
import Posts from '../Posts/Posts';

const Blog = () => {
    // var settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     centerMode: false,
    //     responsive: [
    //         {
    //             breakpoint: 1200,
    //             settings: {
    //                 slidesToShow: 2,
    //             }
    //         },
    //         {
    //             breakpoint: 992,
    //             settings: {
    //                 slidesToShow: 2,
    //             }
    //         },
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 slidesToShow: 1,
    //             }
    //         },
    //         {
    //             breakpoint: 576,
    //             settings: {
    //                 slidesToShow: 1,
    //             }
    //         },
    //         {
    //             breakpoint: 500,
    //             settings: {
    //                 slidesToShow: 1,
    //             }
    //         }
    //     ]
    // };
    return (
        <>

            <div className='container  p-0'>
                <div className=' row m-0 p-0'>
                    <div className='blog d-flex flex-column'>
                        <h1 className='text-light d-flex  justify-content-center pt-2'><a href='#'>Our Blog</a></h1>
                        <h5 className=' d-flex  justify-content-center pt-2'>Explore Our Latest Blog Posts</h5>
                        <p className=' text-white-50 d-flex justify-content-center'>Discover handcrafted piece designed to elevate your living spaces.From classic to contamporary, find the perfect furniture to suit your style.</p>
                    </div>
                </div>



                <div className='row d-flex flex-row justify-content-center gap-3'>
                    <div className='cards d-flex gap-1 '>

                        {data_blog.map((post, i) => {

                            return <Posts

                                key={i} id={post.id}

                                image={post.image}
                            />

                        })}

                    </div>
                </div>
            </div >

            <div className='d-flex justify-content-center py-5'>
                <Link to='Blog'><button className='btn3 border-1 rounded text-light'>View More</button></Link>
            </div>









            {/* <div className='container p-0'>
                <div className='row m-0 p-0 '> */}
            {/* <div className='  justify-content-center'> */}
            {/* <Slider {...settings}>
                        <span className="card-3 bg-light p-0 m-0">
                            <img src={c1} className="card-img-top" alt="" />
                            <i className="bi bi-geo-alt pt-1 p-0 px-3 d-flex flex-row"><span className='posted text-black'>The Location Of Posted Person</span></i>
                            <p className='card-subtitle  pt-2 p-1 px-3 tips'>5 Tips For Furnishing Your New Home</p>
                        </span>

                        <span className="card-3 bg-light m-0 p-0 ">
                            <img src={card2} className="card-img-top" alt="" />
                            <i className="bi bi-geo-alt pt-1 p-0 px-3 d-flex flex-row"><span className='posted text-black'>The Location Of Posted Person</span></i>
                            <p className='card-subtitle  pt-2 p-1 px-3 tips'>5 Tips For Furnishing Your New Home</p>
                        </span>

                        <span className="card-3 bg-light m-0 p-0 ">
                            <img src={card3} className="card-img-top" alt="" />
                            <i className="bi bi-geo-alt pt-1 p-0 px-3 d-flex flex-row"><span className='posted text-black'>The Location Of Posted Person</span></i>
                            <p className='card-subtitle  pt-2 p-1 px-3 tips'>5 Tips For Furnishing Your New Home</p>
                        </span>
                    </Slider>

                </div>
            </div>  */}
            {/* </div> */}




        </>
    )

}

export default Blog





























{/* <div className='container w-100 p-0'>
        <div className=' row m-0 p-0'>
          <div className='blog d-flex flex-column'>
            <h1 className='text-light d-flex  justify-content-center pt-5'><a href='#'>Our Blog</a></h1>
            <h5 className=' d-flex  justify-content-center pt-4'>Explore Our Latest Blog Posts</h5>
            <p className=' text-white-50 d-flex justify-content-center'>Discover handcrafted piece designed to elevate your living spaces.From classic to contamporary, find the perfect furniture to suit your style.</p>
          </div>
        </div>
        <div className='row m-0 p-0 d-flex flex-row  justify-content-evenly'>
          <div className="card  p-0 m-0 ">
            <img src={c1} className="card-img-top" alt="" />
            <i className="bi bi-geo-alt pt-1 p-0 px-3 d-flex flex-row"><span className='posted text-black'>The Location Of Posted Person</span></i>
            <p className='card-subtitle  pt-2 p-1 px-3 tips'>5 Tips For Furnishing Your New Home</p>
          </div>
          <div className="card m-0 p-0">
            <img src={card2} className="card-img-top" alt="" />
            <i className="bi bi-geo-alt pt-1 p-0 px-3 d-flex flex-row"><span className='posted text-black'>The Location Of Posted Person</span></i>
            <p className='card-subtitle  pt-2 p-1 px-3 tips'>5 Tips For Furnishing Your New Home</p>
          </div>
          <div className="card m-0 p-0 ">
            <img src={card3} className="card-img-top" alt="" />
            <i className="bi bi-geo-alt pt-1 p-0 px-3 d-flex flex-row"><span className='posted text-black'>The Location Of Posted Person</span></i>
            <p className='card-subtitle  pt-2 p-1 px-3 tips'>5 Tips For Furnishing Your New Home</p>
          </div>
        </div>
        <div className='d-flex justify-content-center py-5'><button className='btn3 border-1 rounded text-light'>View More</button></div>
      </div>
    </div> */}