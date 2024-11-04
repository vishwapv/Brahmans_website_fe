import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Stack } from '@mui/material';
import Dashboard from './pages/Dashboard'
import Header from './components/Header';
import Options from './components/Options';
import Footer from './components/Footer';
import Login from './pages/Login';
import Registration from './pages/Registration';



function App() {
    return (
        <Router>
            <Stack sx={{ display: "flex", flexDirection: "column", width: "100%" }} >
                <Header />
                <Options />
                <Routes>

                    <Route path="/" element={<Dashboard />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Registration />} />

                </Routes>
                <Footer />
            </Stack>
        </Router>
    );
}

export default App;
