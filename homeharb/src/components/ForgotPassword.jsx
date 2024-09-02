// import React from 'react'
import React, { useState } from 'react'
import './SignUp.css'
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'

const ForgotPassword = () => {

    const [email, setEmail] = useState('')


    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        Axios.post("http://localhost:8080/auth/forgot-password", {

            email,

        }).then(response => {
            if (response.data.status) {

                alert("check your email for reset password")
                navigate('/login')
            }
          
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <div>
            <div className='img0'>
                <div className=" d-flex p-0 m-0 w-100 register ">

                    <div className="register_contentt " style={{marginLeft: "60px", paddingTop: "89px"}}>

                        <h1 className='d-flex text-white justify-content-center text-center ' >FORGOT PASSWORD</h1>

                        <form onSubmit={handleSubmit}>

                            <div className="labels d-flex flex-column pt-3 me-5 ms-5 justify-content-center"  >
                                <input className="input1  bg-transparent text-white rounded border-3 border-white" type="text" name="email" placeholder="Enter Email"
                                    onChange={(e) => setEmail(e.target.value)} />

                            </div>
                            <div className="labels">
                                <div className="d-flex justify-content-center pt-4 ">
                                    <button className="register_button text-white bg-transparent border border-3" type="submit">Send</button>
                                </div>
                            </div>

                        </form>

                    </div>


                </div>
            </div>






        </div>
    )
}

export default ForgotPassword