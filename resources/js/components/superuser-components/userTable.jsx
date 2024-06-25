import React, { useEffect, useState } from 'react';
import { createRoot } from "react-dom/client";
import axios from 'axios';
import '../../../css/components/superuser-components/userTable.css';

const UserTable = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Realizar la solicitud GET a la API de Laravel
        axios.get('http://localhost:8000/api/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Hubo un error al obtener los datos:', error);
            });
    }, []);

    return (
        <div className='table-container'>
            <h1>Super Usuarios del Sistema</h1>
            <table>
                <thead>
                    <tr>
                        <th>Usuario</th>
                        <th>Fecha de Creación</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.user_name}</td>
                            <td>{new Date(user.created_at).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>  
    );
}

export default UserTable;

if (document.getElementById("users")) {
    createRoot(document.getElementById("users")).render(<UserTable />);
}
