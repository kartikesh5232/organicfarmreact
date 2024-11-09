import React from 'react'
import { useState } from 'react';
import { LoginDTO } from '../models/UserLoginDTO';
import { useNavigate } from "react-router-dom";
import userService from '../service/userService.js';
import { addProfile } from '../redux/action';
import { useDispatch } from 'react-redux';


const Login = () => {

    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [user, setUser] = useState(new LoginDTO('', ''));
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;

        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    };


    const handleLogin = (e) => {

        e.preventDefault();

        if (!(user.email && user.password)) {
            setErrorMessage("Email and password are required.");
            return;
        }

        userService.login(user).then(data => {
            dispatch(addProfile());
            navigate("/");
        }, error => {
            console.log(error);
            setErrorMessage("Username or password is not valid");
        });


    }


    return (
        <>
            <section className="vh-100" styles="background-color: #9A616D;">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-10">
                            <div className="card" styles="border-radius: 1rem;">
                                <div className="row g-0">
                                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                                        <img src="assets/login.jpg"
                                            alt="login form" className="img-fluid" styles="border-radius: 1rem 0 0 1rem;" />
                                    </div>
                                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                        <div className="card-body p-4 p-lg-5 text-black">

                                            <form onSubmit={handleLogin}>



                                                <h5 className="fw-normal mb-3 pb-3" styles="letter-spacing: 1px;">Sign into your account</h5>

                                                <div data-mdb-input-init className="form-outline mb-4">
                                                    <input type="email" id="form2Example17" name="email" value={user.email} onChange={handleChange} className="form-control form-control-lg" />
                                                    <label className="form-label" >Email address</label>
                                                </div>

                                                <div data-mdb-input-init className="form-outline mb-4">
                                                    <input type="password" id="form2Example27" name="password" value={user.password} onChange={handleChange} className="form-control form-control-lg" />
                                                    <label className="form-label" >Password</label>
                                                </div>

                                                <div className="pt-1 mb-4">
                                                    <button data-mdb-button-init data-mdb-ripple-init className="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                                                </div>



                                            </form>
                                            {errorMessage &&
                                                <div className="alert alert-danger" role="alert">
                                                    <strong>Error! </strong> {errorMessage}
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;
