import React, { useState } from 'react'
import './SignUp.css'
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    
    Axios.defaults.withCredentials = true
    const handleSubmit = (e) => {
        e.preventDefault()

        Axios.post("http://localhost:8080/auth/login", {
            email,
            password,
        }).then(response => {
            if(response.data.status) {

                navigate('/')
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

                        <h1 className='d-flex text-white  me-4 ms-5 justify-content-center'>LOGIN</h1>
                        <form onSubmit={handleSubmit}>

                            <div className="labels d-flex flex-column  justify-content-center">
                                <input className="input1  bg-transparent text-white rounded border-3 border-white" type="text" name="email" placeholder="Enter Email" 
                                    onChange={(e) => setEmail(e.target.value)} />
                                <input className="input2 bg-transparent text-white rounded border-3 border-white" type="password" name="password" placeholder="Enter Password" 
                                    onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="labels">
                                <div className="d-flex justify-content-center ms-5 me-3">
                                    <button className="register_button bg-transparent border border-3 text-white" type="submit"
                                    > LOGIN </button>
                                </div>
                            </div>
                            <p className='text-white pt-2 ms-5 ps-5 '> <Link to= "/forgotpassword" className='login'>Forgot Password?</Link></p>
                            <p className='text-white ms-4'>
                                Don't Have Account? please <Link to="/signup" className='login'>Register</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login