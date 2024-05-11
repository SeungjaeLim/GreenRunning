// src/components/Clock.js
import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

function Clock() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timerId);
    }, []);

    return (
        <Typography variant="h5" component="div" sx={{ 
            flexGrow: 1, 
            textAlign: 'center',
            marginBottom: '20px'
        }}>
            {currentTime.toLocaleTimeString()}
        </Typography>
    );
}

export default Clock;
