
let botonCliente = document.getElementById("boton2");
let botonEmpleado = document.getElementById("boton1");

botonEmpleado.addEventListener('click', empleado);
botonCliente.addEventListener('click', cliente);

function empleado() {
    window.open("./paginas/empleado.html", "_blank");
}

function cliente() {
    window.open("https://durata.co/", "_blank");
}



