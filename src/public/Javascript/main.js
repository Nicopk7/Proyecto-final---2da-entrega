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


    async function registerUser() {
        const emailInput = document.getElementById("email");
        const emailError = document.getElementById("emailError");
      
        emailError.textContent = "";
      
        try {
          const response = await fetch("/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: document.getElementById("username").value,
              email: emailInput.value,
              password: document.getElementById("password").value,
            }),
          });
      
          const data = await response.json();
      
          if (!response.ok) {
            emailError.textContent = data.message;
          } else {
            console.log("Usuario registrado con éxito");
            window.location.href = data.redirectUrl;
          }
        } catch (error) {
          console.error("Error al realizar la solicitud:", error);
        }
      }
      
    
      async function login() {
        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");
      
        try {
          const response = await fetch("/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: emailInput.value,
              password: passwordInput.value,
            }),
          });
      
          const data = await response.json();
      
          if (!response.ok) {
            console.error(data.message);
          } else {
            console.log("Inicio de sesión exitoso");
            window.location.href = data.redirectUrl;
          }
        } catch (error) {
          console.error("Error al realizar la solicitud:", error);
        }
      }