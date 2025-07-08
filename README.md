📁 Proyecto: Portal de Empleados
Este proyecto es una página web diseñada para los empleados de una empresa, donde cada usuario puede acceder a ciertas funcionalidades una vez se haya registrado o iniciado sesión correctamente.

Características principales
Autenticación de usuarios mediante registro e inicio de sesión.
Solo los usuarios q pertenecen a la compañia pueden acceder al contenido de la página.
Si no estás registrado, puedes completar el formulario de registro para crear tu cuenta.
La base de datos es un archivo json simulando una api donde estan todos los empleados de la empresa.

Usuarios del sistema
hay q aclarar q  el json simula la base datos pero
cualquiera se puede registrar solo abria q agregarlo a la base de datos con la informacion correspondiente(osea q haga ingreso como trabajador de la compañia).
si no el boton de cliente te dirige a la pagina real de la empresa.

Esto permite probar el funcionamiento del sistema tanto con cuentas ya existentes como con nuevas cuentas creadas desde la interfaz.

Estructura del Proyecto
index.html – Página principal.

Formularios de inicio de sesión y registro.
Durata.json – Archivo con los datos de los 9 usuarios.
main.js – Lógica del registro, validación e inicio de sesión.

Requisitos
Navegador moderno (Chrome, Firefox, Edge, etc.).

JavaScript habilitado en el navegador.

Notas importantes
Este sistema de autenticación es básico y está diseñado con fines educativos o de prueba.

No utiliza una base de datos real; todos los datos se almacenan y procesan localmente desde el archivo JSON.

Solo funciona en pantallas de escritorio aun no estan listos los diseños mobile.



