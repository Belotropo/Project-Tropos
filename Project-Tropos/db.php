<?php
$servidor = "192.168.56.11";
$usuario = "Belotropo";
$contrasena = "K7Jn6kF7BF";
$base_datos = "app_prod";

$conn = new mysqli($servidor, $usuario, $contrasena, $base_datos);

if ($conn->connect_error) {
    die("Database connection failed: " . $conn->connect_error);
}
