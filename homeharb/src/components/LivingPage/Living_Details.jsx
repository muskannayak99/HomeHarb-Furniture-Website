import React from 'react'
import './Living_Details.css'

import stool from '../Assests/stool4.png'
import c11 from '../Assests/c3.png'
import c2 from '../Assests/c4.jpg'
import card2 from '../Assests/s2.png'
import card3 from '../Assests/s3.png'
import c1 from '../Assests/s1.png'
import living1 from '../Assests/living1.jpg'
import living2 from '../Assests/living2.jpg'
import living3 from '../Assests/living3.jpg'
import living4 from '../Assests/living4.jpg'
import living5 from '../Assests/living5.jpg'

import Navbar from '../Navbar/Navbar'
import Newsletter from '../NewaletterPage/Newsletter'
import Footer from '../FooterPage/Footer'

const Living_Details = () => {
    return (
        <div>
            <Navbar />
            <div className='MN'>
                <div className='container p-0'>
                    <div className='row p-0 m-0 pt-3'>
                        <div className='col-lg-5 col-md-4 col-sm-4 col-5 pt-md-3 pt-1 hl pt-lg-5 d-flex flex-column'>
                            <h3 className='fw-bold pt-lg-5 pt-md-4 pt-sm-4 p-0 m-0'>Living Details</h3>
                            <p className='us m-0 p-0 fw-semibold'>Home to Living</p>
                        </div>
                        <div className='col-lg-7 col-md-8 col-sm-8 col-7 d-flex flex-column justify-content-end'>
                            <img src={stool} alt='' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container p-0 pt-5'>
                <div className='row m-0 p-0'>
                    <div className='col-lg-8'>
                        <img src={living1} className='living_img rounded' alt='' />
                        <h2 className='fw-bold text-white pt-3'>Brera Sofa</h2>
                        <h1 className='contant fw-bold'>$1730.00</h1>
                        <p className='text-white pt-4'>Made in Italy<br />Designed By Jean-Merie Mussaud</p>
                        <p className='text-white'>Inspired by the voluminous hide armchair of the last century. Le Club reinterprets one of the archetypes of design with a contemporary approch. No compromise on comfort nor on the quality execution for an armchair that lightens the shapes and materials in the name of more casual elegance. Between craftmanship and technology. Le Club is destined to become timeless, a new icon of domastic spaces and institutional places.   </p>
                        <button className='btn6  border-0 d-flex pt-2 justify-content-center '>Add To Cart</button>
                    </div>
                    <div className='col-lg-4'>
                        <img src={living2} className='living_img2 rounded' alt='' />
                        <img src={living3} className='living_img2 pt-1 rounded' alt='' />
                        <img src={living4} className='living_img2 pt-1 rounded' alt='' />
                        <img src={living5} className='living_img2 pt-1 rounded' alt='' />
                    </div>
                </div>
            </div>
            <div className='container  p-0'>
                <div className='row m-0 p-0 d-flex flex-row pt-5 justify-content-evenly '>
                    <div className="card card-1 m-0 p-0">
                        <img src={c11} className="card-img-top-2" alt="" />
                        <div className="card-body d-flex flex-column ">
                            <h6 className='d-flex justify-content-center fw-semibold'>Meet Our Designer</h6>
                            <h6 className='contant d-flex justify-content-center fw-bold'>Jean-Marie Massuad </h6>
                            <p className='d-flex justify-content-center text-center fw-medium'>Graduating from the ENSCI in 1990, Jean-Marie Massuad has run a quest for synthesis, reduction, lightness since his first intuitions. he has work in various field within design, from furniture to industrial product and equipment, in 2000, he founded Studio Massuad and expanded his expertise to include architecture and brand development. he has collaborated with various brands such as B&B italia, Awor Hansgrode, Doir Poltrona frau, Lancome and renault.  </p>
                        </div>
                    </div>
                    <div className="card card-1 m-0 p-0">
                        <img src={c2} className="card-img-top" alt="" />
                        <div className="card-body d-flex flex-column">
                            <h6 className='d-flex justify-content-center fw-semibold'>Creaftmanship</h6>
                            <h6 className='contant d-flex justify-content-center fw-bold'>A Flawless Finish</h6>
                            <p className='d-flex justify-content-center text-center fw-medium'>At HomeHarb, quality is based on heritage of working with wood and the traditional craftmanship of the brianza region in italy. Where provenance, creativity, innovation and technological know how are at its core <br>
                            </br>Buying a HomeHarb product is an investment in more ways than one.The collection is typically rigoeous with a classic style. It is not the result of passing fads,but has an aesthetic quality that will guarantee that each piece remain stylish.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container w-100 p-0'>
                <div className=' row m-0 p-0'>
                    <div className='collections d-flex flex-column'>
                        <h1 className='text-light d-flex  justify-content-center pt-5'><a href='#'>Our Latest Product</a></h1>
                    </div>
                </div>
                <div className='row m-0 p-0 d-flex flex-row pb-5 justify-content-center pt-2 gap-3'>
                    <div className="card-3 m-0 p-0 bg-light">
                        <img src={c1} className="card-img-top" alt="" />
                        <div className="card-body d-flex pt-3 gap-5">
                            <p>Abbinabilli Besides Table</p>
                            <button className='text-light btn2 border-0 d-flex  rounded-1 justify-content-center  ms-4'>$1,730.00</button>
                        </div>
                    </div>
                    <div className="card-3 p-0 m-0 bg-light">
                        <img src={card2} className="card-img-top" alt="" />
                        <div className="card-body d-flex pt-3 gap-5 ">
                            <p>Abbinabilli Chest of Drawers</p>
                            <button className='text-light btn2 border-0 rounded-1 d-flex justify-content-center ms-2'>$6,720.00</button>

                        </div>
                    </div>
                    <div className="card-3 m-0 p-0 bg-light">
                        <img src={card3} className="card-img-top" alt="" />
                        <div className="card-body d-flex pt-3 gap-5">
                            <p>Aiko Sideboard</p>
                            <button className='text-light btn2 border-0 rounded-1 d-flex justify-content-center ms-5'>Explore</button>
                        </div>
                    </div>
                </div>
            </div>
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Living_Details