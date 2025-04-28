let nombreUsuario;
let contraseña;
/*let usuarios =JSON.parse(localStorage.getItem("usuarios")) || {
      deivy : 1234,
      lina : 5678,
      alejandro : 7890,
      norelia : 12345,
      luisa : 67890
};*/
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [
    { usuario: "deivy", contraseña: 1234 },
    { usuario: "lina", contraseña: 5678 },
    { usuario: "alejandro", contraseña: 7890 },
    { usuario: "norelia", contraseña: 12345 },
    { usuario: "luisa", contraseña: 67890 }
];
let salirDelMenu = false;


function guardarUsuarios() {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}



/*let boton1=
 document.createElement("button");
 boton1.textContent="REGISTRARCE";
 boton1.id = "myBoton";
 document.body.appendChild(boton1);
 boton1.addEventListener("click", registro );


let boton2=
 document.createElement("button");
 boton2.textContent="INGRESAR";
 boton2.id = "myBoton";
 document.body.appendChild(boton2);
 boton2.addEventListener("click", ingreso );
*/

function menu() {
    let opcion;
    do {
        opcion = prompt("bienvenido\n\n1. Inicio de seccion\n2. registrarce\n3. salir\n\elige una opcion");
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

};



function ingreso() {
    let nombreUsuario = prompt("Ingresa tu usuario");
    let usuarioEncontrado = usuarios.find(u => u.usuario === nombreUsuario);
    if (usuarioEncontrado) {
        let contraseña = Number(prompt("ingresa tu contraseña"));
        if (contraseña === usuarioEncontrado.contraseña) {
            if (confirm(`hola ${nombreUsuario} deseas ingresar?`)) {
                salirDelMenu = true;
                window.location.href = "paginas/ingreso.html";
                return;
            } else {
                alert("hasta pronto");
            }

        }


        else {
            do {
                contraseña = Number(prompt("ingresa nuevamente tu contraseña"))
            }
            while (contraseña !== usuarioEncontrado, contraseña) {
                confirm(`hola ${usuario} deseas ingresar?`)
                salirDelMenu = true;
                window.location.href = "paginas/ingreso.html";
                return;
            }
        }


    }
    else {
        alert("no estas en nuestra base de datos aun; por favor registrate");
        if (confirm("desea registrarce?")) {
            alert("continua con el registro");
            registro();
        } else {
            alert("hasta pronto");
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


    if (confirm(`${newusuario} quieres ingresar?`)) {
        ingreso();
    } else {
        alert(`${newusuario} regresa pronto, ya has sido registrado`)
    }

}
console.log(usuarios);



/*let nombre1 
const contraseña = 12345;
let contra;
nombre1=prompt("ingresa tu nombre");
if (nombre1 === "carlos") {
    alert("hola carlos");
    contra = Number(prompt("ingresa tu contraseña"));
    if (contra === contraseña) {
        alert("vienvenido a casa");
    }
    else {
        while (contra !== contraseña){
            alert("contraseña incorrecta");
            contra =Number(prompt("ingresa tu contraseña"))
            
        }
    }
        //window.location.href = "saludo.html";
        alert("vienvenido a casa");
    }


else  { {(alert("no eres el propietario"))
        while (nombre1 !== "carlos")
        nombre1=prompt("ingresa nuevamente tu nombre")
        
  }  
 

    alert("hola carlos");
    contra = Number(prompt("ingresa tu contraseña"));
    if (contra === contraseña) {
        //window.location.href = "saludo.html";
        alert("vienvenido a casa");
    }
    else {
        while (contra !== contraseña) {
            alert("contraseña incorrecta");
            contra = Number(prompt("ingresa tu contraseña"))
        }
       // window.location.href = "saludo.html";
       alert("vienvenido a casa");
    }
}


verificacion(); 
*/


