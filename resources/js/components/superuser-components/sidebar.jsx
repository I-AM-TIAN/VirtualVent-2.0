import React from "react";
import { createRoot } from "react-dom/client";
import "../../../css/components/superuser-components/sidebar.css";

function SideBar() {
    return (
        <>
            <div class="sidebar">
                <div class="title">VirtualVent</div>
                <a href="#home">Inicio</a>
                <a href="/superusers">Super Usuarios</a>
                <a href="#clients">Corporativos</a>
            </div>
        </>
    );
}

export default SideBar;

if (document.getElementById("sidebar")) {
    createRoot(document.getElementById("sidebar")).render(<SideBar />);
}
