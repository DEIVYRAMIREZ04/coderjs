/*elementos insertados al DOM*/
let titulo = document.getElementById("registrar");
titulo.innerText = "SI ERES EMPLEADO DE NUESTRA COMPAÑIA PUEDES REGISTRARTE E INICIAR SESION, DE LO CONTRARIO INGRESA COMO CLIENTE.";
let nuevoUsuario = document.getElementById("nuevoUsuario");
nuevoUsuario.innerText = "REGISTRARSE";
let titulo2 = document.getElementById("ingresar");
titulo2.innerText = "INGRESAR";


let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [

];



/*cuerpo del formulario1*/
function normalizarTexto(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}


let formulario = document.getElementById("formulario");
formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  let inputNombre = document.getElementById('inputNombre');
  let inputContraseña = document.getElementById('inputContraseña');

  let usuarioComparado = normalizarTexto(inputNombre.value);
  let contraseña = inputContraseña.value.trim();

  if (!usuarioComparado || !contraseña) {
    Swal.fire({
      title: "INCORRECTO",
      text: "Llena Todos Los Campos",
      icon: 'error',
      confirmButtonText: 'ok'
    });
    formulario.reset();
    return;
  }


  fetch("./json/durata.json")
    .then(res => res.json())
    .then(data => {
      let empleadosAutorizados = data.map(obj => normalizarTexto(obj.nombre));
      if (!empleadosAutorizados.includes(usuarioComparado)) {
        Swal.fire({
          title: "ACCESO DENEGADO",
          text: "DEBES SER MIEMBRO DE NUESTRA COMPAÑIA PARA PODER ACCEDER",
          icon: 'error',
          confirmButtonText: 'ok'
        });
        formulario.reset();
        return;
      }

      // Validar si ya existe
      let usuarioExiste = usuarios.some(u =>
        u.usuario?.trim().toLowerCase() === usuarioComparado
      );

      if (usuarioExiste) {
        Swal.fire({
          title: "INCORRECTO",
          text: "YA ESTAS REGISTRADO",
          icon: 'error',
          confirmButtonText: 'ok'
        });
        formulario.reset();
      } else {
        // Registrar usuario
        let userNew = {
          usuario: usuarioComparado,
          contraseña: contraseña
        };
        usuarios.push(userNew);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        Swal.fire({
          title: "CORRECTO",
          text: "REGISTRADO CON EXITO",
          icon: 'success',
          confirmButtonText: 'ok'
        });
        formulario.reset();
      }
    })
    .catch(error => {
      console.error("Error cargando empleados autorizados:", error);
      Swal.fire({
        title: "ERROR",
        text: "REGISTRO FALLIDO",
        icon: 'error',
        confirmButtonText: 'ok'
      });
    });
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
      text: "NO REGISTRADO",
      icon: 'error',
      confirmButtonText: 'ok'
    });
    formulario2.reset();
  }

});
console.log(usuarios);

