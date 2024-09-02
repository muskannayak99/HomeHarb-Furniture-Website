import React, { useContext } from 'react'
import './ProductDisplay.css'
import { ShopContext } from '../Context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext)

    return (
        <>
            <div className='container p-0'>
                <div className='row m-0 pt-3'>
                    <div className='productdisplay-img-left col-lg-8'>
                        <img src={product.image} className='rounded ' alt='' />
                        <h4 className='fw-bold text-white pt-3'>{product.name}</h4>
                        <h1 className='price fw-bold'>${product.price}</h1>
                        <p className='text-white pt-4'>Made in Italy<br />Designed By Jean-Merie Mussaud</p>
                        <p className='text-white'>Inspired by the voluminous hide armchair of the last century. Le Club reinterprets one of the archetypes of design with a contemporary approch. No compromise on comfort nor on the quality execution for an armchair that lightens the shapes and materials in the name of more casual elegance. Between craftmanship and technology. Le Club is destined to become timeless, a new icon of domastic spaces and institutional places.   </p>
                        
                        <button onClick={ () => {addToCart(product.id)} } className='btn6 border-0 d-flex justify-content-evenly '>Add To Cart</button>
                    </div>
                    <div className='productdisplay-img col-lg-4'>
                        <img src={product.image} className='' alt='' />
                        <img src={product.image} className='pt-2' alt='' />
                        <img src={product.image} className='pt-2' alt='' />
                    </div>

                </div>
            </div>

        </>
    )
}

export default ProductDisplay