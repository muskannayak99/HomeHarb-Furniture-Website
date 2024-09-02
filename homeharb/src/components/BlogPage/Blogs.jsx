import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
// import Item from '../Item/Item'
import stool from '../Assests/stool4.png'
import './Blogs.css'
import Navbar from '../Navbar/Navbar'
import Newsletter from '../NewaletterPage/Newsletter'
import Footer from '../FooterPage/Footer'
import Posts from '../Posts/Posts'

const Blogs = (props) => {
    const { Blog_Bed } = useContext(ShopContext)
    return (
        <>
            <Navbar />
            <div className='MN'>
                <div className='container p-0'>
                    <div className='row p-0 m-0 pt-3'>
                        <div className='col-lg-5 col-md-4 col-sm-4 col-5 pt-md-3 pt-1 hl pt-lg-5 d-flex flex-column'>
                            <h3 className='fw-bold pt-lg-5 pt-md-4 pt-sm-4 p-0 m-0'>{props.catagory}</h3>
                            <p className='us m-0 p-0 fw-semibold'>Home to {props.catagory}</p>
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
                    <div className="Blogcatagory-products col-5 pb-4">
                        {Blog_Bed.map((posts, i) => {
                            if (props.catagory === posts.catagory) {
                                return <Posts
                                    key={i} id={posts.id}
                                    // name={posts.name}
                                    image={posts.image}
                                />
                            }
                            else {
                                return null;
                            }
                        })}
                    </div>
                    <div className='col-7'>
                        <div>
                            <p className='our fw-semibold'>5 Tips For Furnishing Your New home</p>
                            <p className='text-light fw-light'>Posted By:jain, Deepak on 2023-10-07</p>
                            <p className='our fw-lighter'>CATOGARY: HOME IMPOVERMENT, DESIGN IDEAS, QUALITY FURNITURE</p>
                            <button className='btn5 text-light border-0 rounded-1'>Read Blog</button>
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <p className='border-bottom border-1 pb-5 '></p>
                        <div className='pt-2'>
                            <p className='our fw-semibold'>When You Use A Transitional Furniture Style</p>
                            <p className='text-light fw-light'>Posted By:jain, Deepak on 2023-10-07</p>
                            <p className='our fw-lighter'>CATOGARY: DESIGN IDEAS, BEDROOM FURNITURE, DINNING ROOM FURNITURE</p>
                            <button className='btn5 text-light border-0 rounded-1'>Read Blog</button>
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <p className='border-bottom border-1 pb-5 '></p>
                        <div className="pt-2">
                            <p className='our fw-semibold'>The Best Way to Arrange your Living Room Furniture</p>
                            <p className='text-light fw-light'>Posted By:jain, Deepak on 2023-10-07</p>
                            <p className='our fw-lighter'>CATOGARY: DESIGN IDEAS, LIVING ROOM FURNITURE</p>
                            <button className='btn5 text-light border-0 rounded-1'>Read Blog</button>
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <p className='border-bottom border-1 pb-5 '></p>
                        <div className="pt-2">
                            <p className='our fw-semibold'>When You Use A Transitional Furniture Style</p>
                            <p className='text-light fw-light'>Posted By:jain, Deepak on 2023-10-07</p>
                            <p className='our fw-lighter'>CATOGARY: DESIGN IDEAS, BEDROOM FURNITURE, DINNING ROOM FURNITURE</p>
                            <button className='btn5 text-light border-0 rounded-1'>Read Blog</button>
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <p className='border-bottom border-1 pb-5 '></p>
                        <div className="pt-2">
                            <div className="pt-2">
                                <p className='our fw-semibold'>When You Use A Transitional Furniture Style</p>
                                <p className='text-light fw-light'>Posted By:jain, Deepak on 2023-10-07</p>
                                <p className='our fw-lighter'>CATOGARY: DESIGN IDEAS, BEDROOM FURNITURE, DINNING ROOM FURNITURE</p>
                                <button className='btn5 text-light border-0 rounded-1'>Read Blog</button>
                            </div>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <p className='border-bottom border-1 pb-5 '></p>
                        </div>
                        <div className="pt-2">
                            <div className="pt-2">
                                <p className='our fw-semibold'>When You Use A Transitional Furniture Style</p>
                                <p className='text-light fw-light'>Posted By:jain, Deepak on 2023-10-07</p>
                                <p className='our fw-lighter'>CATOGARY: DESIGN IDEAS, BEDROOM FURNITURE, DINNING ROOM FURNITURE</p>
                                <button className='btn5 text-light border-0 rounded-1'>Read Blog</button>
                            </div>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <p className='border-bottom border-1 pb-5 '></p>
                        </div>
                        <div className="pt-2">
                            <div className="pt-2">
                                <p className='our fw-semibold'>When You Use A Transitional Furniture Style</p>
                                <p className='text-light fw-light'>Posted By:jain, Deepak on 2023-10-07</p>
                                <p className='our fw-lighter'>CATOGARY: DESIGN IDEAS, BEDROOM FURNITURE, DINNING ROOM FURNITURE</p>
                                <button className='btn5 text-light border-0 rounded-1'>Read Blog</button>
                            </div>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <p className='border-bottom border-1 pb-5 '></p>
                        </div>
                        <div className="pt-2">
                            <div className="pt-2">
                                <p className='our fw-semibold'>When You Use A Transitional Furniture Style</p>
                                <p className='text-light fw-light'>Posted By:jain, Deepak on 2023-10-07</p>
                                <p className='our fw-lighter'>CATOGARY: DESIGN IDEAS, BEDROOM FURNITURE, DINNING ROOM FURNITURE</p>
                                <button className='btn5 text-light border-0 rounded-1'>Read Blog</button>
                            </div><br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <p className='border-bottom border-1 pb-5 '></p>
                        </div>
                    </div>

                </div>
            </div>
            <Newsletter />
            <Footer />
        </>
    )
}
export default Blogs;








