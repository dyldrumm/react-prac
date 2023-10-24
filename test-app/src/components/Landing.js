import React from 'react';

import './Landing.css';
import Navbar from './nav/Navbar.js';
import Sidebar from './nav/Sidebar.js';

function Landing() {
    return(
        <div classname = "Landing">
            <div classname = "Navbar"><Navbar/></div>
            <div classname = "Sidebar"><Sidebar/></div>
        </div>
    );
}
export default Landing;