import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Navbar from "../Navbar/Navbar";
import "./Shop.css"
import stool from '../Assests/stool4.png'
import Item from '../Item/Item'
// import all_product from '../../components/Assests/all_product'
import Newsletter from '../NewaletterPage/Newsletter';
import Footer from '../FooterPage/Footer';

const ShopCatagory = (props) => {
    const { all_product } = useContext(ShopContext)
    return (
        <>
            <Navbar />
            <div className='MN'>
                <div className='container p-0'>
                    <div className='row p-0 m-0 pt-3'>
                        <div className='col-lg-5 col-md-4 col-sm-4 col-5 pt-md-3 pt-1 hl pt-lg-5 d-flex flex-column'>
                            <h3 className='fw-bold pt-lg-5 pt-md-4 pt-sm-4 p-0 m-0'>{props.category}</h3>
                            <p className='us m-0 p-0 fw-semibold'>Home to {props.category}</p>
                        </div>
                        <div className='col-lg-7 col-md-8 col-sm-8 col-7 d-flex flex-column justify-content-end'>
                            <img src={stool} alt='' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container p-0'>
                <p className='text-white pt-5'>Showing 10 results</p>
            </div>
            <div className="container p-0">
                <div className="d-flex flex-row justify-content-between">
                    <div className="shopcategory-products col-9 pb-4">
                        {all_product.map((item, i) => {
                            if (props.category === item.category) {
                                return <Item
                                    key={i} id={item.id}
                                    name={item.name}
                                    image={item.image}
                                    price={item.price}
                                />
                            }
                            else {
                                return null;
                            }
                        })}
                    </div>
                    <div className="col-3 d-flex  pt-4">
                        <div className="card card-height m-0 p-0">
                            <h3 className='h pt-3 ms-3 fw-bold'>{props.category} Details</h3>
                            <p className='pt-3 ms-3 me-3 fw-semibold'>The sence of hormony, beauty and know-how come together in the Poliform furniture collections. The collection of sofa's armchairs side and coffee tables has been created specifically to reflect the lifecycle and needs of clients who make Poliform part of their home. </p>
                        </div>
                    </div>
                </div>
            </div>
            <Newsletter />
            <Footer />
        </>
    )
}
export default ShopCatagory;