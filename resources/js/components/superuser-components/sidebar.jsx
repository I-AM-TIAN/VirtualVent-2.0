import React from "react";
import { createRoot } from 'react-dom/client';
import '../../../css/components/superuser-components/sidebar.css';

function SideBar(){
    return(
        <>
            <h1>LA SIDEBAR</h1>
        </>
    );
}

export default SideBar;

if (document.getElementById("sidebar")) {
    createRoot(document.getElementById("sidebar")).render(<SideBar />);
}
