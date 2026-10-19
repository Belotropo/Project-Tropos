# Bitacora de aprendizaje de Tropos

## 2026-10-13 — 09:23 (-05:00)

### Objetivo de la sesion

Comprobar que Apache puede ejecutar PHP en `web01`, entendiendo cada diagnostico antes de seguir con la conexion a MariaDB.

### Lo que se comprobo y aprendio

- `httpd` (Apache) ya estaba instalado en `web01`. El nombre del paquete en CentOS es `httpd`, no `apache`.
- Un paquete instalado no implica que su servicio este ejecutandose. `systemctl status` permite ver el estado del servicio.
- Se inicio Apache y se habilito para iniciar automaticamente al arrancar la VM. `active (running)` indica que corre ahora; `enabled` indica que se iniciara en futuros arranques.
- PHP 8.0.30, PHP-FPM y sus dependencias se instalaron en `web01`.
- PHP-FPM aparecia activo. Su estado `disabled` no significa que estuviera detenido; indica que no se habilito expresamente para arrancar por si solo. Apache mostraba una configuracion relacionada con PHP-FPM.
- La pagina de prueba de CentOS que se vio en el navegador confirmaba que Apache respondia, pero por si sola no demostraba que pudiera ejecutar PHP.
- En `/var/www/html`, el usuario `vagrant` no podia escribir el archivo de prueba porque no tenia permisos. Al entrar a una shell de root, pudo crearlo. Tambien se aprendio que `sudo echo ... > archivo` no eleva los permisos de la redireccion `>`: esa redireccion la procesa la shell actual.
- El archivo `/var/www/html/test.php` contiene una etiqueta de apertura de PHP y una instruccion `echo`. El texto suelto dentro de una seccion PHP no es una instruccion valida; `echo` permite producir texto como salida.
- Ejecutar `php /var/www/html/test.php` imprimio `This is my web page test`. Esto comprobo que el interprete PHP puede ejecutar el archivo desde la terminal.
- `curl` permite hacer solicitudes HTTP desde la terminal. La opcion `-i` incluye los encabezados de respuesta; `localhost` se refiere a la misma VM donde se ejecuta el comando.
- La solicitud `curl -i http://localhost/test.php` devolvio `HTTP/1.1 200 OK`, un encabezado `X-Powered-By: PHP/8.0.30` y el texto esperado. Esto confirmo que la ruta HTTP pasa por Apache y ejecuta PHP.
- La misma frase ya se ve en el navegador en `http://192.168.56.10/test.php`. No fue necesario reiniciar Vagrant para comprobar el cambio del archivo PHP.

### Estado conocido al cerrar

- En `web01`, Apache esta instalado, activo y habilitado.
- En `web01`, PHP 8.0.30 puede ejecutarse desde la terminal y a traves de Apache.
- El archivo de prueba `/var/www/html/test.php` sigue en la VM; es temporal y falta retirarlo cuando terminemos las comprobaciones.
- MariaDB Server se instalo en `db01` en una sesion anterior; se habia iniciado y habilitado. Falta volver a comprobar su estado despues del ultimo arranque.
- En una sesion posterior se instalo `php-mysqlnd` en `web01`; `php -m` confirmo `mysqli`, `mysqlnd` y `pdo_mysql`. Ese conector sirve para PHP, pero ya no es necesario para el backend elegido de Tropos.

### Siguiente paso

Definir y construir gradualmente el backend de Tropos con Python/Django. Antes de conectar la aplicacion, comprobar el estado de MariaDB y decidir con Marco el metodo de ejecucion/despliegue de Django que corresponda a la etapa del roadmap.

## 2026-10-14 — 05:16 (-05:00)

### Decisiones sobre Tropos y el roadmap

