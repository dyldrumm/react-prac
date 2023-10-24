import React, {Component} from 'react';

import './Sidebar.css';
import { SidebarItems } from "./SidebarItems.js"; 

class Sidebar extends Component {
    render() {
        return(
            <nav classname = "Sidebar">
                <ul className = "SidebarItems">
                    {SidebarItems.map((item, index)=>{
                        return(
                            <li key = {index}>
                                <a href = {item.url} className = {item.cName}>
                                    {item.title}
                                    <i className = {item.icon}></i>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        );
    }
}
export default Sidebar;