import React from 'react';
import ReactDOM from 'react-dom/client';
import './Landing.css';

import Sidebar from '';
import Navbar from '';

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