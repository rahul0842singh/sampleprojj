import React from 'react'
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Stack from '@mui/joy/Stack';
import Add from '@mui/icons-material/Add';
import Typography from '@mui/joy/Typography';


const HeaderAdmin = () => {
  const [open, setOpen] = React.useState(false);
  const [variant, setVariant] = React.useState('solid');
  return (
    <>
      <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-2 shadow">
        <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="#">Admin</a>
        <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="navbar-nav">
          <div class="nav-item text-nowrap">
            <Button size="md" className='me-3' variant={variant} color="danger">

              Logout
            </Button>



            <Modal open={open} onClose={() => setOpen(false)}>
              <ModalDialog
                aria-labelledby="basic-modal-dialog-title"
                aria-describedby="basic-modal-dialog-description"
                sx={{ maxWidth: 500 }}
              >
                <Typography id="basic-modal-dialog-title" component="h2">
                  Create new project
                </Typography>
                <Typography id="basic-modal-dialog-description" textColor="text.tertiary">
                  Fill in the information of the project.
                </Typography>
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    setOpen(false);
                  }}
                >
                  <Stack spacing={2}>
                    <FormControl>
                      <FormLabel>Name</FormLabel>
                      <Input autoFocus required />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Description</FormLabel>
                      <Input required />
                    </FormControl>
                    <Button type="submit">Submit</Button>
                  </Stack>
                </form>
              </ModalDialog>
            </Modal>

          </div>
        </div>
      </header>
    </>
  )
}

export default HeaderAdmin