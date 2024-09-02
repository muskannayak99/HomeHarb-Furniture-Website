import React from 'react'
import './Breadcrums.css'
import stool from '../Assests/stool4.png'
const Breadcrums = (props) => {
    const { product } = props;

    return (
        <>
            <div className='MN'>
                <div className='container p-0'>
                    <div className='row p-0 m-0 pt-3'>
                        <div className='col-lg-5 col-md-4 col-sm-4 col-5 pt-md-3 pt-1 hl pt-lg-5 d-flex flex-column'>
                            <h3 className='fw-bold pt-lg-5 pt-md-4 pt-sm-4 p-0 m-0'>{product.category} Details</h3>
                            <p className='us m-0 p-0 fw-semibold'>Home to {product.category}</p>
                        </div>
                        <div className='col-lg-7 col-md-8 col-sm-8 col-7 d-flex flex-column justify-content-end'>
                            <img src={stool} alt='' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container p-0 '>
                <div className='row m-0'>
                    <div className='breadcrums pt-3'>
                        <span className='text-white'>Home</span><i className="bi-chevron-right text-white"></i><span className='text-white'>{product.category}</span><i className="bi bi-chevron-right text-white"></i><span className='text-white'>{product.name}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Breadcrums