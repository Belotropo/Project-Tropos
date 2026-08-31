<?php
// Requerimos el archivo de conexión a la base de datos (db.php)
require 'db.php';

// Definimos los datos del primer usuario administrador
$nombre = 'administrador';
$email = 'admin@gmail.com';

// Encriptamos la contraseña ('123456') usando password_hash por seguridad
$password = password_hash('123456', PASSWORD_DEFAULT);

// Corrección: Se cambia 'nombre' por 'name' para que coincida con tu base de datos física
$sql = "INSERT INTO usuarios (name, email, password) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);

// Validación de seguridad para atrapar el fallo de MySQL y evitar que colapse Postman
if (!$stmt) {
    die("Error crítico en la consulta SQL: " . $conn->error);
}

// Asociamos los 3 parámetros tipo string ('sss')
$stmt->bind_param('sss', $nombre, $email, $password);

// Ejecutamos la consulta y verificamos si se guardó correctamente
if ($stmt->execute()) {
    echo "Administrador creado correctamente"; 
} else {
    echo "Error al ejecutar el guardado: " . $stmt->error; 
}
?>