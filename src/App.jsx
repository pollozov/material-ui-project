import { React, useState, useRef } from "react";
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
import MenuIcon from '@mui/icons-material/Menu';

import AddNewForm from "./AddNewForm";
import useStyles from "./styles";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const App = () => {
    const { classes } = useStyles();
    const myRef = useRef(null);
    const executeScroll = () => myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <CssBaseline />
            <AppBar className={classes.bar} position="relative">
                <Toolbar>
                    <MenuIcon className={classes.icon} />
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
                            Hello everyone, this is a photo album, where you can find my photos
                        </Typography>
                        <div className={classes.buttons} >
                            <Grid container spacing={2} justifyContent="center">
                                <Grid item>
                                    <Button variant="contained" color="primary" onClick={executeScroll}>
                                        See my photos
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                                        Add new photo
                                    </Button>
                                    <AddNewForm open={open} onClose={handleClose}  />
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4} ref={myRef}>
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
                    Polina Lozovska
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary">
                    It's my mini project
                </Typography>
            </footer>
        </>
    );
}

export default App;