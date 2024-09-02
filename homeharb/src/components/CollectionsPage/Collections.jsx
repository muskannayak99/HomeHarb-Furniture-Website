import React from 'react'
import { Link } from 'react-router-dom'
import './Collections.css'
import data_product from '../Assests/data'
import Item from '../Item/Item'



const Collections = () => {
  return (
    <>
      <div className='container  p-0'>
        <div className=' row  p-0'>
          <div className='collections d-flex flex-column'>
            <h1 className='text-light d-flex  justify-content-center pt-5'><a href='#'>Featured Collections</a></h1>
            <h5 className=' d-flex  justify-content-center pt-4'>Explore Our Featured Collections</h5>
            <p className=' text-white-50 d-flex justify-content-center'>Discover handcrafted piece designed to elevate your living spaces.From classic to contamporary, find the perfect furniture to suit your style.</p>
          </div>
        </div>
        <div className='row  d-flex flex-row  justify-content-center gap-3'>
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
        <div className='d-flex justify-content-center py-5'><Link to='/Shop'><button className='btn3 border-1 rounded text-light'>Explore Now</button></Link></div>
      </div>
    </>
  )
}

export default Collections


{/* <div className="card-3 m-0 p-0 bg-light rounded">
            {data_product.map((item, i) => {
              return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} />
            })}
             </div> */}
{/* <div className="card-3 m-0 p-0 bg-light rounded">
              {data_product.map((item, i) => {
                return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} />
              })}
               </div> */}
{/* <div className="card-3 m-0 p-0 bg-light rounded d-flex justify-content-start align-items-star">
                 */}
{/* </div> */ }
{/* <img src={c1} className="card-img-top" alt="" />
            <div className="card-body d-flex pt-3 gap-5">
              <p>Abbinabilli Besides Table</p>
              <button className='text-light btn2 border-0 d-flex  rounded-1 justify-content-center  ms-4'>$1,730.00</button>
            </div> */}
{/* <div className="card-3 p-0 m-0 bg-light rounded"> */ }
{/* {data_product.map((item,i)=>{
             return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price}/>
           })} */}
{/* <img src={card2} className="card-img-top" alt="" />
            <div className="card-body d-flex pt-3 gap-5 ">
              <p>Abbinabilli Chest of Drawers</p>
              <button className='text-light btn2 border-0 rounded-1 d-flex justify-content-center ms-2'>$6,720.00</button>
            </div> */}
{/* </div>
          <div className="card-3 m-0 p-0 bg-light rounded"> */}
{/* {data_product.map((item,i)=>{
             return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price}/>
           })} */}
{/* <img src={card3} className="card-img-top" alt="" />
            <div className="card-body d-flex pt-3 gap-5">
              <p>Aiko Sideboard</p>
              <button className='text-light btn2 border-0 rounded-1 d-flex justify-content-center ms-5'>Explore</button>
            </div> */}
{/* </div> */ }
