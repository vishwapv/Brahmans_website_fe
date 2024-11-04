import { Box, Card } from '@mui/material';
import React, { useState, useEffect } from 'react';
const image1 = require('../assets/images/lightCandal.jpg');
const image2 = require('../assets/images/lightBallon.jpg');

const SlidingCard = () => {
    const [currentImage, setCurrentImage] = useState(image1);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => prevImage === image1 ? image2 : image1);
        }, 2000); // Change image every 2 seconds

        // Cleanup the interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <Box sx={{ display: "flex", gap: "1rem", padding: "2rem", alignItems: "center", flexWrap: "wrap" }} >
            <Card
                sx={{
                    width: { xs: '320px', sm: '1350px' },
                    height: { xs: '300px', sm: '700px' },
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden'
                }}
            >
                <img
                    src={currentImage}
                    alt="Sliding content"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'opacity 1s ease-in-out', objectPosition: 'center', margin: 'auto', display: 'block', }}
                />
            </Card>
        </Box>
    );
}

export default SlidingCard;
