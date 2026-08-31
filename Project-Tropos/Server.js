const express = require('express'); 
const mysql = require('mysql2');
const cors = require('cors');

// Inicializamos el servidor web
const app = express(); 
const PUERTO = 3000;

// Permisos de seguridad para conectar el Front-end
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));
// Los parámetros locales del instructor + el nuevo puerto
const conexion = mysql.createConnection({
  host: 'localhost',      
  user: 'root',           
  password: '',           
  database: 'cru_app',  
  port: 3306             // NUEVO: Le indicamos la nueva puerta de MySQL
});

// Verificación de conexión (Arrow Function)
conexion.connect((error) => {
  if (error) {
    console.error("Conexión fallida:", error);
    return;
  }
  console.log("¡Conexión exitosa a la base de datos de Tropos!");
});
// ==========================================
// RUTA PARA INSERTAR DATOS EN LA BASE DE DATOS
// ==========================================
app.post('/insertar', (req, res) => {
  // 1. Capturamos los datos que enviará el Front-end (Desestructuración de ES6)
  const { nombre, correo } = req.body;

  // 2. Preparamos la consulta SQL dictada por el instructor
  const sqlInsert = 'INSERT INTO usuarios (name, email) VALUES (?, ?)';

  // 3. Ejecutamos la inserción en la base de datos
  conexion.query(sqlInsert, [nombre, correo], (error, resultado) => {
    if (error) {
      console.error("Error al guardar en la base de datos:", error);
      res.status(500).json({ mensaje: "Error al guardar el usuario" });
      return;
    }
    console.log("¡Usuario guardado con éxito!");
    res.status(200).json({ mensaje: "Usuario agregado correctamente al catálogo" });
  });
});
// ==========================================
// RUTA PARA LEER DATOS DE LA BASE DE DATOS
// ==========================================
app.get('/usuarios', (req, res) => {
  // Instrucción SQL para traer todos los registros
const sqlSelect = 'SELECT id, name AS nombre, email AS correo FROM usuarios';

  conexion.query(sqlSelect, (error, resultados) => {
    if (error) {
      console.error("Error al consultar base de datos:", error);
      res.status(500).json({ mensaje: "Error al obtener los datos" });
      return;
    }
    // Si todo sale bien, enviamos la lista de usuarios al Front-end
    res.status(200).json(resultados);
  });
});
// Encendemos el motor del servidor
// ==========================================
// RUTA PARA ELIMINAR DATOS DE LA BASE DE DATOS
// ==========================================
app.delete('/eliminar/:id', (req, res) => {
  // Capturamos el ID que nos envía el Front-end (Desestructuración)
  const { id } = req.params;

  // Instrucción SQL dictada por el instructor para borrar según el ID
  const sqlDelete = 'DELETE FROM usuarios WHERE id = ?';

  conexion.query(sqlDelete, [id], (error, resultado) => {
    if (error) {
      console.error("Error al eliminar de la base de datos:", error);
      res.status(500).json({ mensaje: "Error al eliminar el usuario" });
      return;
    }
    console.log(`Usuario con ID ${id} eliminado correctamente`);
    res.status(200).json({ mensaje: "Usuario eliminado exitosamente" });
  });
});

// ==========================================
// RUTA PARA MODIFICAR DATOS (Update)
// ==========================================
app.put('/modificar/:id', (req, res) => {
  // Capturamos el ID de la URL y los nuevos datos del cuerpo usando desestructuración
  const { id } = req.params;
  const { nombre, correo } = req.body;

  // Instrucción SQL para actualizar los campos según el ID
  const sqlUpdate = 'UPDATE usuarios SET name = ?, email = ? WHERE id = ?';

  conexion.query(sqlUpdate, [nombre, correo, id], (error, resultado) => {
    if (error) {
      console.error("Error al actualizar en la base de datos:", error);
      res.status(500).json({ mensaje: "Error al modificar el usuario" });
      return;
    }
    console.log(`Usuario con ID ${id} modificado correctamente`);
    res.status(200).json({ mensaje: "Usuario actualizado exitosamente" });
  });
});

app.listen(PUERTO, () => {
  console.log(`Servidor Node.js corriendo perfectamente en el puerto ${PUERTO}`);
});