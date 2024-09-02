import React, { useState } from 'react'
import './SignUp.css'
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'


const SignUp = () => {
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        Axios.post("http://localhost:8080/auth/signup", {
            username,
            email,
            password,
        }).then(response => {
            if (response.data.status) {

                navigate('/login')
            }

        }).catch(err => {
            console.log(err)
        })
    }

    return (

        <div>
            <div className='img0'>
                <div className=" d-flex p-0 m-0 w-100 register">

                    <div className="register_content ">

                        <h1 className='d-flex text-white  '>REGISTER</h1>

                        <form onSubmit={handleSubmit}>

                            <div className="labels d-flex flex-column  justify-content-around">

                                <input type="text" className="input1 bg-transparent text-white  rounded border-3 border-white" name="username" placeholder="Enter your UserName"
                                    onChange={(e) => setUserName(e.target.value)} />

                                <input className="input1  bg-transparent text-white border-3  rounded border-white" type="text" name="email" placeholder="Set a Email"
                                    onChange={(e) => setEmail(e.target.value)} />
                                <input className="input2 bg-transparent text-white border-3 rounded border-white" type="password" name="password" placeholder="Set Password"
                                    onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="labels ">
                                <div className="d-flex  justify-content-center pt-1">
                                    <button className="register_button text-white bg-transparent border border-3" type="submit"
                                    > SUBMIT </button>
                                </div>
                            </div>
                            <p className='text-white ms-4 pt-2 '>Already A User? please<span ><Link to="/login" className='login'>Login Here</Link></span>
                            </p>
                        </form>

                    </div>


                </div>
            </div>






        </div>
    )
}

export default SignUp