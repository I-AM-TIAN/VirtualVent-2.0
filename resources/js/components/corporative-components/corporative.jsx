import React, { useEffect, useState } from 'react';
import { createRoot } from "react-dom/client";
import axios from 'axios';
import '../../../css/components/corporative-components/corporative.css';

const Corporative = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Realizar la solicitud GET a la API de Laravel
        axios.get('http://localhost:8000/api/corporative')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Hubo un error al obtener los datos:', error);
            });
    }, []);

    return (
        <div className='table-container'>
            <h1>Usuarios Corporativos del Sistema</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nit</th>
                        <th>Razon Social</th>   
                        <th>Direccion</th>
                        <th>Correo Electrónico</th>
                        <th>Telefono</th>
                        <th>Estado</th>
                        <th>Fecha de Creación</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.nit}</td>
                            <td>{user.razon_social}</td>
                            <td>{user.direccion}</td>
                            <td>{user.email}</td>
                            <td>{user.telefono}</td>
                            <td>{user.estado}</td>
                            <td>{new Date(user.created_at).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>  
    );
}

export default Corporative;

if (document.getElementById("corporative")) {
    createRoot(document.getElementById("corporative")).render(<Corporative />);
}
