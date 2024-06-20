import React from "react";

function Navbar({ onLoginClick }) {
    return (
        <nav>
            <a href="#" onClick={onLoginClick}>Iniciar sesión</a>
        </nav>
    );
}

export default Navbar;

if (document.getElementById("navbar")) {
    createRoot(document.getElementById("navbar")).render(<Navbar />);
}
