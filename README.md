📁 Proyecto: Portal de Empleados
Este proyecto es una página web diseñada para los empleados de una empresa, donde cada usuario puede acceder a ciertas funcionalidades una vez se haya registrado o iniciado sesión correctamente.

Características principales
Autenticación de usuarios mediante registro e inicio de sesión.
Solo los usuarios registrados pueden acceder al contenido de la página.
Si no estás registrado, puedes completar el formulario de registro para crear tu cuenta.
El sistema usa un archivo JSON que contiene los datos de 9 usuarios en total.

Usuarios del sistema
De los 9 usuarios incluidos en el archivo usuarios.json:

5 ya están registrados con todos sus datos completos (nombre, contraseña.).
4 usuarios están libres, es decir, pueden ser utilizados para realizar registros de prueba directamente desde la 
página.(dahiana, tapi, alex, mariana), hay q aclarar q solo estos estan en el json q simula la base datos pero
cualquiera se puede registrar solo abria q agregarlo a la base de datos con la informacion correspondiente.

Esto permite probar el funcionamiento del sistema tanto con cuentas ya existentes como con nuevas cuentas creadas desde la interfaz.

Estructura del Proyecto
index.html – Página principal.

Formularios de inicio de sesión y registro.
Durata.json – Archivo con los datos de los 9 usuarios.
main.js – Lógica del registro, validación e inicio de sesión.

Requisitos
Navegador moderno (Chrome, Firefox, Edge, etc.).

JavaScript habilitado en el navegador.

⚠️ Notas importantes
Este sistema de autenticación es básico y está diseñado con fines educativos o de prueba.

No utiliza una base de datos real; todos los datos se almacenan y procesan localmente desde el archivo JSON.

Solo funciona en pantallas de escritorio aun no estan listos los diseños mobile.



