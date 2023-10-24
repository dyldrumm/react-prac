import React from 'react';
import ReactDOM from 'react-dom/client';

import './Landing.css';
import Navbar from './nav/Navbar.js';
import Sidebar from './nav/Sidebar.js';

function Landing() {
    return(
        <div classname = "LandingRoot">
            <div classname = "Navbar">
                <Navbar/>
            </div>
            <div classname = "Sidebar">
                <Sidebar/>
            </div>
        </div>
    );
}
export default Landing;