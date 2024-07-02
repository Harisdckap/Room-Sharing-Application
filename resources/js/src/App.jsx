import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import AddHouse from './AddHouse';
import { createRoot } from 'react-dom/client';
import ViewHouse from './ViewHouse';
import Footer from './Footer';
import Register from './Register';


const Apps = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/add-house" element={<AddHouse />} />
                    <Route path="/house-details/:id" element={<ViewHouse/>} />
                    <Route path="/register" element={<Register/>} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

// Render the app in the DOM
const root = createRoot(document.getElementById('app'));
root.render(<Apps/>);
export default Apps;
