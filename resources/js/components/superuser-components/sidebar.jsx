import React from "react";
import { createRoot } from "react-dom/client";
import "../../../css/components/superuser-components/sidebar.css";

function SideBar() {
    return (
        <>
            <aside>
                <ul>
                    <li>Inicio</li>
                    <li>Super Usuarios</li>
                    <li>Corporativos</li>
                </ul>
            </aside>
        </>
    );
}

export default SideBar;

if (document.getElementById("sidebar")) {
    createRoot(document.getElementById("sidebar")).render(<SideBar />);
}
