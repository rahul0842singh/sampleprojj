import React from 'react'
import Button from '@mui/joy/Button';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { NavLink } from 'react-router-dom';
import AdminSidebar from "./AdminSidebar";
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import HeaderAdmin from './HeaderAdmin';
import Pagination from '@mui/material/Pagination';
import DeleteIcon from '@mui/icons-material/Delete';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Chip from '@mui/material/Chip';
import DescriptionIcon from '@mui/icons-material/Description';

const Leave = () => {
    const [variant, setVariant] = React.useState('solid');
    return (
        <>
            <HeaderAdmin />

            <div class="container-fluid">
                <div class="row">
                    <AdminSidebar />

                    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <div className='container'>
                            <nav class="navbar navbar-expand-lg bg-body-light mt-5">
                                <div class="container-fluid">
                                    <a style={{marginLeft:"14%"}} class="navbar-brand heading-dashboard" href="#"><h1>Leave Report  </h1></a>
                                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>
                                    <div style={{ marginRight: "23%" }} class="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
  
                                            <li class="nav-item">
                                                <form class="d-flex mt-2 me-2" role="search">
                                                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                                    <button class="btn btn-outline-success" type="submit">Search</button>
                                                </form>
                                            </li>
                                           
                                        </ul>


                                    </div>
                                </div>
                            </nav>
                        </div>
                        <div className='container mt-3'>
                            <div style={{marginLeft:"13.5%"}} className='row mt-3'>
                                <div className='col-sm-1 col-md-1 col-lg-1'><Button  className=' ' variant="soft">Export <ExitToAppIcon/></Button></div>
                                <div className='col-sm-3 col-md-3 col-lg-3 '> <Chip label="20200 Employees are registered" /></div>
                                <div className='col-sm-1 col-md-1 col-lg-1'></div>
                                <div className='col-sm-1 col-md-1 col-lg-1'></div>
                            </div>
                        </div>

                        <div className='container'>
                            <div className='row'>
                                <div style={{marginLeft:"15%"}} className='col-sm-8 col-md-8 col-lg-8'>
                                    <div class="table-responsive">
                                    <MDBTable  className='mt-5' align='middle'>
                                            <MDBTableHead>
                                                <tr>
                                                    <th scope='col'>Employee</th>
                                                    <th scope='col'>Role</th>
                                                    <th scope='col'>Leave Report</th>
                                                   
                                                </tr>
                                            </MDBTableHead>
                                            <MDBTableBody>
                                                <tr>
                                                    <td>
                                                        <div className='d-flex align-items-center'>
                                                            <img
                                                                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                                                alt=''
                                                                style={{ width: '45px', height: '45px' }}
                                                                className='rounded-circle'
                                                            />
                                                            <div className='ms-3'>
                                                                <p className='fw-bold mb-1'>2213982</p>
                                                                <p className='text-muted mb-0'>john.doe@gmail.com</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p className='fw-normal mb-1'>Software engineer</p>
                                                        <p className='text-muted mb-0'>23,0000</p>
                                                    </td>
                                                   
                                                  
                                                    
                                                    <td><Button size="md" variant={variant} color="success"><DescriptionIcon/></Button></td>
                                                   
                                                </tr>

                                                {/* ------------- */}
                                                <tr>
                                                    <td>
                                                        <div className='d-flex align-items-center'>
                                                            <img
                                                                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                                                alt=''
                                                                style={{ width: '45px', height: '45px' }}
                                                                className='rounded-circle'
                                                            />
                                                            <div className='ms-3'>
                                                                <p className='fw-bold mb-1'>2213982</p>
                                                                <p className='text-muted mb-0'>john.doe@gmail.com</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p className='fw-normal mb-1'>Software engineer</p>
                                                        <p className='text-muted mb-0'>23,0000</p>
                                                    </td>
                                                   
                                                  
                                                    
                                                    <td><Button size="md" variant={variant} color="success"><DescriptionIcon/></Button></td>
                                                   
                                                </tr>

                                                {/* ----------- */}
                                                <tr>
                                                    <td>
                                                        <div className='d-flex align-items-center'>
                                                            <img
                                                                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                                                alt=''
                                                                style={{ width: '45px', height: '45px' }}
                                                                className='rounded-circle'
                                                            />
                                                            <div className='ms-3'>
                                                                <p className='fw-bold mb-1'>2213982</p>
                                                                <p className='text-muted mb-0'>john.doe@gmail.com</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p className='fw-normal mb-1'>Software engineer</p>
                                                        <p className='text-muted mb-0'>23,0000</p>
                                                    </td>
                                                   
                                                  
                                                    
                                                    <td><Button size="md" variant={variant} color="success"><DescriptionIcon/></Button></td>
                                                   
                                                </tr>
                                            </MDBTableBody>
                                        </MDBTable>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <Pagination className='mt-3' style={{ marginLeft: "30%" }} count={20} color="primary" />



                    </main>


                </div>
            </div>
        </>
    )
}

export default Leave