- Tropos es un proyecto academico y un vehiculo para aprender DevOps; no hay que tratarlo como una empresa que Marco necesariamente vaya a fundar.
- La idea de producto es una tienda original de ropa deportiva con membresia VIP, inspirada en ese tipo de modelo comercial, sin copiar marca, textos ni contenido de otra tienda.
- La prioridad de este trabajo es avanzar el roadmap DevOps; la tienda sera el proyecto practico que acompana el aprendizaje. Las funciones de producto se definiran gradualmente, sin construir funcionalidades por anticipado.
- Marco no tiene un backend existente que haya que conservar y prefiere Python. Se eligio Django porque quiere sus herramientas integradas, como el panel administrativo y soporte para cuentas.
- Se acordo adaptar las actividades especificas de Tropos del roadmap a Python/Django y conservar los objetivos y el orden de aprendizaje DevOps. Las descripciones originales de las lecciones del curso se mantienen; solo se adaptan las tareas marcadas para Tropos.
- Se actualizo `Documentos/ROADMAP Tropos.txt` para retirar PHP como tecnologia objetivo de Tropos. El trabajo previo con Apache, PHP y `php-mysqlnd` se conserva como practica de Linux/servicios, pero no obliga a usar PHP en la aplicacion.
- Aun no se ha decidido el servidor WSGI/proxy ni la forma concreta de servir Django en cada fase; se elegira cuando el roadmap llegue a ese despliegue.
- A peticion de Marco, guiar con objetivos y explicaciones, pero sin pegar comandos o codigo antes de que intente deducirlos; dar instrucciones claras sobre que hacer y ayudar a interpretar resultados.

### Continuacion

Antes de desarrollar Django, confirmar el estado de MariaDB tras el ultimo reinicio y seguir con los objetivos de la Fase 1. No desinstalar PHP ni eliminar `test.php` hasta decidir si se usan como practica separada o se limpian de forma intencional.

## 2026-10-14 — 07:06 (-05:00)

### Objetivo de la sesion

Confirmar el conector disponible en PHP y comprobar que MariaDB escucha en la red privada; empezar la revision de firewall sin cambiar reglas.

### Lo que se comprobo y aprendio

- `php -m` en `web01` muestra `mysqli`, `mysqlnd` y `pdo_mysql`. Son conectores para PHP y MariaDB/MySQL; como Tropos usara Python/Django, no son requisito para su backend.
- En `db01`, `systemctl status mariadb` mostro el servicio `active (running)` y `enabled`: esta en ejecucion y configurado para iniciar automaticamente.
- `sudo ss -ltnp | grep :3306` en `db01` mostro `mariadbd` escuchando en `*:3306`, es decir, en todas las interfaces de la VM.
- Se aprendio que `nc` espera el host y el puerto como argumentos separados, no unidos por dos puntos. Una prueba TCP a `192.168.56.20` puerto `3306` desde la propia `db01` y desde `web01` devolvio `Connected`.
- La prueba TCP confirma que el puerto es alcanzable desde `web01`, no que MariaDB acepte credenciales o consultas.
- `systemctl status firewalld` en `db01` mostro `inactive (dead)` y `disabled`.
- `sudo nft list ruleset` no imprimio reglas; no se hicieron cambios. Esto no prueba por si solo la ausencia de todos los controles de red fuera de nftables.
- Se explico que revisar y limitar el acceso a la base de datos es una medida de minimo privilegio; el objetivo posterior es permitir solo lo necesario desde `web01`.

### Estado y punto exacto para retomar

- No se habilito `firewalld`, no se modificaron reglas nftables y no se instalo nada en esta sesion.
- Pendiente: inspeccionar la configuracion persistente de firewall de `db01` de forma offline, en particular como preservar SSH/Vagrant antes de considerar una regla para MariaDB.
- No abrir el puerto 3306 a todo origen. Primero entender las reglas existentes y acordar el cambio; idealmente permitir TCP 3306 solo desde `192.168.56.10`.
- Despues de la revision de red, continuar con las comprobaciones y la provision reproducible de la Fase 1, adaptada a Python/Django y MariaDB.
- Proxima sesion: explicar que herramienta consultar y que significa su resultado antes de pedir cualquier cambio.

