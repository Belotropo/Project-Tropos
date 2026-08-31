// Aplicando el estándar Airbnb: Variables inmutables (const) y camelCase
const formularioRegistro = document.getElementById('form-registro');

// Arrow Function para manejar el evento del botón
formularioRegistro.addEventListener('submit', (evento) => {
  // Evitamos que la página se recargue bruscamente
  evento.preventDefault(); 

  // Capturamos lo que el usuario escribió
  const nombreUsuario = document.getElementById('input-nombre').value;
  const correoUsuario = document.getElementById('input-correo').value;

  // Empaquetamos los datos en un objeto
  const nuevoUsuario = {
    nombre: nombreUsuario,
    correo: correoUsuario
  };

  // Enviamos los datos silenciosamente a nuestra ruta /insertar en Node.js
  fetch('http://localhost:3000/insertar', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(nuevoUsuario)
  })
  .then((respuesta) => respuesta.json())
  .then((datos) => {
    // Mostramos el mensaje de éxito que viene del servidor
    alert(datos.mensaje); 
    
    // Cumpliendo el requisito del instructor: limpiar las cajas de texto tras guardar
    formularioRegistro.reset(); 
  })
  .catch((error) => {
    console.error("Error de comunicación:", error);
    alert("Hubo un error al intentar conectar con el servidor.");
  });
});

const cuerpoTabla = document.getElementById('tabla-usuarios');

// Función flecha pura para obtener y pintar los usuarios
const cargarUsuarios = () => {
  fetch('http://localhost:3000/usuarios')
    .then((respuesta) => respuesta.json())
    .then((datos) => {
      // Limpiamos la tabla para que no se dupliquen los datos
      cuerpoTabla.innerHTML = ''; 

      // Iteramos sobre los datos usando forEach según el estándar Airbnb
      datos.forEach((usuario) => {
        cuerpoTabla.innerHTML += `
          <tr>
            <td style="padding: 8px;">${usuario.id}</td>
            <td style="padding: 8px;">${usuario.nombre}</td>
            <td style="padding: 8px;">${usuario.correo}</td>
            <td style="padding: 8px;">
              <button onclick="editarUsuario(${usuario.id}, '${usuario.nombre}', '${usuario.correo}')" style="background-color: blue; color: white; cursor: pointer; margin-right: 5px;">Editar</button>
              <button onclick="eliminarUsuario(${usuario.id})" style="background-color: red; color: white; cursor: pointer;">Eliminar</button>
            </td>
          </tr>
        `;
      });
    })
    .catch((error) => console.error("Error al cargar la tabla:", error));
};

// Ejecutamos la función apenas cargue la página
cargarUsuarios();
// Función flecha para eliminar un usuario por su ID
const eliminarUsuario = (id) => {
  // Confirmación por seguridad antes de borrar
  if (confirm("¿Estás seguro de que deseas eliminar este usuario?")) {
    
    // Enviamos la petición de borrado a Node.js
    fetch(`http://localhost:3000/eliminar/${id}`, {
      method: 'DELETE'
    })
    .then((respuesta) => respuesta.json())
    .then((datos) => {
      alert(datos.mensaje);
      
      // Recargamos la tabla automáticamente para que desaparezca el usuario borrado
      cargarUsuarios(); 
    })
    .catch((error) => console.error("Error de comunicación:", error));
  }
};

// Función flecha para editar un usuario existente
const editarUsuario = (id, nombreActual, correoActual) => {
  // Abrimos ventanas emergentes para que el usuario escriba los nuevos datos
  const nuevoNombre = prompt("Modifica el nombre:", nombreActual);
  const nuevoCorreo = prompt("Modifica el correo:", correoActual);

  // Verificamos que no haya cancelado y que haya escrito algo
  if (nuevoNombre && nuevoCorreo) {
    const datosActualizados = {
      nombre: nuevoNombre,
      correo: nuevoCorreo
    };

    // Enviamos la petición PUT a Node.js
    fetch(`http://localhost:3000/modificar/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datosActualizados)
    })
    .then((respuesta) => respuesta.json())
    .then((datos) => {
      alert(datos.mensaje);
      
      // Recargamos la tabla automáticamente para ver los cambios
      cargarUsuarios(); 
    })
    .catch((error) => console.error("Error de comunicación:", error));
  }
};