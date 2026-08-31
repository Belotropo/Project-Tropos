<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Login Tropos</title> <!-- Título de la pestaña [17] -->
    
    <!-- Estilos básicos aplicados en la clase para centrar y dar diseño a la caja [16, 18-20] -->
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #F4F4F4; /* Fondo gris claro [18] */
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .login {
            background-color: white; /* Caja de fondo blanco [19] */
            padding: 30px; /* Espaciado interno [19] */
            border-radius: 10px; /* Bordes redondeados [19, 20] */
            width: 320px; /* Ancho del formulario [20] */
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="login">
        <h2>Iniciar sesión</h2> <!-- Título visual [15] -->
        
        <!-- El formulario envía los datos por el método seguro POST hacia login.php [21] -->
        <form action="login.php" method="POST">
            <!-- Campo obligatorio tipo email para el correo [22, 23] -->
            <input type="email" name="email" placeholder="Correo" required><br><br>
            
            <!-- Campo obligatorio tipo password para la contraseña oculta [23, 24] -->
            <input type="password" name="password" placeholder="Contraseña" required><br><br>
            
            <!-- Botón que ejecuta el envío (submit) [24] -->
            <button type="submit">Ingresar</button>
        </form>
    </div>
</body>
</html>