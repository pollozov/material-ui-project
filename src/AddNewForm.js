import { React } from "react";
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import './AddNewForm.css'

export default function AddNewForm(props) {
    const { onClose, open } = props;

    
    const handleClose = () => {
        onClose(false);
    };

    return(
        <Dialog 
            onClose={handleClose} 
            open={open}
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '20ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div className="add-form">
                <TextField
                    id="outlined-required"
                    label="Name"
                />
                <TextField
                    id="outlined-multiline-flexible"
                    label="Description"
                    multiline
                />
                <TextField
                    id="outlined-required"
                    label="Image URL"
                />
                <Button 
                    variant="outlined"
                    onClick={handleClose}
                >
                        Add
                </Button>
            </div>

        </Dialog>
    );
}

AddNewForm.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};