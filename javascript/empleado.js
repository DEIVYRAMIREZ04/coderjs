let titulo = document.getElementById("registrar")
titulo.innerText = "DEBES ESTAR REGISTRADO PARA PODER CONTINUAR";
let tex1 = document.getElementById("tex1")
tex1.innerText = "REGISTRATE"
let titulo2 = document.getElementById("ingresar")
titulo2.innerText = "INICIO DE SECCION"

const usuarios = [];
let formulario = document.getElementById("formulario")
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
let formulario2 = document.getElementById("formulario2")
formulario2.addEventListener('submit', (e) => {
    e.preventDefault();
    

    let inputNombre2 = document.getElementById('inputNombre2');
    let inputContraseña2 = document.getElementById('inputContraseña2')
    
    
    let usuarioEncontrado = usuarios.find(u => u.nombre === inputNombre2.value);
    if (usuarioEncontrado){
        if (usuarioEncontrado.contraseña===inputContraseña2.value){
             window.open("colilla.html", "_blank")
        }else{
            alert("contraseña incorrecta")
        }
    }else{
        alert("usuario incorrecto")
    }
    formulario2.reset();
    });
