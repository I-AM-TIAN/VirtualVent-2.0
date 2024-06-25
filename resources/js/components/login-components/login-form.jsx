import React, { useState } from "react";
import axios from "axios";

function LoginForm({ onClose }) {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/login', formData);
            console.log(response.data);
            // Redirigir basado en la respuesta del servidor
            if (response.data.redirect) {
                window.location.href = response.data.redirect;
            }
        } catch (error) {
            console.error('Error logging in', error);
            if (error.response && error.response.data.message) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage('Error al iniciar sesión. Por favor, intenta nuevamente.');
            }
        }
    };

    return (
        <div className="login-form">
            <h1>Inicia sesión</h1>
            <form onSubmit={handleSubmit}>
                <label>Nombre de usuario:</label>
                <input 
                    type="text" 
                    id="username" 
                    name="username" 
                    value={formData.username}
                    onChange={handleChange}
                />
                <br />
                <label>Contraseña:</label><br />
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    value={formData.password}
                    onChange={handleChange}
                />
                <input type="submit" className="login-button" />
                {errorMessage && <p className="error">{errorMessage}</p>}
                <p>
                    ¿Aún no tienes una cuenta? <a href="">Regístrate</a>
                </p>
            </form>
        </div>
    );
}

export default LoginForm;
