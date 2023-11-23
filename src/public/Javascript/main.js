// Script para generar un código alfanumérico y mostrarlo en el modal

    // Función para generar un código alfanumérico
    function generarCodigo() {
        // Crea un código alfanumérico aleatorio de longitud 8
        return Math.random().toString(36).substring(2, 10);
    }

    // Función para generar y mostrar el código en el modal
    function generarYMostrarCodigo() {
        // Genera el código
        const codigo = generarCodigo();

        // Obtiene el contenedor del código en el modal
        const codigoContainer = document.getElementById("codigoContainer");

        // Elimina cualquier contenido existente en el contenedor
        codigoContainer.innerHTML = '';

        // Crea un elemento <p> para mostrar el código
        const codigoParrafo = document.createElement("p");
        codigoParrafo.textContent = 'Tu código es:' + ' ' + codigo;

        // Inserta el párrafo con el código en el contenedor
        codigoContainer.appendChild(codigoParrafo);
    }

