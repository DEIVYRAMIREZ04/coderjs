
fetch("../json/durata.JSON")
    .then(res => res.json())
    .then(durata => {
        console.log(durata)
        const infoColilla = JSON.parse(sessionStorage.getItem("usuarioCorrecto"));
        console.log(infoColilla);
        valorHoraNormal = durata.basico / 240;
        valorHoraExtra = valorHoraNormal * 1.2;

        let container = document.getElementById("colilla");
        let validacion = durata.find(u => u.nombre.toLowerCase() === infoColilla.usuario.toLowerCase());
        if (validacion) {

            let salarioBase = Number(validacion.basico / 2);
            let horasExtras = Number(validacion.horasExtras);
            let deducciones = Number(validacion.deducciones);

            const horasQuincena = 15 * 8;
            const valorHoraNormal = salarioBase / horasQuincena;
            const valorHoraExtra = valorHoraNormal * 1.2;

            let totalSalario = salarioBase + (horasExtras * valorHoraExtra) - deducciones;

            container.innerHTML = `
        <h2>Hola ${validacion.nombre}</h2>
        <h2>Basico ${validacion.basico}</h2>
        <h3>Salario base por quincena: $${salarioBase.toLocaleString()}</h3>
        <h3>Horas extras trabajadas: ${horasExtras}</h3>
        <h3>Valor por hora extra (20% más): $${valorHoraExtra.toFixed(2)}</h3>
        <h3>Deducciones: $${deducciones.toLocaleString()}</h3>
        <h2>Salario total: $${totalSalario.toLocaleString()}</h2>
    `;
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