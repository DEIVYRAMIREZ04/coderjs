/*elementos insertados al DOM*/
let titulo = document.getElementById("registrar");
titulo.innerText = "DEBES ESTAR REGISTRADO PARA PODER CONTINUAR";
let nuevoUsuario = document.getElementById("nuevoUsuario");
nuevoUsuario.innerText = "REGISTRATE";
let titulo2 = document.getElementById("ingresar");
titulo2.innerText = "INICIO DE SECCION";

/*array ppal donde se almacenaran los objetos usuario*/
const usuarios = [];

/*cuerpo del formulario1*/
let formulario = document.getElementById("formulario");
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    let inputNombre = document.getElementById('inputNombre');
    let inputContrtaseña = document.getElementById('inputContrtaseña')
    const userNew = {
        nombre: inputNombre.value,
        contraseña: inputContrtaseña.value
    };
    alert("Usuario registrado")
    usuarios.push(userNew);
    console.log(usuarios);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    formulario.reset();
});

/*cuerpo del formulario2*/
let formulario2 = document.getElementById("formulario2")
formulario2.addEventListener('submit', (e) => {
    e.preventDefault();


    let inputNombre2 = document.getElementById('inputNombre2');
    let inputContraseña2 = document.getElementById('inputContraseña2')
    let usuarioEncontrado = JSON.parse(localStorage.getItem("usuarios"));
    usuarioEncontrado = usuarioEncontrado.find(u => u.nombre === inputNombre2.value);
    console.log(usuarioEncontrado)
    if (usuarioEncontrado) {
        if (usuarioEncontrado.contraseña === inputContraseña2.value) {
            window.open("colilla.html", "_blank")
            
        } else {
            alert("contraseña incorrecta")
        }
    } else {
        alert("usuario incorrecto")
    }
    formulario2.reset();
});
