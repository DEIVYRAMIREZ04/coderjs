let comenzar1 = document.getElementById('miBoton1');
comenzar1.addEventListener('click', comenzar);

function comenzar() {
    window.location.href = "colilla.html";
};
let comenzar2 = document.getElementById('miBoton2');
comenzar2.addEventListener('click', comenzar_2);

function comenzar_2() {
    window.location.href = "cartaLaboral.html";
};


document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("regresar");
    boton.addEventListener("click", function () {
         window.location.href ="empleado.html";
    });
});
