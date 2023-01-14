import React from "react";
import Typography from '@mui/material/Typography';
import { AppBar } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from '@mui/material/CssBaseline';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Toolbar from '@mui/material/Toolbar';
import Container from "@mui/material/Container";
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

import useStyles from "./styles";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const App = () => {
    const { classes } = useStyles();

    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCameraIcon className={classes.icon} />
                    <Typography variant="h6">
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container maxWidth="sm">
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Hello everyone, this is a photo album
                        </Typography>
                        <div className={classes.buttons} >
                            <Grid container spacing={2} justifyContent="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        See my photos
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        Secondary action
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={4}>
                                <Card className={classes.card}>
                                    <CardMedia 
                                        className={classes.cardMedia} 
                                        image="https://source.unsplash.com/random"
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5">
                                            Heading
                                        </Typography>
                                        <Typography>
                                            This is media card. You can use this section to describe the content
                                        </Typography>

                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            View
                                        </Button>
                                        <Button size="small" color="primary">
                                            Edit
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
                
            </main>
            
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary">
                    Something here
                </Typography>
            </footer>
        </>
    );
}

export default App;