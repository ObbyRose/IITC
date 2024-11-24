import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const AboutPage = () => {
return (
    <Container maxWidth="md" sx={{ marginTop: 5 }}>
        <Box sx={{ textAlign: 'center', color:"#ffff" }}>
            <Typography variant="h3" gutterBottom>
                About the Pokémon Pokedex App
            </Typography>
            <Typography variant="body1" paragraph>
                Welcome to the Pokémon Pokedex app! This app allows you to search, view, and explore information about various Pokémon. It provides details like name, abilities, and types for each Pokémon.
            </Typography>
            <Typography variant="body1" paragraph>
                The app uses data fetched from the official PokeAPI, and it is designed to be easy to use with a mobile-first approach. You can search for Pokémon, view their details, and load more results as you explore.
            </Typography>
            <Typography variant="h5" gutterBottom>
                Creator:
            </Typography>
            <Typography variant="body1" paragraph>
                This app was created by <strong>Tal Maman</strong>, a passionate developer who loves Pokémon and web development. The goal of this project is to learn and demonstrate various web development concepts using React and Material-UI.
            </Typography>
        <Box sx={{ mt: 4 }}>
            <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/"
                sx={{ textDecoration: 'none' }}
            >
                Go Back to Home
            </Button>
            </Box>
        </Box>
    </Container>
);
};

export default AboutPage;
