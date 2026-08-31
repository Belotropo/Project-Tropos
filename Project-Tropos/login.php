<?php
session_start();
require 'db.php';

// 1. Intentar capturar datos por el método POST tradicional (Formulario/Urlencoded)
$email = $_POST['email'] ?? null;
$password = $_POST['password'] ?? null;

// 2. Si llegó vacío por POST clásico, intentamos leer por si Postman lo envió como RAW JSON
if (!$email || !$password) {
    $raw_input = file_get_contents('php://input');
    $json_data = json_decode($raw_input, true);
    if ($json_data) {
        $email = $json_data['email'] ?? $email;
        $password = $json_data['password'] ?? $password;
    }
}

// 3. Si sigue totalmente vacío, le avisamos a Postman qué llaves debe mandar obligatoriamente
if (!$email || !$password) {
    echo "Error en Postman: No se recibieron las llaves obligatorias ('email' y 'password'). Verifica que estén escritas en minúsculas en tu petición.";
    exit();
}

// 4. Consultar el usuario en la base de datos usando sentencias preparadas contra inyección SQL
$sql = "SELECT id, name, password FROM usuarios WHERE email = ?";
$stmt = $conn->prepare($sql);

if (!$stmt) {
    die("Error crítico en la base de datos: " . $conn->error);
}

$stmt->bind_param('s', $email);
$stmt->execute();
$result = $stmt->get_result();

if ($user = $result->fetch_assoc()) {
    // 5. El usuario existe, ahora verificamos la contraseña con el hash seguro de MySQL
    if (password_verify($password, $user['password'])) {
        // Guardamos los datos de sesión para la trazabilidad de Tropos
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['user_name'] = $user['name'];
        
        echo "Inicio de sesión exitoso. Bienvenido " . $user['name'];
    } else {
        echo "Contraseña incorrecta";
    }
} else {
    echo "Usuario no encontrado";
}
?>
