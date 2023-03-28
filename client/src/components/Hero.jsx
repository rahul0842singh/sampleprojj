import React, { useState } from 'react'
import hero from "../images/hero-img.png"
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import Typography from '@mui/joy/Typography';



const Hero = () => {
    const [open, setOpen] = React.useState('');
    const [register, setregister] = useState({
        name : "",
        company :"",
        email:"",
        empid:"",
        phone:"",
        job:"",
        location:"",
        upload:"",
        address:"",
        password:"",
        cpassword:""

    })

    
    let name ,value
    const handleChange = (e)=>{
        
        name = e.target.name
        value = e.target.value
    }



   const handlechange = ()=>{

   }


    return (

    

        <>
            <section id="hero" class="hero-home d-flex align-items-center">

                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 d-flex flex-column justify-content-center">
                            <h1 data-aos="fade-up">We offer modern solutions for growing your business</h1>
                            <h2 data-aos="fade-up" data-aos-delay="400">We are team of talented designers making websites with Bootstrap</h2>
                            <div data-aos="fade-up" data-aos-delay="600">
                                <div class="text-center text-lg-start">
                                    <a onClick={() => setOpen('fullscreen')} class="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                                        <span>Get Started</span>
                                        <i class="bi bi-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
                            <img src={hero} class="img-fluid" alt="" />
                        </div>
                    </div>
                </div>

            </section>


            <Modal open={!!open} onClose={() => setOpen('')}>
                <ModalDialog
                    aria-labelledby="layout-modal-title"
                    aria-describedby="layout-modal-description"
                    layout={open || undefined}
                >
                    <ModalClose />
                    <Typography id="layout-modal-title" component="h2">

                    </Typography>
                    <Typography id="layout-modal-description" textColor="text.tertiary">



                        <div class="container">
                            <main>


                                <div class="row  g-5">

                                    <div style={{ marginLeft: "15%" }} class="col-md-7 p-3  col-lg-8">
                                        <h4 class="mb-3">Fill Your Details</h4>
                                        <form class="needs-validation" novalidate>
                                            <div class="row g-3">
                                                <div class="col-sm-6">
                                                    <label for="firstName" class="form-label fw-bold ">Employee name</label>

                                                    <input type="text"
                                                        class="form-control"
                                                        id="firstName"
                                                        name='name'
                                                        placeholder="Enter Your name"
                                                        value={setregister.name}
                                                        required />

                                                    <div class="invalid-feedback">
                                                        Valid first name is required.
                                                    </div>
                                                </div>

                                                <div class="col-sm-6">
                                                    <label for="lastName" class="form-label fw-bold">Company Name</label>
                                                    <input type="text"
                                                        class="form-control"
                                                        id="lastName"
                                                        name='company'
                                                        placeholder="Enter Your Current Company"
                                                        value={setregister.company}
                                                        required />

                                                    <div class="invalid-feedback">
                                                        Valid last name is required.
                                                    </div>
                                                </div>

                                                <div class="col-12">
                                                    <label for="username" class="form-label fw-bold">Email</label>
                                                    <div class="input-group has-validation">
                                                        <span class="input-group-text">@</span>

                                                        <input type="text"
                                                            class="form-control"
                                                            id="username"
                                                            name='email'
                                                            placeholder="example@gmail.com"
                                                            value={setregister.email}
                                                            required />

                                                        <div class="invalid-feedback">
                                                            Your username is required.
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-sm-4">
                                                    <label for="firstName" class="form-label fw-bold">Employee Id</label>
                                                    <input type="text"
                                                        class="form-control"
                                                        id="firstName"
                                                        name='empid'
                                                        placeholder="Enter employee Id"
                                                        value={setregister.empid}
                                                        required />
                                                    <div class="invalid-feedback">
                                                        Valid first name is required.
                                                    </div>
                                                </div>

                                                <div class="col-sm-8">
                                                    <label for="lastName" class="form-label fw-bold">Phone</label>
                                                    <input type="text"
                                                        class="form-control"
                                                        id="lastName"
                                                        name='phone'
                                                        placeholder="phone"
                                                        value={setregister.phone}
                                                        required />
                                                    <div class="invalid-feedback">
                                                        Valid last name is required.
                                                    </div>
                                                </div>
                                                <div class="col-sm-4">
                                                    <label for="firstName" class="form-label fw-bold">Job Role</label>

                                                    <input type="text"
                                                        class="form-control"
                                                        id="firstName"
                                                        name='job'
                                                        placeholder="Job Role"
                                                        value={setregister.job}
                                                        required />

                                                    <div class="invalid-feedback">
                                                        Valid first name is required.
                                                    </div>
                                                </div>

                                                <div class="col-sm-8">
                                                    <label for="lastName" class="form-label fw-bold">Job Location</label>

                                                    <input type="text"
                                                        class="form-control"
                                                        id="lastName"
                                                        name='location'
                                                        placeholder="Job Location"
                                                        value={setregister.location}
                                                        required
                                                    />

                                                    <div class="invalid-feedback">
                                                        Valid last name is required.
                                                    </div>
                                                </div>

                                                <div class="input-group mb-3">
                                                    <input type="file" class="form-control" id="inputGroupFile02" />
                                                    <label class="input-group-text" for="inputGroupFile02">Upload</label>
                                                </div>


                                                <div class="col-12">
                                                    <label for="address" class="form-label fw-bold">Address</label>

                                                    <input type="text"
                                                        class="form-control"
                                                        id="address"
                                                        name='address'
                                                        value={setregister.address}
                                                        placeholder="1234 Main St"
                                                        required
                                                    />

                                                    <div class="invalid-feedback">
                                                        Please enter your  address.
                                                    </div>
                                                </div>

                                                <div class="col-sm-6">
                                                    <label for="firstName" class="form-label fw-bold">Password</label>
                                                    <input type="password"
                                                        class="form-control"
                                                        id="firstName"
                                                        name='password'
                                                        placeholder="****"
                                                        value={setregister.password}
                                                        required
                                                    />
                                                    <div class="invalid-feedback">
                                                        Valid first name is required.
                                                    </div>
                                                </div>

                                                <div class="col-sm-6">
                                                    <label for="lastName" class="form-label fw-bold">Cpassword</label>

                                                    <input type="password"
                                                        class="form-control"
                                                        id="lastName"
                                                        name='cpassword'
                                                        placeholder="****"
                                                        value={setregister.cpassword}
                                                        required />

                                                    <div class="invalid-feedback">
                                                        Valid last name is required.
                                                    </div>
                                                </div>



                                            </div>


                                            <button class="w-100 btn btn-primary btn-lg mt-3" type="submit">Register</button>
                                        </form>
                                    </div>
                                </div>
                            </main>

                        </div>





                    </Typography>
                </ModalDialog>
            </Modal>
        </>
    )
}

export default Hero