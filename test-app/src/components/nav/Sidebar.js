import React, {Component} from 'react';

import "./Sidebar.css";
import { SidebarItems } from "./SidebarItems.js";

class Sidebar extends Component {
    render() {
        return(
            <nav className = "Sidebar">
                <ul className = "SidebarItems">
                    {SidebarItems.map((item, index)=>{
                        return(
                            // Text link portion of Sidebar Item
                            <li key = {index} className = "SidebarItemLink">
                                <a href = {item.url} className = "SidebarItemLinkText">{item.title}</a>
                            </li>
                            //
                        )
                    })}
                </ul>
            </nav>
        );
    }
}
export default Sidebar;