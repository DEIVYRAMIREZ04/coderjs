let descCocina = document.getElementById("cocina");
descCocina.innerText = "cocina pozuelo derecho con estufa central y mueble bajo";
let descTanque = document.getElementById("tanque");
descTanque.innerText = "Mezon con estructura en patas de acero inoxidable con entrepaño";
let desclavamanos = document.getElementById("lavamanos");
desclavamanos.innerText = "Lavamanos de pedestal con instalacion gratuita"
const carrito = [];
let total = 0;
let botonT1 = document.getElementById("miBotonT1");
botonT1.addEventListener('click', botont1);
function botont1() {
    agregarCarrito('cocina', Number('800000'));
    Swal.fire({
        title: "producto agregado",
        text: "has agregado la cocina al carrito",
        icon: 'success',
        confirmButtonText: 'ok'
    })

};
function agregarCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    total += precio;
    console.log(carrito)
    actualizarCarrito()
};
function actualizarCarrito() {
    const lista = document.getElementById("lista-carrito");
    const totalTodo = document.getElementById("total");
    lista.innerHTML = "";
    carrito.forEach((item) => {
        let li = document.createElement("li");
        li.textContent = `${item.nombre} - $${item.precio}`;
        lista.appendChild(li);
        console.log(item.precio)
    });
    totalTodo.textContent = total;
};
let botonT2 = document.getElementById("miBotonT2");
botonT2.addEventListener('click', botont2);
function botont2() {
    agregarCarrito('tanque', Number('600000'));
    Swal.fire({
        title: "producto agregado",
        text: "has agregado el tanque al carrito",
        icon: 'success',
        confirmButtonText: 'ok'
    })

};
function agregarCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    total += precio;
    console.log(carrito)
    actualizarCarrito()
};
function actualizarCarrito() {
    const lista = document.getElementById("lista-carrito");
    const totalTodo = document.getElementById("total");
    lista.innerHTML = "";
    carrito.forEach((item) => {
        let li = document.createElement("li");
        li.textContent = `${item.nombre} - $${item.precio}`;
        lista.appendChild(li);
        console.log(item.precio)
    });
    totalTodo.textContent = total;
};
let botonT3 = document.getElementById("miBotonT3");
botonT3.addEventListener('click', botont3);
function botont3() {
    agregarCarrito('pedestal', Number('720000'));
    Swal.fire({
        title: "producto agregado",
        text: "has agregado el lavamanos al carrito",
        icon: 'success',
        confirmButtonText: 'ok'
    })

};
function agregarCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    total += precio;
    console.log(carrito)
    actualizarCarrito()
};
function actualizarCarrito() {
    const lista = document.getElementById("lista-carrito");
    const totalTodo = document.getElementById("total");
    lista.innerHTML = "";
    carrito.forEach((item) => {
        let li = document.createElement("li");
        li.textContent = `${item.nombre} - $${item.precio}`;
        lista.appendChild(li);
        console.log(item.precio)
    });
    totalTodo.textContent = total;
};
let botonT4 = document.getElementById("miBotonT4");
botonT4.addEventListener('click', botont4);
function botont4() {
    Swal.fire({
        title: "COMPRADO CON EXITO",
        text: "Tus productos llegaran a casa",
        icon: 'success',
        confirmButtonText: 'ok'
    }).then(()=>{
        carrito.length = 0;
        total= 0;
        actualizarCarrito();
    });
    

};
