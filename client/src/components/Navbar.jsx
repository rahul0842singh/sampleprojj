import React from 'react'
import logo from "../images/Geeks.png"
import { NavLink } from 'react-router-dom'
import "../App.css"
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';


const Navbar = () => {

    const [open, setOpen] = React.useState('');
    return (
        <>
      
            <div className='container'>
                <nav class="navbar  navbar-expand-lg bg-light-tertiary">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">
                            <img src={logo} alt="Bootstrap" width="160" height="70" />
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav navbar-text ms-auto mb-2 mb-lg-0 px-3">
                                <li class="nav-item ">
                                    <a class="nav-link nav-link-grow-up active " aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item ">
                                    <a class="nav-link nav-link-grow-up active " aria-current="page" href="#">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link nav-link-grow-up active " aria-current="page" href="#">Contact Us</a>
                                </li>
                                <li class="nav-item login">
                                    <NavLink to="/login" ><button className='btn ms-2  btn-outline-secondary'>Login</button></NavLink>
                                </li>
                                <li class="nav-item register">
                                   <NavLink onClick={() => setOpen('fullscreen')} to="" > <button className='btn ms-2  btn-primary'>Register</button></NavLink>
                                </li>

                            </ul>

                        </div>
                    </div>
                </nav>
            </div>

            <Modal  open={!!open} onClose={() => setOpen('')}>
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

                                    <div style={{marginLeft:"15%"}} class="col-md-7 p-3  col-lg-8">
                                        <h4 class="mb-3">Fill Your Details</h4>
                                        <form class="needs-validation" novalidate>
                                            <div class="row g-3">
                                                <div class="col-sm-6">
                                                    <label for="firstName" class="form-label fw-bold ">Employee name</label>
                                                    <input type="text" class="form-control" id="firstName" placeholder="" value="" required />
                                                    <div class="invalid-feedback">
                                                        Valid first name is required.
                                                    </div>
                                                </div>

                                                <div class="col-sm-6">
                                                    <label for="lastName" class="form-label fw-bold">Company Name</label>
                                                    <input type="text" class="form-control" id="lastName" placeholder="" value="" required />
                                                    <div class="invalid-feedback">
                                                        Valid last name is required.
                                                    </div>
                                                </div>

                                                <div class="col-12">
                                                    <label for="username" class="form-label fw-bold">Email</label>
                                                    <div class="input-group has-validation">
                                                        <span class="input-group-text">@</span>
                                                        <input type="text" class="form-control" id="username" placeholder="Username" required />
                                                        <div class="invalid-feedback">
                                                            Your username is required.
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-sm-4">
                                                    <label for="firstName" class="form-label fw-bold">Employee Id</label>
                                                    <input type="text" class="form-control" id="firstName" placeholder="" value="" required />
                                                    <div class="invalid-feedback">
                                                        Valid first name is required.
                                                    </div>
                                                </div>

                                                <div class="col-sm-8">
                                                    <label for="lastName" class="form-label fw-bold">Phone</label>
                                                    <input type="text" class="form-control" id="lastName" placeholder="" value="" required />
                                                    <div class="invalid-feedback">
                                                        Valid last name is required.
                                                    </div>
                                                </div>
                                                <div class="col-sm-4">
                                                    <label for="firstName" class="form-label fw-bold">Job Role</label>
                                                    <input type="text" class="form-control" id="firstName" placeholder="" value="" required />
                                                    <div class="invalid-feedback">
                                                        Valid first name is required.
                                                    </div>
                                                </div>

                                                <div class="col-sm-8">
                                                    <label for="lastName" class="form-label fw-bold">Job Location</label>
                                                    <input type="text" class="form-control" id="lastName" placeholder="" value="" required />
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
                                                    <input type="text" class="form-control" id="address" placeholder="1234 Main St" required />
                                                    <div class="invalid-feedback">
                                                        Please enter your shipping address.
                                                    </div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <label for="firstName" class="form-label fw-bold">Password</label>
                                                    <input type="text" class="form-control" id="firstName" placeholder="" value="" required />
                                                    <div class="invalid-feedback">
                                                        Valid first name is required.
                                                    </div>
                                                </div>

                                                <div class="col-sm-6">
                                                    <label for="lastName" class="form-label fw-bold">Cpassword</label>
                                                    <input type="text" class="form-control" id="lastName" placeholder="" value="" required />
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

export default Navbar