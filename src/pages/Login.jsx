import { Box, Button, Card, Container, TextField, Typography, useMediaQuery, ThemeProvider, createTheme } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const theme = createTheme();

const Login = () => {
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ margin: isMobile ? "1rem" : "5rem" }}>
                <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Card sx={{
                        display: "flex",
                        justifyContent: "center",
                        height: isMobile ? "50vh" : "50vh",
                        bgcolor: "white",
                        width: isMobile ? "100%" : "50%",
                        padding: "0.5rem",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "1.5rem",
                    }}>
                        <Typography variant='h6' textAlign="center">
                            Welcome to Vishwas Gowda Website
                        </Typography>
                        <Typography variant='h5' textAlign="center">
                            Login
                        </Typography>
                        <TextField
                            id="username"
                            label="User Name"
                            variant="standard"
                            fullWidth={isMobile}
                        />
                        <TextField
                            id="password"
                            label="Password"
                            variant="standard"
                            fullWidth={isMobile}
                        />
                        <Button sx={{
                            bgcolor: "#34a4eb",
                            color: "black",
                            width: isMobile ? "100%" : "auto",
                        }}>
                            Login
                        </Button>
                        <Typography variant="body2">
                            Don’t have an account?{' '}
                            <Link to="/register" style={{ color: "#34a4eb", textDecoration: "none", fontWeight: "bold" }}>
                                Click here to register
                            </Link>
                        </Typography>

                    </Card>
                </Container>
            </Box>
        </ThemeProvider>
    );
}

export default Login;
