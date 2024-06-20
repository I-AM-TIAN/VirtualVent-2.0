import React from "react";

function LoginForm({ onClose }) {
    return (
        <>
            <div className="login-form">
                <h1>Inicia sesión</h1>
                <form>
                    <label>Nombre de usuario:</label>
                    <input type="text" id="username" name="username" />
                    <br />
                    <label>Contraseña:</label><br />
                    <input type="password" id="password" name="password" />
                    <input type="submit" className="login-button" />
                    <p>
                        ¿Aún no tienes una cuenta? <a href="">Regístrate</a>
                    </p>
                </form>
            </div>
        </>
    );
}

export default LoginForm;