// const Blogs = (props) => {
//     const { all_projuct } = useContext(ShopContext)
//     return (
//         <div>
//             <Navbar />
//             <div className='MN'>
//                 <div className='container p-0'>
//                     <div className='row p-0 m-0 pt-3'>
//                         <div className='col-lg-5 col-md-4 col-sm-4 col-5 pt-md-3 pt-1 hl pt-lg-5 d-flex flex-column'>
//                             <h3 className='fw-bold pt-lg-5 pt-md-4 pt-sm-4 p-0 m-0'>{ props.category }</h3>
//                             <p className='us m-0 p-0 fw-semibold'>Home to { props.category }</p>
//                         </div>
//                         <div className='col-lg-7 col-md-8 col-sm-8 col-7 d-flex flex-column justify-content-end'>
//                             <img src={stool} alt='' />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className='container p-0 pt-5'>
//                 <div className='row'>
//                     <div className='col-lg-5'>
//                         <img src={b8} className='bl rounded ' alt='' />
//                     </div>
//                     <div className='col-lg-6'>
//                         <p className='our fw-semibold'>5 Tips For Furnishing Your New home</p>
//                         <p className='text-light fw-light'>Posted By:jain, Deepak on 2023-10-07</p>
//                         <p className='our fw-lighter'>CATOGARY: HOME IMPOVERMENT, DESIGN IDEAS, QUALITY FURNITURE</p>
//                         <button className='btn5 text-light border-0 rounded-1'>Read Blog</button>
//                     </div>
//                     <p className='border-bottom border-1 pt-2 pb-3'></p>
//                 </div>
//             </div>
//             <div className='container p-0 pt-1'>
//                 <div className='row'>
//                     <div className='col-lg-5'>
//                         <img src={b2} className='bl rounded ' alt='' />
//                     </div>
//                     <div className='col-lg-6'>
//                         <p className='our fw-semibold'>When You Use A Transitional Furniture Style</p>
//                         <p className='text-light fw-light'>Posted By:jain, Deepak on 2023-10-07</p>
//                         <p className='our fw-lighter'>CATOGARY: DESIGN IDEAS, BEDROOM FURNITURE, DINNING ROOM FURNITURE</p>
//                         <button className='btn5 text-light border-0 rounded-1'>Read Blog</button>
//                     </div>
//                     <p className='border-bottom border-1 pt-2 pb-3'></p>
//                 </div>
//             </div>
//             <div className='container p-0 pt-1'>
//                 <div className='row'>
//                     <div className='col-lg-5'>
//                         <img src={b3} className='bl rounded ' alt='' />
//                     </div>
//                     <div className='col-lg-6'>
//                         <p className='our fw-semibold'>The Best Way to Arrange your Living Room Furniture</p>
//                         <p className='text-light fw-light'>Posted By:jain, Deepak on 2023-10-07</p>
//                         <p className='our fw-lighter'>CATOGARY: DESIGN IDEAS, LIVING ROOM FURNITURE</p>
//                         <button className='btn5 text-light border-0 rounded-1'>Read Blog</button>
//                     </div>
//                     <p className='border-bottom border-1 pt-2 pb-3'></p>
//                 </div>
//             </div>
//             <div className='container p-0 pt-1'>
//                 <div className='row'>
//                     <div className='col-lg-5'>
//                         <img src={b4} className='bl rounded ' alt='' />
//                     </div>
//                     <div className='col-lg-6'>
//                         <p className='our fw-semibold'>When You Use A Transitional Furniture Style</p>
//                         <p className='text-light fw-light'>Posted By:jain, Deepak on 2023-10-07</p>
//                         <p className='our fw-lighter'>CATOGARY: DESIGN IDEAS, BEDROOM FURNITURE, DINNING ROOM FURNITURE</p>
//                         <button className='btn5 text-light border-0 rounded-1'>Read Blog</button>
//                     </div>
//                     <p className='border-bottom border-1 pt-2 pb-3'></p>
//                 </div>
//             </div>
//             <div className='container p-0 pt-1'>
//                 <div className='row'>
//                     <div className='col-lg-5'>
//                         <img src={b5} className='bl rounded ' alt='' />
//                     </div>
//                     <div className='col-lg-6'>
//                         <p className='our fw-semibold'>When You Use A Transitional Furniture Style</p>
//                         <p className='text-light fw-light'>Posted By:jain, Deepak on 2023-10-07</p>
//                         <p className='our fw-lighter'>CATOGARY: DESIGN IDEAS, BEDROOM FURNITURE, DINNING ROOM FURNITURE</p>
//                         <button className='btn5 text-light border-0 rounded-1'>Read Blog</button>
//                     </div>
//                     <p className='border-bottom border-1 pt-2 pb-3'></p>
//                 </div>
//             </div>
//             <div className='container p-0 pt-1'>
//                 <div className='row'>
//                     <div className='col-lg-5'>
//                         <img src={b6} className='bl rounded ' alt='' />
//                     </div>
//                     <div className='col-lg-6'>
//                         <p className='our fw-semibold'>When You Use A Transitional Furniture Style</p>
//                         <p className='text-light fw-light'>Posted By:jain, Deepak on 2023-10-07</p>
//                         <p className='our fw-lighter'>CATOGARY: DESIGN IDEAS, BEDROOM FURNITURE, DINNING ROOM FURNITURE</p>
//                         <button className='btn5 text-light border-0 rounded-1'>Read Blog</button>
//                     </div>
//                     <p className='border-bottom border-1 pt-2 pb-3'></p>
//                 </div>
//             </div>
//             <div className='container p-0 pt-1'>
//                 <div className='row'>
//                     <div className='col-lg-5'>
//                         <img src={b7} className='bl rounded ' alt='' />
//                     </div>
//                     <div className='col-lg-6'>
//                         <p className='our fw-semibold'>When You Use A Transitional Furniture Style</p>
//                         <p className='text-light fw-light'>Posted By:jain, Deepak on 2023-10-07</p>
//                         <p className='our fw-lighter'>CATOGARY: DESIGN IDEAS, BEDROOM FURNITURE, DINNING ROOM FURNITURE</p>
//                         <button className='btn5 text-light border-0 rounded-1'>Read Blog</button>
//                     </div>
//                     <p className='border-bottom border-1 pt-2 pb-3'></p>
//                 </div>
//             </div>
//             <div className='container p-0 pt-1'>
//                 <div className='row pb-5'>
//                     <div className='col-lg-5'>
//                         <img src={b1} className='bl rounded ' alt='' />
//                     </div>
//                     <div className='col-lg-6'>
//                         <p className='our fw-semibold'>When You Use A Transitional Furniture Style</p>
//                         <p className='text-light fw-light'>Posted By:jain, Deepak on 2023-10-07</p>
//                         <p className='our fw-lighter'>CATOGARY: DESIGN IDEAS, BEDROOM FURNITURE, DINNING ROOM FURNITURE</p>
//                         <button className='btn5 text-light border-0 rounded-1'>Read Blog</button>
//                     </div>
//                 </div>
//             </div>
//             <Newsletter />
//             <Footer />
//         </div>
//     )
// }

// export default Blogs