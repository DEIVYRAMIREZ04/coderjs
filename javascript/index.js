let usuario;
let contraseña;
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




/*
let salirDelMenu = false;


function guardarUsuarios() {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

function menu() {
    let opcion;
    do {
        opcion = prompt("bienvenido\n\n1. Inicio de sesion\n2. registrarse\n3. salir\n\elige una opcion");
        if (opcion === null) {
            alert("cancelado por el usuario");
            break;
        }

        switch (opcion) {
            case "1":
                ingreso();
                break;
            case "2":
                registro();
                break;
            case "3":
                alert("vuelve pronto");
                break;
            default:
                alert("ingresa una opcion valida");
        }
    }
    while (opcion !== "3" && !salirDelMenu); 
    return;
};



function ingreso() {
    let nombreUsuario = prompt("Ingresa tu usuario");
    let usuarioEncontrado = usuarios.find(u => u.usuario === nombreUsuario);
    if (usuarioEncontrado) {
        let contraseña = Number(prompt("ingresa tu contraseña"));
        if (contraseña === usuarioEncontrado.contraseña) {
            if (confirm(`hola ${nombreUsuario} deseas comenzar?`)) {
                salirDelMenu = true;
                window.location.href = "paginas/ingreso.html";
                return;
            } else {
                alert("hasta pronto");
                return;
            }

        }


        else {
            do {
                contraseña = Number(prompt("ingresa nuevamente tu contraseña"))
            }
            while (contraseña !== usuarioEncontrado, contraseña) {
                confirm(`hola ${usuario} deseas comenzar?`)
                salirDelMenu = true;
                window.location.href = "paginas/ingreso.html";
                return;
            }
        }


    }
    else {
        alert(" aun no te encuentras registrado; registrate para continuar");
        if (confirm("desea registrarse?")) {
            alert("ingresa tus datos");
            registro();
        } else {
            alert("hasta pronto");
            return;
        }


    }

}

function registro() {
    let newusuario = prompt("elige tu nombre de usuario");
    let usuarioExistente = usuarios.find(u => u.usuario === newusuario);


    if (usuarioExistente) {
        alert("nombre de usuario no disponible, intentalo nuevamente")
        return;
    }
    let newcontraseña = Number(prompt("ingresa tu contraseña"));
    usuarios.push({ usuario: newusuario, contraseña: newcontraseña });
    guardarUsuarios();
    alert(`${newusuario} has sido registrado con exito`);


    if (confirm(`${newusuario} quieres comenzar?`)) {
        ingreso();
    } else {
        alert(`${newusuario} regresa pronto, ya has sido registrado`)
    }

}
console.log(usuarios);

*/




