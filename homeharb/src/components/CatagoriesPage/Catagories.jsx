import React from 'react'
import { NavLink } from 'react-router-dom'
import './Catagories.css'
import data_product from '../Assests/data'
import Item from '../Item/Item'

import card2 from '../Assests/s2.png'
import card3 from '../Assests/s3.png'
import c1 from '../Assests/s1.png'

const Catagories = () => {
    return (
        <div>
            <div className='container p-0'>

                {/* <div className='collections d-flex flex-column'> */}
                <h1 className='text-light d-flex catagories justify-content-center pt-5'><a href='#'>Explore Catagories</a></h1>
                <div className=' row m-0 p-0'>
                    <div className='nav2 d-flex justify-content-evenly pt-5'>
                        <NavLink to='/Living'><span><h6>Living Room</h6></span></NavLink>
                        <NavLink to='/bedroom'><span><h6>Bedroom</h6></span></NavLink>
                        <NavLink to='/dinning'><span><h6>Dinning Room</h6></span></NavLink>
                        <NavLink to='/office'><span><h6>Office</h6></span></NavLink>
                    </div>
                </div>
                {/* </div> */}
                <div className='row  p-0 d-flex flex-row pt-3 pb-3 justify-content-center gap-3'>
                    <div className='row p-0 d-flex flex-row  justify-content-center gap-3'>
                        <div className='cards d-flex gap-1 '>

                            {data_product.map((item, i) => {

                                return <Item

                                    key={i} id={item.id}
                                    name={item.name}
                                    image={item.image}
                                    price={item.price} />

                            })}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Catagories


{/* <div className="card-3 m-0 p-0 bg-light rounded">
                        <img src={c1} className="card-img-top" alt="" />
                        <div className="card-body d-flex flex-row gap-5 pt-3">
                            <p>Abbinabilli Besides Table</p>
                            <div className='ps-2'><button className='text-light btn2 border-0 d-flex  rounded-1 justify-content-center'>$1,730.00</button></div>
                        </div>
                    </div>
                    <div className="card-3 m-0 p-0 bg-light rounded">
                        <img src={card2} className="card-img-top" alt="" />
                        <div className="card-body d-flex flex-row gap-5 pt-3">
                            <p>Abbinabilli Chest of Drawers</p>
                            <button className='text-light btn2  border-0 rounded-1 d-flex justify-content-center '>$6,720.00</button>
                        </div>
                    </div>
                    <div className="card-3 m-0 p-0 bg-light rounded">
                        <img src={card3} className="card-img-top" alt="" />
                        <div className="card-body d-flex flex-row gap-5 pt-3">
                            <p>Aiko Sideboard</p>
                            <div className='ps-4'><button className='text-light btn2 border-0 rounded-1 d-flex justify-content-center'>Explore</button>
                            </div>
                        </div>*/}

