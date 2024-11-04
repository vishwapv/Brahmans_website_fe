import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <Box flex={2} bgcolor="#34a4eb" p={4} display="flex" justifyContent="space-between" position="sticky">
            <Box sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
                <Typography component="p"><Instagram /></Typography>
                <Typography component="p"><Facebook /></Typography>
                <Typography component="p"><Twitter /></Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "1rem" }}>
                <Button variant='contained' > <Link to="/login" style={{ textDecoration: "none", color: "white" }}>Login</Link> </Button>
                <Button variant='contained' sx={{ display: { xs: "none", sm: "block" } }}>Contact us</Button>
            </Box>
        </Box>
    )
}

export default Header
