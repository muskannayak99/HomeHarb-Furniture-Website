import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrums from '../Breadcrums/Breadcrums';
import Navbar from '../Navbar/Navbar';
import ProductDisplay from '../ProductDisplay/ProductDisplay';
import Newsletter from '../NewaletterPage/Newsletter';
import Footer from '../FooterPage/Footer';
import Discription from '../ProductDisplay/Discription';
import LatestProducts from '../LatestProducts/LatestProducts'

const Product = () => {
    const { all_product } = useContext(ShopContext);
    // console.log(all_product)
    const { productId } = useParams();
    const product = all_product.find((e) => e.id === Number(productId))

    return (
        <div>
            <Navbar />
            <Breadcrums product={product} />
            <ProductDisplay product={product} />
            <Discription/>
            <LatestProducts/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}

export default Product