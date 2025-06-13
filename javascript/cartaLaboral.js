fetch("../json/durata.JSON")
    .then(res => res.json())
    .then(durata => {
        console.log(durata)
        const infoCarta = JSON.parse(sessionStorage.getItem("usuarioCorrecto"));
        console.log (infoCarta);
        //localStorage.setItem("inicioUsuario","deivy")
        
        let container = document.getElementById("datosCartaLaboral");
        let validacion=durata.find(u => u.nombre.toLowerCase()=== infoCarta.usuario.toLowerCase());
        if (validacion) {
             
            container.innerHTML =
                `<h2>La empresa DURATA S.A.S, hace constar que:</h2>
                  <p>El señor(a) ${validacion.nombre}, trabaja con nosotros desde el ${validacion.ingreso}, 
                  se desempeña como ${validacion.cargo}, devengando un salario mesual de ${validacion.basico} pesos</p>
                  <h3>Atentamente:</h3>
                  <p>Departamento de recursos humanos</p>
                  <p>DURATA S.A.S tel:5555555</p>

                 `
                 ;
        }
        else {
    container.innerHTML =
        "<h1>NO ESTAS EN EL SISTEMA</h1>"
}
    });