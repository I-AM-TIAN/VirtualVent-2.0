<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Inicio</title>
    @viteReactRefresh
    @vite('resources/js/app.js')
</head>

<body>
    <div id="sidebar"></div>
    <div id="corporative"></div>


    <button id="openModalBtn">Registrar Usuario</button>

    <!-- El Modal -->
    <div id="myModal" class="modal">

        <!-- Contenido del Modal -->
        <div class="modalcorporativo">
            <span class="close">&times;</span>
            <h2>Registro de Usuario</h2>
            <form id="registrarcorporativo">
                <label for="nit">Nit:</label>
                <input type="text" id="nit" name="nit" required>

                <label for="razonsocial">Razón social:</label>
                <input type="text" id="razonsocial" name="razonsocial" required>

                <label for="ubicacion">Ubicación:</label>
                <input type="text" id="ubicacion" name="ubicacion" required>

                <label for="correo">Correo:</label>
                <input type="email" id="correo" name="correo" required>

                <label for="celular">Celular:</label>
                <input type="number" id="celular" name="celular" required>

                <button type="submit">Registrar</button>
            </form>
        </div>

    </div>
    <script>
        // Obtener el modal
var modal = document.getElementById("myModal");

// Obtener el botón que abre el modal
var btn = document.getElementById("openModalBtn");

// Obtener el elemento <span> que cierra el modal
var span = document.getElementsByClassName("close")[0];

// Cuando el usuario hace clic en el botón, abre el modal
btn.onclick = function() {
  modal.style.display = "block";
}

// Cuando el usuario hace clic en <span> (x), cierra el modal
span.onclick = function() {
  modal.style.display = "none";
}

// Cuando el usuario hace clic fuera del modal, lo cierra
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
    </script>

</body>

</html>
