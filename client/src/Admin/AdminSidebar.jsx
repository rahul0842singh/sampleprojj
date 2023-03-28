import React from 'react'
import { NavLink } from 'react-router-dom'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Button from '@mui/joy/Button';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Stack from '@mui/joy/Stack';
import Add from '@mui/icons-material/Add';
import Typography from '@mui/joy/Typography';

const AdminSidebar = () => {
    const [variant, setVariant] = React.useState('solid');
    const [open, setOpen] = React.useState(false);
    const [empopen, setempOpen] = React.useState(false);
    return (
        <>
            <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                <div class="position-sticky pt-3 sidebar-sticky">
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <NavLink to="/admindash" className="nav-link">
                                <span data-feather="file" class="align-text-bottom"></span>
                                Employee Report
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/leave" className="nav-link">
                                <span data-feather="file" class="align-text-bottom"></span>
                                Leave Report
                            </NavLink>

                        </li>
                        <li class="nav-item">
                            <NavLink to="/salary" className="nav-link">
                                <span data-feather="file" class="align-text-bottom"></span>
                                Salary Report
                            </NavLink>

                        </li>
                        <li class="nav-item">
                            <NavLink to="" className="nav-link">
                                <span data-feather="file" class="align-text-bottom"></span>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    startDecorator={<Add />}
                                    onClick={() => setOpen(true)}
                                >
                                    Add admin
                                </Button>
                            </NavLink>

                        </li>
                        <li class="nav-item">
                            <NavLink to="" className="nav-link">
                                <span data-feather="file" class="align-text-bottom"></span>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    startDecorator={<PersonOutlineIcon />}
                                    onClick={() => setempOpen(true)}
                                >
                                    Add Employee
                                </Button>
                            </NavLink>

                        </li>
                    </ul>
                </div>
            </nav>


            <Modal open={open} onClose={() => setOpen(false)}>
                <ModalDialog
                    aria-labelledby="basic-modal-dialog-title"
                    aria-describedby="basic-modal-dialog-description"
                    sx={{ maxWidth: 500 }}
                >
                    <Typography id="basic-modal-dialog-title" component="h2">
                        Add New Admin
                    </Typography>
                    <Typography id="basic-modal-dialog-description" textColor="text.tertiary">
                        Fill the Username and Password
                    </Typography>
                    <form
                        onSubmit={(event) => {
                            event.preventDefault();
                            setOpen(false);
                        }}
                    >
                        <Stack spacing={2}>
                            <FormControl>
                                <FormLabel>UserName</FormLabel>
                                <Input autoFocus required />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Password</FormLabel>
                                <Input required />
                            </FormControl>
                            <Button type="submit">Submit</Button>
                        </Stack>
                    </form>
                </ModalDialog>
            </Modal>


            <Modal open={empopen} onClose={() => setempOpen(false)}>
                <ModalDialog
                    aria-labelledby="basic-modal-dialog-title"
                    aria-describedby="basic-modal-dialog-description"
                    sx={{ maxWidth: 500 }}
                >
                    <Typography id="basic-modal-dialog-title" component="h2">
                        Add New Employee
                    </Typography>
                    <Typography id="basic-modal-dialog-description" textColor="text.tertiary">
                        Fill All the details
                    </Typography>
                    <form
                        onSubmit={(event) => {
                            event.preventDefault();
                            setOpen(false);
                        }}
                    >
                        <Stack spacing={2}>
                            <FormControl>
                                <FormLabel>UserName</FormLabel>
                                <Input autoFocus required />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Password</FormLabel>
                                <Input required />
                            </FormControl>
                            <Button type="submit">Submit</Button>
                        </Stack>
                    </form>
                </ModalDialog>
            </Modal>
        </>
    )
}

export default AdminSidebar