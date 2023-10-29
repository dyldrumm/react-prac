import React, {Component} from 'react';

import './Navbar.css';
import { NavbarItems } from "./NavbarItems.js"; 

class Navbar extends Component {
    render() {
        return(
            <nav className = "Navbar">
                <h1>
                    Test Site
                </h1>
                <ul className="NavbarItems">
                    {NavbarItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <a href={item.url} className={item.cName}>
                                    <i className={item.icon}></i>
                                    {item.title}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        );
    }
}
export default Navbar;