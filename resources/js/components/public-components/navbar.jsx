import React from "react";
import '../../../css/components/public-components/navbar.css';
import { IoSearchSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

function Navbar({ onLoginClick }) {
    return (
        <nav>
            <ul className="navbar">
                <li className="navbar_title"><a href="">VirtualVent</a></li>
                <div className="navbar_items_center">
                    <li className="navbar_item"><a href="">Inicio</a></li>
                    <li className="navbar_item"><a href="#">¿Quiénes somos?</a></li>
                    <li className="navbar_item"><a href="#">Encuentranos</a></li>
                </div>
                <div className="navbar_icons">
                    <li className="navbar_icon"><a href=""><IoSearchSharp /></a></li>
                    <li className="navbar_icon"><a href="#" onClick={onLoginClick}><FaUser /></a></li>
                    <li className="navbar_icon"><a href=""><FaShoppingCart /></a></li>
                </div>
            </ul>
        </nav>
    );
}

export default Navbar;

if (document.getElementById("navbar")) {
    createRoot(document.getElementById("navbar")).render(<Navbar />);
}
