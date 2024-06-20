import React from "react";
import { createRoot } from "react-dom/client";

export default function Button() {
    return (
        <>
            <button type="submit">
                Enviar
            </button>
        </>
    );
}

if (document.getElementById("button")) {
    createRoot(document.getElementById("button")).render(<Button />);
}
