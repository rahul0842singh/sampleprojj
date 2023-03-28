import React from 'react'
import { NavLink } from 'react-router-dom'
import images from "../images/images.png"
import DashboardComp from './DashboardComp'
import about from "../images/about.jpg"
import "../App.css"
import Tooltip from '@mui/joy/Tooltip';
import Button from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton';
import Badge from '@mui/joy/Badge';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import ModalDialog from '@mui/joy/ModalDialog';
import Stack from '@mui/joy/Stack';
import Add from '@mui/icons-material/Add';
import Typography from '@mui/joy/Typography'
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import AccessTimeFilled from '@mui/icons-material/AccessTimeFilled'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker'; import { Transition } from 'react-transition-group';
import Modal from '@mui/joy/Modal';




function notificationsLabel(count) {
    if (count === 0) {
        return 'no notifications';
    }
    if (count > 99) {
        return 'more than 99 notifications';
    }
    return `${count} notifications`;
}


const LeaveReport = () => {
    const [open, setOpen] = React.useState(false);
    const [copen, setcOpen] = React.useState(false);
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





            <section id="about" class="about">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-10 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right">
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-sm-3  col-md-3 col-lg-3'>
                                        <h3 style={{ marginLeft: "24%" }}>Leave Report </h3>
                                    </div>
                                    <div className='col-sm-3   col-md-3 col-lg-3'>
                                        <h5 className='mt-2'>(As on 17 March,2023)</h5>
                                    </div>
                                </div>
                            </div>

                            <div className='container mt-4'>
                                <div className='row'>
                                    <div style={{ marginLeft: "3%" }} className='col-sm-2   col-md-2 col-lg-2'>
                                        <Button

                                            onClick={() => setOpen(true)}
                                            style={{ marginLeft: "20%" }}
                                            startDecorator={<Add />}>
                                            Apply Leave
                                        </Button>
                                    </div>
                                    <div className=' col-sm-3 col-md-3 col-lg-3'>
                                        <Tooltip title="Total Pending Leaves" variant="solid">
                                            <IconButton color="neutral" aria-label={notificationsLabel(100)}>
                                                <Badge onClick={() => setcOpen(true)} badgeContent={100} badgeInset="-20%">
                                                    <AccessTimeFilled />
                                                </Badge>
                                            </IconButton>
                                        </Tooltip>

                                    </div>
                                </div>
                            </div>
                            <MDBTable style={{ marginLeft: "6%", marginTop: "2%" }} align='middle'>
                                <MDBTableHead>
                                    <tr>
                                        <th scope='col'>Name</th>
                                        <th scope='col'>Title</th>
                                        <th scope='col'>Total Balance</th>
                                        <th scope='col'>Avilable Balance</th>
                                        <th scope='col'>Leaves Approved</th>

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
                                                    <p className='fw-bold mb-1'>John Doe</p>
                                                    <p className='text-muted mb-0'>john.doe@gmail.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className='fw-normal mb-1'>Software engineer</p>
                                            <p className='text-muted mb-0'>IT department</p>
                                        </td>
                                        <td>
                                            <MDBBadge color='success' pill>
                                                Active
                                            </MDBBadge>
                                        </td>
                                        <td>Senior</td>
                                        <td>
                                            <MDBBtn color='link' rounded size='sm'>
                                                Edit
                                            </MDBBtn>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className='d-flex align-items-center'>
                                                <img
                                                    src='https://mdbootstrap.com/img/new/avatars/6.jpg'
                                                    alt=''
                                                    style={{ width: '45px', height: '45px' }}
                                                    className='rounded-circle'
                                                />
                                                <div className='ms-3'>
                                                    <p className='fw-bold mb-1'>Alex Ray</p>
                                                    <p className='text-muted mb-0'>alex.ray@gmail.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className='fw-normal mb-1'>Consultant</p>
                                            <p className='text-muted mb-0'>Finance</p>
                                        </td>
                                        <td>
                                            <MDBBadge color='primary' pill>
                                                Onboarding
                                            </MDBBadge>
                                        </td>
                                        <td>Junior</td>
                                        <td>
                                            <MDBBtn color='link' rounded size='sm'>
                                                Edit
                                            </MDBBtn>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className='d-flex align-items-center'>
                                                <img
                                                    src='https://mdbootstrap.com/img/new/avatars/7.jpg'
                                                    alt=''
                                                    style={{ width: '45px', height: '45px' }}
                                                    className='rounded-circle'
                                                />
                                                <div className='ms-3'>
                                                    <p className='fw-bold mb-1'>Kate Hunington</p>
                                                    <p className='text-muted mb-0'>kate.hunington@gmail.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className='fw-normal mb-1'>Designer</p>
                                            <p className='text-muted mb-0'>UI/UX</p>
                                        </td>
                                        <td>
                                            <MDBBadge color='warning' pill>
                                                Awaiting
                                            </MDBBadge>
                                        </td>
                                        <td>Senior</td>
                                        <td>
                                            <MDBBtn color='link' rounded size='sm'>
                                                Edit
                                            </MDBBtn>
                                        </td>
                                    </tr>
                                </MDBTableBody>
                            </MDBTable>

                        </div>
                    </div>
                </div>
            </section>

            {/* pending leave modal */}
            <Transition in={copen} timeout={400}>
                {(state) => (
                    <Modal
                        keepMounted
                        open={!['exited', 'exiting'].includes(state)}
                        onClose={() => setcOpen(false)}
                        slotProps={{
                            backdrop: {
                                sx: {
                                    opacity: 0,
                                    backdropFilter: 'none',
                                    transition: `opacity 400ms, backdrop-filter 400ms`,
                                    ...{
                                        entering: { opacity: 1, backdropFilter: 'blur(8px)' },
                                        entered: { opacity: 1, backdropFilter: 'blur(8px)' },
                                    }[state],
                                },
                            },
                        }}
                        sx={{
                            visibility: state === 'exited' ? 'hidden' : 'visible',
                        }}
                    >
                        <ModalDialog
                            aria-labelledby="fade-modal-dialog-title"
                            aria-describedby="fade-modal-dialog-description"
                            sx={{
                                opacity: 0,
                                transition: `opacity 300ms`,
                                ...{
                                    entering: { opacity: 1 },
                                    entered: { opacity: 1 },
                                }[state],
                            }}
                        >
                            <Typography id="fade-modal-dialog-title" component="h2">
                                All Pending leaves
                            </Typography>
                            <Typography
                                id="fade-modal-dialog-description"
                                textColor="text.tertiary"
                            >
                                <MDBTable style={{ marginTop: "2%" }} align='middle'>
                                    <MDBTableHead>
                                        <tr>
                                            <th scope='col'>Name</th>
                                            <th scope='col'>Title</th>
                                            <th scope='col'>No of Days</th>
                                            <th scope='col'>Date</th>
                                            <th scope='col'>Type</th>
                                            <th scope='col'>Action</th>
                                            
                                            
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
                                                        <p className='fw-bold mb-1'>John Doe</p>
                                                        <p className='text-muted mb-0'>john.doe@gmail.com</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p className='fw-normal mb-1'>Software engineer</p>
                                                <p className='text-muted mb-0'>IT department</p>
                                            </td>
                                            <td>
                                                <MDBBadge color='success' pill>
                                                    Active
                                                </MDBBadge>
                                            </td>
                                            <td>Senior</td>
                                            <td>
                                                <MDBBtn color='link' rounded size='sm'>
                                                    Edit
                                                </MDBBtn>
                                               
                                            </td>
                                            <td>
                                            <MDBBtn color='link' rounded size='sm'>
                                                    <Button  color="danger" onClick={function () { }} >Delete</Button>
                                                </MDBBtn>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className='d-flex align-items-center'>
                                                    <img
                                                        src='https://mdbootstrap.com/img/new/avatars/6.jpg'
                                                        alt=''
                                                        style={{ width: '45px', height: '45px' }}
                                                        className='rounded-circle'
                                                    />
                                                    <div className='ms-3'>
                                                        <p className='fw-bold mb-1'>Alex Ray</p>
                                                        <p className='text-muted mb-0'>alex.ray@gmail.com</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p className='fw-normal mb-1'>Consultant</p>
                                                <p className='text-muted mb-0'>Finance</p>
                                            </td>
                                            <td>
                                                <MDBBadge color='primary' pill>
                                                    Onboarding
                                                </MDBBadge>
                                            </td>
                                            <td>Junior</td>
                                            <td>
                                                <MDBBtn color='link' rounded size='sm'>
                                                    Edit
                                                </MDBBtn>
                                            </td>

                                            <td>
                                            <MDBBtn color='link' rounded size='sm'>
                                                    <Button  color="danger" onClick={function () { }} >Delete</Button>
                                                </MDBBtn>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className='d-flex align-items-center'>
                                                    <img
                                                        src='https://mdbootstrap.com/img/new/avatars/7.jpg'
                                                        alt=''
                                                        style={{ width: '45px', height: '45px' }}
                                                        className='rounded-circle'
                                                    />
                                                    <div className='ms-3'>
                                                        <p className='fw-bold mb-1'>Kate Hunington</p>
                                                        <p className='text-muted mb-0'>kate.hunington@gmail.com</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p className='fw-normal mb-1'>Designer</p>
                                                <p className='text-muted mb-0'>UI/UX</p>
                                            </td>
                                            <td>
                                                <MDBBadge color='warning' pill>
                                                    Awaiting
                                                </MDBBadge>
                                            </td>
                                            <td>Senior</td>
                                            <td>
                                                <MDBBtn color='link' rounded size='sm'>
                                                    Edit
                                                </MDBBtn>
                                            </td>

                                            <td>
                                            <MDBBtn color='link' rounded size='sm'>
                                                    <Button  color="danger" onClick={function () { }} >Delete</Button>
                                                </MDBBtn>
                                            </td>
                                        </tr>
                                    </MDBTableBody>
                                </MDBTable>

                            </Typography>
                        </ModalDialog>
                    </Modal>
                )}
            </Transition>


            {/* ---------------------Apply leave modal-------------------- */}
            <Modal open={open} onClose={() => setOpen(false)}>
                <ModalDialog
                    aria-labelledby="basic-modal-dialog-title"
                    aria-describedby="basic-modal-dialog-description"
                    sx={{ maxWidth: 500 }}
                >
                    <Typography id="basic-modal-dialog-title" component="h2">
                        Apply Your Leave
                    </Typography>
                    <Typography id="basic-modal-dialog-description" textColor="text.tertiary">
                        Fill in the information of Leave
                    </Typography>
                    <form
                        onSubmit={(event) => {
                            event.preventDefault();
                            setOpen(false);
                        }}
                    >
                        <Stack spacing={2}>
                            <FormControl>
                                <FormLabel>Pick Your Date</FormLabel>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DatePicker']}>
                                        <DatePicker label="Basic date picker" />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Type Of Leave</FormLabel>
                                <Select
                                    placeholder="Select a pet…"
                                    indicator={<KeyboardArrowDown />}
                                    sx={{
                                        width: 240,
                                        [`& .${selectClasses.indicator}`]: {
                                            transition: '0.2s',
                                            [`&.${selectClasses.expanded}`]: {
                                                transform: 'rotate(-180deg)',
                                            },
                                        },
                                    }}
                                >
                                    <Option value="dog">Casual Leave</Option>
                                    <Option value="cat">Sick Leave</Option>
                                    <Option value="fish">Paid Leave</Option>

                                </Select>

                            </FormControl>
                            <FormControl>
                                <FormLabel>Number of Days</FormLabel>
                                <Input placeholder="Type in here…" />;
                            </FormControl>
                            <Button type="submit">Submit</Button>
                        </Stack>
                    </form>
                </ModalDialog>
            </Modal>


        </>
    )
}

export default LeaveReport