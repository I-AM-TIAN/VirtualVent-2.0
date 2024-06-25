import React from "react";
import { createRoot } from 'react-dom/client';
function TestC(){
    return(
        <>
            <h1>HOLA CORPORATIVO</h1>
        </>
    );
}

export default TestC;

if (document.getElementById("testC")) {
    createRoot(document.getElementById("testC")).render(<TestC />);
}
