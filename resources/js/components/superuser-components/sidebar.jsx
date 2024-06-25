import React from "react";
import { createRoot } from 'react-dom/client';
import '../../../css/components/superuser-components/sidebar.css';

function SideBar(){
    return(
        <>
            <div class="sidebar">
        <div class="title">My Sidebar</div>
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#clients">Clients</a>
        <a href="#contact">Contact</a>
    </div>
    <div class="content">
        <h1>Welcome to My Website</h1>
        <p>This is a sample content area to demonstrate the sidebar layout.</p>
    </div>
        </>
    );
}

export default SideBar;

if (document.getElementById("sidebar")) {
    createRoot(document.getElementById("sidebar")).render(<SideBar />);
}
