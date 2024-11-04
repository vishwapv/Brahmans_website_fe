import React from 'react'
import { Box, Button, Card, Container, TextField, Typography, useMediaQuery, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme();

const Registration = () => {
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ margin: isMobile ? "1rem" : "5rem" }}>
                <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Card sx={{
                        display: "flex",
                        justifyContent: "center",
                        minHeight: isMobile ? "50vh" : "50vh",
                        bgcolor: "white",
                        width: isMobile ? "100%" : "50%",
                        padding: "0.5rem",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "1.5rem",
                    }}>

                        <Typography variant='h5' textAlign="center">
                            Registration
                        </Typography>
                        <TextField
                            id="username"
                            label="User Name"
                            variant="standard"
                            fullWidth={isMobile}
                        />
                        <TextField
                            id="password"
                            label="email"
                            variant="standard"
                            fullWidth={isMobile}
                        />
                        <TextField
                            id="password"
                            label="Phone Number"
                            variant="standard"
                            fullWidth={isMobile}
                        />
                        <TextField
                            id="password"
                            label="Password"
                            variant="standard"
                            fullWidth={isMobile}
                        />
                        <TextField
                            id="password"
                            label="Confirm Password"
                            variant="standard"
                            fullWidth={isMobile}
                        />
                        <Button sx={{
                            bgcolor: "#34a4eb",
                            color: "black",
                            width: isMobile ? "100%" : "auto",
                        }}>
                            Register
                        </Button>


                    </Card>
                </Container>
            </Box>
        </ThemeProvider>
    )
}

export default Registration
