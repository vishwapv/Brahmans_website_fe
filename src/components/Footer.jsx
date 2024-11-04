import { Box, Typography } from '@mui/material';
import React from 'react';
const logo = require("../assets/logo/7.jpg")

const Footer = () => {

    return (
        <Box bgcolor="#34a4eb" width="100%" top="20px">
            <Box
                display="flex"
                justifyContent="center"
                gap="2rem"
                sx={{
                    flexDirection: { xs: 'column', sm: 'row' }, // Switch to column on small screens
                    gap: 2,
                    marginTop: "4rem",
                }}

            >
                {/* Logo Section */}
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "4rem" }}>
                    <Typography variant="p"> <img src={logo} alt="" width="100px" height="100px" gap="1rem" display="flex" /></Typography>
                </Box>

                {/* Useful Links Columns */}
                <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} gap="8rem" justifyContent="center" alignItems="center" marginTop="4rem" >
                    {/* Column 1 */}
                    <Box sx={{ display: "flex", gap: "2rem", flexDirection: "column", alignItems: "center", }}>
                        <Typography component="p" >Useful Links</Typography>
                        <Typography component="p" fontWeight="bold" fontSize="1.2rem">About Us</Typography>
                        <Typography component="p" fontWeight="bold" fontSize="1.2rem">Board members</Typography>
                        <Typography component="p" fontWeight="bold" fontSize="1.2rem">Our Founding Principle</Typography>
                        <Typography component="p" fontWeight="bold" fontSize="1.2rem">Gallery</Typography>

                    </Box>

                    {/* Column 2 */}
                    <Box sx={{ display: "flex", gap: "2rem", flexDirection: "column", alignItems: "center" }}>
                        <Typography component="p" >Useful Links</Typography>
                        <Typography component="p" fontWeight="bold" fontSize="1.2rem">Q & A</Typography>
                        <Typography component="p" fontWeight="bold" fontSize="1.2rem">Contact Us</Typography>
                        <Typography component="p" fontWeight="bold" fontSize="1.2rem">Cultural activities</Typography>
                        <Typography component="p" fontWeight="bold" fontSize="1.2rem">Aduge Udyogigala Sahaya Nidhi</Typography>
                    </Box>

                    {/* Column 3 */}
                    <Box sx={{ display: "flex", gap: "2rem", flexDirection: "column", alignItems: "center" }}>
                        <Typography component="p">Useful Links</Typography>
                        <Typography component="p" fontWeight="bold" fontSize="1.2rem">Purohitara Kshemabhibruddhi Nidhi</Typography>
                        <Typography component="p" fontWeight="bold" fontSize="1.2rem">Vidhya Nidhi</Typography>
                        <Typography component="p" fontWeight="bold" fontSize="1.2rem">Kala Bhavana Nidhi</Typography>
                        <Typography component="p" fontWeight="bold" fontSize="1.2rem">Veda classes</Typography>
                    </Box>
                </Box>


            </Box>
            <hr style={{ margin: "2rem 0", border: "1px solid #fff", width: "100%" }} />
            <Box textAlign="center">
                <Typography component="p" fontWeight="bold" fontSize="1.1rem">
                    © Copyright - 2024, All Rights Reserved by Vishwas Gowda
                </Typography>
            </Box>
        </Box >
    );
}

export default Footer;
