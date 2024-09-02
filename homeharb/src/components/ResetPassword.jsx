// import React from 'react'
import React, { useState } from 'react'
import './SignUp.css'
import Axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom'

const ResetPassword = () => {

    const [password, setPassword] = useState('')
    const { token } = useParams()

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        Axios.post("http://localhost:8080/auth/reset-password/" + token, {

            password,

        }).then(response => {
            if (response.data.status) {


                navigate('/login')
            }
            console.log(response.data)

        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <div>
            <div className='img0'>
                <div className=" d-flex p-0 m-0 w-100 register">

                    <div className="register_contenttt " style={{ marginLeft: "80px", paddingTop: "89px" }}>

                        <h1 className='d-flex text-white justify-content-center'>RESET PASSWORD</h1>

                        <form onSubmit={handleSubmit}>

                            <div className="labels d-flex flex-column pt-3 me-4 ms-3 justify-content-center">


                                <input className="input2 bg-transparent text-white rounded border-3 border-white" type="password" name="password" placeholder="New Password"
                                    onChange={(e) => setPassword(e.target.value)} />
                            </div>

                            <div className="labels">
                                <div className="d-flex pt-3 justify-content-center ">
                                    <button className="register_button text-white bg-transparent border border-3" type="submit">Reset</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword;