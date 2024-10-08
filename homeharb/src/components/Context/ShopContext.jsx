import React, { createContext, useState } from 'react'
import all_product from '../../components/Assests/all_product'
import Blog_Bed from '../Assests/Blog_Bed';

export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length + 1; index++) {

        cart[index] = 0;
    }
    return cart;

}

const ShopContextProvider = (props) => {

    const [cartItem, setCartItem] = useState(getDefaultCart())



    const addToCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))

        console.log(cartItem)
    }

    const removeFromCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const getTotalCartAmount = () => {
        let TotalAmount = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item))
                TotalAmount += itemInfo.price * cartItem[item];
            }

        }
        return TotalAmount;
    }

    const getTotalCartItems = () => {
        let TotalItems = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) 
            {
                TotalItems += cartItem[item];
            }

        }
        return TotalItems;
    }

    const contextValue = { getTotalCartItems, getTotalCartAmount, all_product, cartItem, addToCart, removeFromCart,Blog_Bed }

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
