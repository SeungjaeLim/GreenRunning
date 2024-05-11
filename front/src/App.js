// src/App.js
import React from 'react';
import { CssBaseline, Container, Grid, Box } from '@mui/material';
import Clock from './components/Clock';
import './App.css'
import MapView from './components/MapView';
import FloggingControls from './components/FloggingControls';

function App() {
    return (
        <>
            <CssBaseline />
            <Container maxWidth="sm" sx={{ marginTop: 2 }}>
                <Box sx={{ my: 2 }}>
                    <Clock />
                </Box>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <MapView />
                    </Grid>
                    <Grid item xs={12}>
                        <FloggingControls />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default App;
