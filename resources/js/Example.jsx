import React from 'react';
import { createRoot } from 'react-dom/client'

export default function Example(){
    return(
        <h1>Esto es un ejemplo</h1>
    );
}

if(document.getElementById('example')){
    createRoot(document.getElementById('example')).render(<Example/>)
}