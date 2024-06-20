import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Navbar from '../components/public-components/navbar.jsx';
import Modal from '../components/public-components/modal.jsx';
import LoginForm from '../components/login-components/login-form.jsx';
import "../../css/components/login-components/login-form.css";

function App() {
    const [isModalVisible, setModalVisible] = useState(false);

    const openModal = () => setModalVisible(true);
    const closeModal = () => setModalVisible(false);

    return (
        <div>
            <Navbar onLoginClick={openModal} />
            <Modal isVisible={isModalVisible} onClose={closeModal}>
                <LoginForm onClose={closeModal} />
            </Modal>
        </div>
    );
}

if (document.getElementById("loginform")) {
    createRoot(document.getElementById("loginform")).render(<App />);
}
