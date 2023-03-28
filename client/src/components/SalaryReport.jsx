import React from 'react'
import DashboardComp from './DashboardComp'

const SalaryReport = () => {
    return (
        <>
            <DashboardComp />
            <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark p-3" data-bs-theme="dark">
                <div class="container-fluid">

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul style={{ marginRight: "6.5%" }} class="navbar-nav me-auto mb-2 mb-lg-0">
                            <nav aria-label="breadcrumb text-white">
                                <ol class="breadcrumb text-white">
                                    <li style={{ color: "white" }} class="breadcrumb-item text-white"><a href="#"><span className='text-white'>Home</span></a></li>
                                    <li class="breadcrumb-item text-white"><a style={{ textDecoration: "None" }} className='text-white' href="#">Library</a></li>
                                    <li class="breadcrumb-item text-white active" aria-current="page">Data</li>
                                </ol>
                            </nav>

                        </ul>
                    </div>
                </div>
            </nav>


            <div class="container">
                <main>
                    <div class="py-5 text-center">

                        <h1>Payslip</h1>

                    </div>

                    <div class="row g-5">
                        <div class="col-md-5 col-lg-4 order-md-last">
                            <h4 class="d-flex justify-content-between align-items-center mb-3">
                                <span class="text-primary">Earnings</span>
                                <span class="badge bg-primary rounded-pill"><i class="bi bi-cloud-download-fill"></i></span>
                            </h4>
                            <ul class="list-group mb-3">
                                <li class="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 class="my-0">Basic Salary (Rs)</h6>
                                        <small class="text-muted">14,784</small>
                                    </div>
                                   
                                </li>
                                <li class="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 class="my-0">House Rent allowance (Rs)</h6>
                                        <small class="text-muted">5914</small>
                                    </div>
                                    
                                </li>
                                <li class="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 class="my-0">Leave travell allowance (Rs)</h6>
                                        <small class="text-muted">1,356</small>
                                    </div>
                                   
                                </li>
                                <li class="list-group-item d-flex justify-content-between ">
                                    <div class="">
                                        <h6 class="my-0">Performance Pay (Rs)</h6>
                                        <small>1700</small>
                                    </div>
                                   
                                </li>
                                <li class="list-group-item d-flex justify-content-between ">
                                    <div class="">
                                        <h6 class="my-0">City Allowance (Rs)</h6>
                                        <small>200</small>
                                    </div>
                                   
                                </li>
                                <li class="list-group-item d-flex justify-content-between ">
                                    <div class="">
                                        <h6 class="my-0">Miscellaneous (Rs)</h6>
                                        <small>910</small>
                                    </div>
                                    
                                </li>
                                <li class="list-group-item d-flex justify-content-between ">
                                    <div class="">
                                        <h6 class="my-0">Deducation (Rs)</h6>
                                        <small>910</small>
                                    </div>
                                    
                                </li>
                                <li class="list-group-item d-flex justify-content-between">
                                    <span>Total (USD)</span>
                                    <strong>$20</strong>
                                </li>
                            </ul>

                           
                        </div>
                        <div class="col-md-7 col-lg-8">
                            <h4 class="mb-3">Billing address</h4>
                            <form class="needs-validation" novalidate>
                                <div class="row g-3">
                                    <div class="col-sm-6">
                                        <li class="list-group-item d-flex justify-content-between lh-sm border p-3">
                                            <div>
                                                <h6 class="my-0"> name</h6>
                                                <small class="text-muted">Rahul kumar</small>
                                            </div>

                                        </li>
                                    </div>

                                    <div class="col-sm-6">
                                        <li class="list-group-item d-flex justify-content-between lh-sm border p-3">
                                            <div>
                                                <h6 class="my-0">Email</h6>
                                                <small class="text-muted">Kumar_rahulkkcs@yahoo.com</small>
                                            </div>

                                        </li>
                                    </div>

                                    <div class="col-sm-6">
                                        <li class="list-group-item d-flex justify-content-between lh-sm border p-3">
                                            <div>
                                                <h6 class="my-0">Phone</h6>
                                                <small class="text-muted">8340251638</small>
                                            </div>

                                        </li>
                                    </div>

                                    <div class="col-sm-6">
                                        <li class="list-group-item d-flex justify-content-between lh-sm border p-3">
                                            <div>
                                                <h6 class="my-0">Employee Id</h6>
                                                <small class="text-muted">2218398</small>
                                            </div>

                                        </li>
                                    </div>

                                    <div class="col-12">
                                        <label for="address" class="form-label">Address</label>
                                        <input type="text" class="form-control" id="address" placeholder="1234 Main St" required />
                                        <div class="invalid-feedback">
                                            Please enter your  address.
                                        </div>
                                    </div>

                                    <div class="col-sm-6">
                                        <li class="list-group-item d-flex justify-content-between lh-sm border p-3">
                                            <div>
                                                <h6 class="my-0">Job Location</h6>
                                                <small class="text-muted">Brief description</small>
                                            </div>

                                        </li>
                                    </div>

                                    <div class="col-sm-6">
                                        <li class="list-group-item d-flex justify-content-between lh-sm border p-3">
                                            <div>
                                                <h6 class="my-0">Role</h6>
                                                <small class="text-muted">Brief description</small>
                                            </div>

                                        </li>
                                    </div>

                                    

                                </div>

                  
                             
                            </form>
                        </div>
                    </div>
                </main>


            </div>

        </>
    )
}

export default SalaryReport