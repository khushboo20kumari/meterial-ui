

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';

import Box from "@mui/material/Box"
import { TextField, Typography } from '@mui/material';
export default function DialogForm() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open full-screen dialog
            </Button>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}

            >
                <Box sx={{ position: 'relative' }}>

                    <Box margin='auto'
                        justifyContent='center'
                        style={{ width: "40%", height: "300px", background: "red" }}>
                        <Typography>i am khushboo khushboooo</Typography>
                        <TextField></TextField>
                        <Button>add</Button>

                        <Button autoFocus color="inherit" onClick={handleClose} variant='contained'>
                            save
                        </Button>
                    </Box>


                </Box>
            </Dialog>
        </>
    );
}
