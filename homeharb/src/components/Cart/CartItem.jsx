import React from 'react'
import './CartItem.css'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'

const CartItem = () => {

    const { getTotalCartAmount, all_product, cartItem, removeFromCart } = useContext(ShopContext)

    // console.log(getTotalCartAmount)
    return (
        <>
            <div className='container p-0'>
                <div className='cartitems pb-4'>
                    <div className='cartitems-format-main text-white'>
                        <p>Product</p>
                        <p>Title</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Total</p>
                        <p>Remove</p>
                    </div>
                    <hr />

                    {all_product.map((e) => {
                        if (cartItem[e.id] > 0) {
                            return <div>
                                <div className='cartitem-format cartitems-format-main text-white'>
                                    <img src={e.image} alt='' className='carticon-product-icon' />
                                    <p>{e.name}</p>
                                    <p>${e.price}</p>
                                    <button className='cartitem-quantity'>{cartItem[e.id]}</button>
                                    <p>${e.price * cartItem[e.id]}</p>
                                    <img src='' alt='' onClick={() => { removeFromCart(e.id) }} className="bi-x-lg fw-5" />
                                </div>
                                <hr />
                            </div>
                        }
                        return null;
                    })}
                    <div className='cartitem-down text-white'>
                        <div className='cartitem-total '>
                            <h1>Cart Totals</h1>

                            <div className='cartitem-total-item'>
                                <p className='pt-4'>SubTotal</p>
                                <p className=''>${getTotalCartAmount()}</p>
                            </div>
                            <hr />
                            <div className='cartitem-total-item'>
                                <p>Shipping Fee</p>
                                <p>Free</p>
                            </div>
                            <hr />
                            <div className='cartitem-total-item'>
                                <h3>Total</h3>
                                <h3>${getTotalCartAmount()}</h3>
                            </div>
                        </div>
                        <button>PROCEED TO CHECKOUT</button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default CartItem