import React from 'react'
import './Posts.css'
import { Link } from 'react-router-dom'
const Posts = (props) => {
    return (
        <div className='post'>

            <Link to={`/${props.id}`}><img onClick={window.scrollTo(0, 0)} src={props.image} alt='' /></Link>

            <p><i className="bi bi-geo-alt pt-1 p-0 px-3 d-flex flex-row"><span className='posted text-black'>The Location Of Posted Person</span></i></p>
            <p className='card-subtitle  pt-2 p-1 px-3 tips'>5 Tips For Furnishing Your New Home</p>
        </div>
    )
}

export default Posts