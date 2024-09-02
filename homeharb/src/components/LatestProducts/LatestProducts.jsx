import React from 'react'
import Item from '../Item/Item'
import data_product from '../Assests/data'

const LatestProducts = () => {
    return (
        
            <div className='container p-0 pt-3'>
                <div className='row m-0'>
                    <h1 className='text-white d-flex justify-content-center'>Our Latest Product</h1>
                </div>
                <div className='row  pt-3 pb-4 d-flex flex-row  justify-content-center gap-3'>
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
            
            )
}

            export default LatestProducts