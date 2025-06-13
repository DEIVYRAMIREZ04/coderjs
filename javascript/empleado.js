/*elementos insertados al DOM*/
let titulo = document.getElementById("registrar");
titulo.innerText = "DEBES ESTAR REGISTRADO PARA PODER CONTINUAR";
let nuevoUsuario = document.getElementById("nuevoUsuario");
nuevoUsuario.innerText = "REGISTRARSE";
let titulo2 = document.getElementById("ingresar");
titulo2.innerText = "INGRESAR";

/*array ppal donde se almacenaran los objetos usuario*/
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [
    { usuario: "deivy", contraseña: "1234" },
    { usuario: "lina", contraseña: "5678" },
    { usuario: "alejandro", contraseña: "7890"},
    { usuario: "norelia", contraseña:"12345" },
    { usuario: "luisa", contraseña: "67890"}
];

//console.log(usuarios)


/*cuerpo del formulario1*/


let formulario = document.getElementById("formulario");
formulario.addEventListener('submit', (e) => {
    e.preventDefault();


    let inputNombre = document.getElementById('inputNombre');
    let inputContraseña = document.getElementById('inputContraseña')

    let usuarioComparado = inputNombre.value.trim().toLowerCase();
    let contraseña = inputContraseña.value.trim();
    let usuarioExiste = usuarios.some(u =>
        u.usuario?.trim().toLowerCase() === usuarioComparado)

    if (!usuarioComparado || !contraseña) {
        Swal.fire({
        title: "INCORRECTO",
        text: "Llena todos los campos",
        icon: 'error',
        confirmButtonText: 'ok'
    });
        formulario.reset();
        return;
    }
    if (usuarioExiste) {
         Swal.fire({
        title: "INCORRECTO",
        text: "Usuario ya existente",
        icon: 'error',
        confirmButtonText: 'ok'
    });
        formulario.reset();

    }
    else {
        let userNew = {
            usuario: usuarioComparado,
            contraseña: contraseña
        };
        usuarios.push(userNew);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        Swal.fire({
        title: "CORRECTO",
        text: "Usuario registrado",
        icon: 'success',
        confirmButtonText: 'ok'
    })
        formulario.reset();
    };

});

let formulario2 = document.getElementById("formulario2")
formulario2.addEventListener('submit', (e) => {
    e.preventDefault();


    let inputNombre2 = document.getElementById('inputNombre2');
    let inputContraseña2 = document.getElementById('inputContraseña2')
    let inicioUsuario = {
        usuario: inputNombre2.value,
        contraseña: inputContraseña2.value
    };
    let usuarioValido = inputNombre2.value.trim().toLowerCase();
    let contraseñaValida = inputContraseña2.value.trim();
    if (!inicioUsuario.usuario || !inicioUsuario.contraseña) {
        Swal.fire({
        title: "INCORRECTO",
        text: "Llena todos los campos",
        icon: 'error',
        confirmButtonText: 'ok'
    });
        formulario2.reset();
        return;
        
    }
   
    let usuarioExiste = usuarios.find(u =>
        u.usuario?.trim().toLowerCase() === usuarioValido &&
        u.contraseña === contraseñaValida
    );



    if (usuarioExiste) {
        sessionStorage.setItem("usuarioCorrecto", JSON.stringify(inicioUsuario));
        localStorage.setItem("usuariois", JSON.stringify())
        window.location.href = "iniciar.html"

    } else {
         Swal.fire({
        title: "INCORRECTO",
        text: "No registrado",
        icon: 'error',
        confirmButtonText: 'ok'
    });
        formulario2.reset();
    }

});
console.log(usuarios);








/*cuerpo del formulario2*/
