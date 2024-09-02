import React from 'react'
import './Testimonials.css'
import p1 from '../Assests/p1.jpg'
import p2 from '../Assests/p2.webp'
import p3 from '../Assests/p3.jpg'

const Testimonials = () => {
    return (
        <div>
            <div className='container w-100 p-0'>
                <div><h1 className='testimonials text-light d-flex pb-5 justify-content-center'><a href='#'>Testimonials</a></h1>
                </div>
                <div className='row d-flex flex-row gap-3 justify-content-center'>
                    <div className="card-4 rounded bg-white">
                        <div className="card-body1 d-flex ">
                            <i className=" pt-0 bi-quote mm justify-content-start"></i>
                            <img src={p2} className="img6  ms-5" alt='' />
                        </div>
                        <div className='text-center'>
                            <p className='Rakib'>Rahmatullah Rakib</p>
                            <p className='David'>4.5/s</p>
                            <p className='aries'>Vermont does have this reputation of both producing quality [furniture], but also an incredible design sense and work ethic sense. And that Vermont workmanship- that Vermont attitude of wanting to make the best of anything that they build- I think runs through the state.</p>
                        </div>
                    </div>
                    <div className=" card-4 rounded ">
                        <div className="card-body1 d-flex ">
                            <i className=" pt-0 bi-quote text-light justify-content-start"></i>
                            <img src={p1} className="img6  ms-5" alt='' />
                        </div>
                        <div className='text-center text-light '>
                            <p className=' mankinew'>Aries Mankinew</p>
                            <p className=' mankinew'>4.5/s</p>
                            <p className='aries'>Vermont does have this reputation of both producing quality [furniture], but also an incredible design sense and work ethic sense. And that Vermont workmanship- that Vermont attitude of wanting to make the best of anything that they build- I think runs through the state.</p>
                        </div>
                    </div>
                    <div className="card-4 rounded bg-white ">
                        <div className="card-body1 d-flex ">
                            <i className=" pt-0 bi-quote mm justify-content-start"></i>
                            <img src={p3} className="img6  ms-5" alt='' />
                        </div>
                        <div className='text-center'>
                            <p className='Rakib'>David Miller Stok</p>
                            <p className='David'>4.5/s</p>
                            <p className='aries'>Vermont does have this reputation of both producing quality [furniture], but also an incredible design sense and work ethic sense. And that Vermont workmanship- that Vermont attitude of wanting to make the best of anything that they build- I think runs through the state.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Testimonials