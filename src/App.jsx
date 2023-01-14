import React from "react";
import Typography from '@mui/material/Typography';
import { AppBar } from "@mui/material";
import Card from "@mui/material";
import CardActions from "@mui/material";
import CardContent from "@mui/material";
import CardMedia from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import Grid from "@mui/material";
import Toolbar from '@mui/material/Toolbar';
import Container from "@mui/material/Container";
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

const App = () => {
    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCameraIcon />
                    <Typography variant="h6">
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div>
                    <Container maxWidth="sm">
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Hello everyone, this is a photo album
                        </Typography>
                    </Container>
                </div>
            </main>
            
        </>
    );
}

export default App;