import React from 'react'
import { NavLink } from 'react-router-dom'
import Profile from './Profile'
import Button from '@mui/joy/Button';



const DashboardComp = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul style={{ marginRight: "7.5%" }} class="navbar-nav ms-auto mb-2  mb-lg-0">
                        <li class="nav-item">
                                <NavLink to="/studentdashboard" className="nav-link active">Home</NavLink> 
                            </li>
                            <li class="nav-item">
                                <NavLink to="/leavereport" className="nav-link active">Leave Report</NavLink> 
                            </li>
                            <li class="nav-item">
                               <NavLink className="nav-link active" to="/salaryreport">Salary Report</NavLink> 
                            </li>

                            <li class="nav-item">
                            <Button className='ms-1' color="danger" onClick={function(){}} >Logout</Button>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default DashboardComp