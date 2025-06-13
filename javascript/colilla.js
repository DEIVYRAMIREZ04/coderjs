
fetch("../json/durata.JSON")
    .then(res => res.json())
    .then(durata => {
        console.log(durata)
        const infoColilla = JSON.parse(sessionStorage.getItem("usuarioCorrecto"));
        console.log (infoColilla);
        //localStorage.setItem("inicioUsuario","deivy")
        
        let container = document.getElementById("colilla");
        let validacion=durata.find(u => u.nombre.toLowerCase()=== infoColilla.usuario.toLowerCase());
        if (validacion) {
             
            container.innerHTML =
                `<h2>Basico ${validacion.basico}</h2>
                 <h2>Hola ${validacion.nombre}</h2>
                 <h3>Esta quincena trabajaste ${validacion.horasExtras} extras</h3>
                 <h3>tus deducciones son = ${validacion.deducciones}</h3>
                 <h2>tu salario es :?</h2>`
                 ;
        }
        else {
    container.innerHTML =
        "<h1>NO ESTAS EN EL SISTEMA</h1>"
}
    });
    document.addEventListener("DOMContentLoaded", () => {

    const boton = document.getElementById("regresar");


    boton.addEventListener("click", function () {
        window.open("empleado.html", "_blank")
    });
});