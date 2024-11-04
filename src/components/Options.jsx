import React, { useState } from "react";
import { Box, Typography, IconButton, Menu, MenuItem, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Close, KeyboardArrowDown } from "@mui/icons-material";
import { Link } from "react-router-dom";

const logo = require("../assets/logo/7.jpg");

const Options = () => {
    const [anchorEls, setAnchorEls] = useState({ main: null });
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    const handleMenuOpen = (event, key) => {
        setAnchorEls((prev) => ({ ...prev, [key]: event.currentTarget }));
    };

    const handleMenuClose = (key) => {
        setAnchorEls((prev) => ({ ...prev, [key]: null }));
    };

    const menuItems = [
        { label: "INFO", submenu: ["Submenu 1", "Submenu 2", "Submenu 3", "Submenu 4", "Submenu 5"] },
        { label: "BENEFITS", submenu: ["Submenu 1", "Submenu 2", "Submenu 3", "Submenu 4", "Submenu 5"] },
        { label: "RESOURCES", submenu: ["Submenu 1", "Submenu 2", "Submenu 3", "Submenu 4", "Submenu 5"] },
        { label: "VIPRANUDI", submenu: ["Submenu 1", "Submenu 2", "Submenu 3", "Submenu 4", "Submenu 5"] },
        { label: "NEWS", submenu: ["Submenu 1", "Submenu 2", "Submenu 3", "Submenu 4", "Submenu 5"] },
        { label: "HELPINE", submenu: ["Submenu 1", "Submenu 2", "Submenu 3", "Submenu 4", "Submenu 5"] },
    ];

    return (
        <Box flex={3} display="flex" justifyContent="space-around" p={6} alignItems="center">
            {isSmallScreen ? (
                <Box display="flex" flexDirection="column" gap={2} width="100%">
                    <IconButton onClick={anchorEls.main ? () => handleMenuClose("main") : (e) => handleMenuOpen(e, "main")}>
                        <img src={logo} alt="" width="100px" height="100px" />
                        <span>{!anchorEls.main ? <MenuIcon /> : <Close />}</span>
                    </IconButton>

                    {anchorEls.main && (
                        <Box p={2} display="flex" flexDirection="column" gap={2} alignItems="flex-start" width="100%">
                            <Typography component="p" display="flex" justifyContent="center">
                                <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                                    HOME
                                </Link>
                            </Typography>
                            {menuItems.map((item, index) => (
                                <Box key={index}>
                                    <Typography
                                        component="p"
                                        onClick={(e) => handleMenuOpen(e, item.label)}
                                        display="flex"
                                        alignItems="center"
                                        sx={{ cursor: "pointer" }}
                                    >
                                        {item.label} <KeyboardArrowDown />
                                    </Typography>
                                    <Menu
                                        anchorEl={anchorEls[item.label]}
                                        open={Boolean(anchorEls[item.label])}
                                        onClose={() => handleMenuClose(item.label)}
                                        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                                        transformOrigin={{ vertical: "top", horizontal: "left" }}
                                    >
                                        {item.submenu.map((subItem, idx) => (
                                            <MenuItem key={idx} onClick={() => handleMenuClose(item.label)}>
                                                {subItem}
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </Box>
                            ))}
                        </Box>
                    )}
                </Box>
            ) : (
                <>
                    <img src={logo} alt="" width="100px" height="100px" />
                    <Typography component="p">
                        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                            HOME
                        </Link>
                    </Typography>
                    {menuItems.map((item, index) => (
                        <Box key={index}>
                            <Typography
                                component="p"
                                onClick={(e) => handleMenuOpen(e, item.label)}
                                display="flex"
                                alignItems="center"
                                sx={{ cursor: "pointer" }}
                            >
                                {item.label} <KeyboardArrowDown />
                            </Typography>
                            <Menu
                                anchorEl={anchorEls[item.label]}
                                open={Boolean(anchorEls[item.label])}
                                onClose={() => handleMenuClose(item.label)}
                                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                                transformOrigin={{ vertical: "top", horizontal: "left" }}
                            >
                                {item.submenu.map((subItem, idx) => (
                                    <MenuItem key={idx} onClick={() => handleMenuClose(item.label)}>
                                        {subItem}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    ))}
                </>
            )}
        </Box>
    );
};

export default Options;