## 2026-10-18 — 05:35 (-05:00)

### Definicion del producto y alcance inicial

- Marco confirmo que Tropos es un proyecto academico y que su prioridad en esta sesion es aprender DevOps; la tienda sera el vehiculo practico.
- La primera linea de producto sera activewear/ropa deportiva con publico inclusivo.
- El backend previsto sigue siendo Python/Django, pero no se desarrollara hasta que haya una necesidad clara de datos dinamicos. La primera entrega puede ser una vitrina estatica.
- Marco no quiere estudiar HTML/CSS ahora y pidio que yo construya la interfaz; el aprendizaje de esta etapa se enfocara en entender su despliegue y operacion.
- La referencia es una estetica editorial de activewear premium y una idea de membresia VIP, pero Tropos tiene contenido y visuales originales; no se copia el diseno ni los recursos de otras marcas.

### Prototipo creado

- Se creo `tropos-web/index.html` con una portada en espanol, navegacion, hero ilustrado, coleccion conceptual de tres prendas, manifiesto de marca, seccion Club Tropos y aviso de que productos/membresia son conceptuales.
- Se creo `tropos-web/styles.css` con estilos responsive para escritorio y movil, usando ilustraciones SVG propias integradas en el HTML y sin dependencias de terceros.
- Se creo `tropos-web/script.js` para el menu movil accesible (estado expandido, cierre al elegir enlace y con Escape).
- No hay backend, carrito, pagos, inventario real, registro de usuarios ni persistencia. Los enlaces solo navegan secciones; el prototipo indica claramente que no procesa compras ni registros.
- No se desplego en Vagrant todavia. `web01` continua con Apache/PHP de la practica anterior y Tropos aun no corre alli.

### Validacion realizada

- `node --check` paso para `tropos-web/script.js`.
- La pagina se abrio en el navegador integrado y se reviso visualmente en escritorio y movil.
- Se comprobo el menu movil: abre y cierra con Escape; no hubo desbordamiento horizontal en 390 px.
- Se revisaron 14 enlaces internos y no se encontraron destinos rotos.

### Siguiente paso

Desplegar la pagina estatica en `web01` y comprobarla desde el navegador del host. Antes, decidir si `firewalld` sigue activo: se habilito para iniciar al arranque en `db01`; su acceso SSH desde Vagrant y TCP 3306 desde `web01` se probaron con el firewall activo antes de apagar las VMs. Al retomar, no repetir todas las comprobaciones; verificar solo el estado actual necesario para continuar con seguridad.

## 2026-10-17 — 20:00 (-05:00)

### Objetivo de la sesion

Verificar las IP actuales y preparar una regla de firewalld para limitar el acceso a MariaDB a `web01`, conservando SSH.

### Lo que se comprobo y aprendio

- `web01` conserva `192.168.56.10` y `db01` conserva `192.168.56.20`; no hace falta cambiar las IP.
- `ip config` no es sintaxis valida para la herramienta `ip`; `ip -d address` muestra las interfaces y direcciones con detalle.
- Se reviso otra vez la zona predeterminada `public`: tiene permitidos los servicios `cockpit`, `dhcpv6-client` y `ssh`, y no tenia puertos ni reglas enriquecidas antes del cambio.
- Se explico que una regla enriquecida puede filtrar por familia IP, origen, puerto y protocolo; el objetivo es permitir solo TCP 3306 desde `192.168.56.10`, sin tocar DHCP ni las direcciones.
- Un primer intento de agregar la regla fallo porque tenia espacios alrededor de `=`. No se aplico ese intento. El segundo intento devolvio `success`.
- `firewall-offline-cmd --zone=public --list-all` confirmo que la regla persistente quedo guardada: origen `192.168.56.10`, puerto TCP `3306`, accion `accept`. SSH sigue listado en los servicios permitidos.
- Se inicio `firewalld` con privilegios de administrador. La orden sin `sudo` fallo por permisos; la orden con `sudo` funciono.
- El estado actual mostrado al cierre fue `firewalld active (running)` y `disabled`: esta filtrando ahora, pero aun no esta habilitado para iniciar automaticamente al arrancar.

