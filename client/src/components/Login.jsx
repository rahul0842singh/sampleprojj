import React from 'react'
import { NavLink } from 'react-router-dom'
import login from "../images/04.svg"
import Navbar from './Navbar'

const Login = () => {
    return (
        <>
            <Navbar />
            <main>
                <section class="p-0 d-flex align-items-center position-relative overflow-hidden mb-5">
                    <div class="container-fluid">
                        <div class="row">
                            <div class=" hero-rah col-12 col-lg-6 d-md-flex align-items-center justify-content-center  bg-opacity-10 vh-lg-100">
                                <div class="p-3 p-lg-5">

                                    <div class="text-center">
                                        <h3 class="fw-bold">Welcome to our largest community</h3>
                                        <p class="mb-0 h6 fw-light">Let's learn something new today!</p>
                                    </div>
                                    <img height="350" width="350" src={login} class="mt-5 ms-5" alt="" />
                                </div>
                            </div>
                            <div class="col-12 col-lg-6 m-auto ">
                                <div class="row my-5">
                                    <div class="col-sm-10 col-xl-8 m-auto rounded shadow-lg p-5">
                                        {/* <img src={logo} className="mb-0 fs-1" height="150" width="150" /> */}
                                        <h3 >Login into GeeksRoll</h3>
                                        <p class="lead mb-4">Nice to see you! Please log in with your account.</p>

                                        <form method='POST'>
                                            <div class="mb-4">
                                                <label for="exampleInputEmail1" class="form-label">Email address *</label>
                                                <div class="input-group input-group-lg">
                                                    <span class="input-group-text bg-light rounded-start border-0 text-secondary px-3"><i class="bi bi-envelope-fill"></i></span>

                                                    <input type="email"
                                                        class="form-control border-0 bg-light rounded-end ps-1"
                                                        placeholder="E-mail"
                                                        id="exampleInputEmail1"
                                                        name="email"


                                                    />

                                                </div>
                                            </div>
                                            <div class="mb-4">
                                                <label for="inputPassword5" class="form-label">Password *</label>
                                                <div class="input-group input-group-lg">
                                                    <span class="input-group-text bg-light rounded-start border-0 text-secondary px-3"><i class="bi bi-lock-fill"></i></span>

                                                    <input type="password"
                                                        class="form-control border-0 bg-light rounded-end ps-1"
                                                        placeholder="password"
                                                        id="inputPassword5"
                                                        name="password"

                                                    />

                                                </div>
                                                <div id="passwordHelpBlock" class="form-text">
                                                    Your password must be 8 characters at least
                                                </div>
                                            </div>
                                            <div class="mb-4 d-flex justify-content-between mb-4">
                                                <div class="form-check">
                                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                                    <label class="form-check-label" for="exampleCheck1">Remember me</label>
                                                </div>
                                                <div class="text-primary-hover">
                                                    <a href="forgot-password.html" class="text-secondary">
                                                        <u>Forgot password?</u>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="align-items-center mt-0">
                                                <div class="d-grid">
                                                    <button class="btn btn-primary mb-0" type="button">Login</button>
                                                </div>

                                            </div>
                                        </form>
                                        <div class="mt-4 text-center">
                                            <span>Don't have an account? <NavLink style={{ Textdecoration: "None" }} to="/signup">Signup</NavLink></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Login