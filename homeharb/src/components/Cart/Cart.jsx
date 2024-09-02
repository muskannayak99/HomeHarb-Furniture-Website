import React from 'react'
import CartItem from './CartItem'
import Navbar from '../Navbar/Navbar'
import Footer from '../FooterPage/Footer'

const Cart = () => {
    return (
        <div>
            <Navbar/>
            <CartItem />
            <Footer/>
        </div>
    )
}

export default Cart