### Estado al pausar y siguiente paso

- No cerrar la sesion SSH actual abierta en `db01` hasta comprobar que se puede abrir otra.
- No habilitar aun `firewalld` para arranque automatico.
- Siguiente: desde una segunda ventana de PowerShell, probar una nueva conexion `vagrant ssh db01`. Si funciona, probar desde `web01` una conexion TCP hacia `192.168.56.20:3306`.
- Si ambas pruebas funcionan, verificar que la regla esta activa y despues decidir habilitar firewalld al arranque. No asumir que el trafico desde otros origenes esta bloqueado sin probarlo/verificar la politica efectiva.
- Despues retomar los objetivos de Fase 1 adaptados a Python/Django y MariaDB.

## 2026-10-18 — 05:41 (-05:00)

### Direccion visual de Tropos

- Marco rechazo la paleta naranja/terracota y pidio una imagen mas deportiva, con negro, rosa y azul, y fotografias de personas reales en lugar de dibujos.
- Se actualizo `tropos-web/index.html` y `tropos-web/styles.css`: fondo claro frio, tipografia oscura, acentos rosa/azul, seccion manifiesto oscura y fotografia deportiva en el hero, la coleccion y el manifiesto.
- Las fotos son ilustrativas y se sirven desde Unsplash; la pagina enlaza su licencia e indica que las prendas son conceptuales. La carga de fotos requiere conexion a Internet.

### Validacion

- `node --check tropos-web/script.js` y `git diff --check` pasaron.
- La pagina se abrio en navegador; las cinco imagenes cargaron correctamente.
- A 390 px no se encontro desbordamiento horizontal; el menu movil abrio y cerro con Escape.
- Sigue siendo un prototipo estatico: no tiene compras, pagos, registro ni catalogo dinamico, y aun no esta desplegado en Vagrant.

## 2026-10-18 — 05:43 (-05:00)

### Despliegue de la vitrina en `web01`

- Se publicaron `tropos-web/index.html`, `styles.css` y `script.js` en `/var/www/html` de `web01`, conservando los demas archivos existentes del document root.
- Las VMs estaban encendidas. El primer intento mostro que `/vagrant` no tenia la copia mas reciente del host; `vagrant rsync web01` sincronizo el proyecto y permitio completar el despliegue.
- Se aplicaron los contextos SELinux predeterminados para `/var/www/html`. Apache (`httpd`) esta activo y habilitado al arranque.
- La pagina esta disponible desde el host del laboratorio en `http://192.168.56.10/`; se recibio HTTP 200 y se abrio correctamente en navegador.
- Esto solo la publica en la red privada del laboratorio; no es un despliegue publico en Internet. Las imagenes dependen de Unsplash y de una conexion externa.

## 2026-10-18 — 18:29 (-05:00)

### Cierre de sesion y conceptos aclarados

- Marco confirmo que le gusta la direccion visual; la vitrina introductoria ya esta desplegada en `web01`.
- Se aclaro que la version actual es una sola pagina introductoria, no una tienda funcional. Aun no existen catalogo dinamico, fichas de producto, carrito, referidos, contacto ni compras.
- Para una tienda dinamica, varias prendas pueden compartir una plantilla de detalle. Django obtiene los datos del producto solicitado y los combina con la plantilla al responder; no crea ni guarda un HTML distinto para cada prenda. Si el producto no existe en los datos, se muestra como no encontrado.
- Antes de frameworks como Django, los sitios podian mantener paginas HTML individuales o generar HTML desde programas del servidor; PHP comenzo en 1994 y se publico en 1995. La reutilizacion de plantillas no es exclusiva de Django.
- Se explico que las areas principales del sitio pueden tener rutas/vistas separadas, mientras comparten estilos y componentes. El carrito es una vista que muestra los articulos agregados, no un contenedor de paginas de producto.

