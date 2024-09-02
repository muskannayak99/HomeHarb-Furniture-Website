import React from 'react'
import './Discription.css'
import c5 from '../Assests/c5.jpg'
import c2 from '../Assests/c4.jpg'

const Discription = () => {
    return (
        <>
            <div className='container  p-0'>
                <div className='row m-0 p-0 d-flex flex-row pt-5 justify-content-evenly pb-4'>
                    <div className="card card-1 m-0 p-0">
                        <img src={c5} className="card-img-top-2" alt="" />
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
        </>
    )
}

export default Discription