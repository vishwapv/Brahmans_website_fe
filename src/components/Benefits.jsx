import { Box, Paper, Stack, Typography, IconButton } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const image1 = require("../assets/images/deepa images.jpg");
const image2 = require("../assets/images/rangoli.jpg");
const image3 = require("../assets/images/meditation-1384758_1280.jpg");
const image4 = require("../assets/images/meditation2.jpg");
const image5 = require("../assets/images/galaxy.jpg")
const image6 = require("../assets/images/nature.jpeg");

const Benefits = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: "black",
        width: "350px",
        height: "350px",
        position: "relative",
        overflow: "hidden"
    }));

    const images = [image1, image2, image3, image4, image6, image5]; // array of images

    return (
        <Box>
            <Stack
                spacing={{ xs: 3, sm: 6 }}
                direction="row"
                useFlexGap
                sx={{
                    flexWrap: 'wrap',
                    display: "flex",
                    justifyContent: "center",
                    gap: "2rem",
                    alignItems: "center"
                }}
            >
                {images.map((img, index) => (
                    <Item key={index}>
                        {/* Image */}
                        <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

                        {/* Overlay Text and Icon */}
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay
                                color: 'white',
                                opacity: 0,
                                transition: 'opacity 0.3s ease-in-out',
                                '&:hover': { opacity: 1 } // Show overlay on hover
                            }}
                        >
                            <Typography variant="h6">Brahmana Community</Typography>
                            <IconButton sx={{ color: "white" }}>
                                <ArrowForwardIosIcon />
                            </IconButton>
                        </Box>
                    </Item>
                ))}
            </Stack>
        </Box>
    );
}

export default Benefits;