### Punto para retomar

- La vitrina publicada sigue siendo el entregable actual. Continuar el roadmap gradualmente, sin asumir que toca construir toda la tienda de inmediato.
- Marco suele apagar las VMs con `vagrant halt` desde PowerShell al terminar el dia.

## 2026-10-19 — 04:27 (-05:00)

### Prototipo de tienda Tropos

- Por decision de Marco, se amplio la vitrina a un prototipo estatico navegable, sin backend Django/MariaDB ni procesamiento de pagos.
- Se conservaron la portada y la identidad visual; se agregaron las paginas de catalogo, detalle de producto reutilizable, carrito, referidos y contacto.
- `shop.js` contiene los datos ilustrativos de seis prendas y usa una sola plantilla `producto.html?id=...` para mostrar sus fichas. El catalogo permite buscar por nombre/color y filtrar por categoria.
- El carrito permite elegir talla y cantidad, cambiar cantidades, quitar lineas y conserva temporalmente su contenido en `localStorage` del navegador.
- El formulario de contacto solo muestra una vista previa local; no envia ni guarda mensajes. El checkout informa claramente que no crea pedidos ni realiza cobros. Productos, precios, inventario, referidos y fotos siguen siendo conceptuales.

### Validacion y despliegue

- `node --check` paso para los scripts y `git diff --check` no encontro errores de espacios.
- En navegador: seis productos; filtro de busqueda y categoria; ficha dinamica con tallas; agregar dos unidades, totalizar, aumentar cantidad, aviso de checkout no conectado y eliminar del carrito.
- El formulario muestra una vista previa sin enviar el mensaje. A 390 px, el menu movil funciona y el documento no presenta desbordamiento horizontal.
- Se desplegaron los archivos en `/var/www/html` de `web01`; Apache esta activo y habilitado. La portada y las cinco rutas nuevas, CSS y JavaScript respondieron HTTP 200 desde `http://192.168.56.10/`.
- No es una tienda de produccion: el carrito solo vive en el navegador actual, no hay inventario real, usuarios, persistencia de pedidos, envios ni pagos.

## 2026-10-19 — 04:50 (-05:00)

### Mas interaccion en el frontend

- Se ampliaron los controles del catalogo con filtros por categoria, color y talla disponible, rango de precio minimo/maximo y orden por destacados, precio ascendente/descendente o nombre A-Z/Z-A. La busqueda tambien encuentra categorias, colores y tallas.
- Se agrego una accion para limpiar todos los filtros, contador de resultados, estado sin coincidencias y un mensaje cuando el rango de precio no es valido.
- Cada ficha reutilizable ahora muestra una galeria de tres imagenes seleccionables por miniaturas, con estado accesible para teclado/lectores de pantalla.
- Las imagenes de galeria son fotografias ilustrativas de personas entrenando, no imagenes verificadas de las prendas conceptuales; el detalle lo aclara junto a la galeria.

### Validacion y despliegue

- `node --check` paso para `shop.js` y `script.js`; `git diff --check` y la comprobacion de enlaces internos pasaron.
- En navegador se validaron orden ascendente/descendente, filtros combinados de categoria/color/talla/precio, rango invertido con mensaje y restablecimiento a seis prendas.
- Se cambio la miniatura activa de la galeria; la imagen principal y el estado `aria-pressed` se actualizaron. Las tres miniaturas cargaron correctamente.
- El catalogo y la ficha se revisaron en movil; no hubo desbordamiento horizontal a 390 px. Despues de publicar, las rutas HTML y recursos estaticos seguian respondiendo HTTP 200.

## 2026-10-19 — 04:56 (-05:00)

### Toque solicitado para la pagina

- Se anadio `:v` al texto explicativo de la pagina de referidos y a los avisos visibles que identifican prototipo, demostracion, fotos ilustrativas, formulario sin envio o checkout no conectado.
- El contenido comercial y las funciones no cambiaron.
