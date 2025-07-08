let carrito = [];

function agregarAlCarrito(id, nombre, precio, stockDisponible) {
  const productoExistente = carrito.find(p => p.id === id);

  if (productoExistente) {
    if (productoExistente.cantidad < productoExistente.stock) {
      productoExistente.cantidad += 1;
    } else {
        Swal.fire({
        title: "LO SENTIMOS",
        text: "No Hay Unidades Disponibles",
        icon: 'error',
        confirmButtonText: 'ok'
    });
    }
  } else {
    carrito.push({ id, nombre, precio, cantidad: 1, stock: stockDisponible });
  }

  actualizarCarritoUI();
}

function actualizarCarritoUI() {
  const contenedor = document.getElementById("carrito");
  contenedor.innerHTML = "";

  if (carrito.length === 0) {
    contenedor.innerHTML = "<p>El carrito está vacío.</p>";
    return;
  }

  carrito.forEach(producto => {
    const div = document.createElement("div");
    div.innerHTML = `
      <p>${producto.nombre} - $${producto.precio} x ${producto.cantidad}</p>
      <button onclick="incrementarCantidad(${producto.id})">Otra Unidad</button>
      <button onclick="disminuirCantidad(${producto.id})">Restar</button>
      <button onclick="eliminarProducto(${producto.id})">Eliminar</button>
      <hr>
    `;
    contenedor.appendChild(div);
  });

  const total = carrito.reduce((sum, p) => sum + p.precio * p.cantidad, 0);
  contenedor.innerHTML += `<p><strong>Total: $${total}</strong></p>`;
}

function incrementarCantidad(id) {
  const producto = carrito.find(p => p.id === id);
  if (producto && producto.cantidad < producto.stock) {
    producto.cantidad++;
  } else {
    Swal.fire({
        title: "LO SENTIMOS",
        text: "No Hay Unidades Disponibles",
        icon: 'error',
        confirmButtonText: 'ok'
    });
  }
  actualizarCarritoUI();
}

function disminuirCantidad(id) {
  const producto = carrito.find(p => p.id === id);
  if (producto && producto.cantidad > 1) {
    producto.cantidad--;
  } else {
    carrito = carrito.filter(p => p.id !== id);
  }
  actualizarCarritoUI();
}

function eliminarProducto(id) {
  carrito = carrito.filter(p => p.id !== id);
  actualizarCarritoUI();
}

function vaciarCarrito() {
  carrito = [];
  actualizarCarritoUI();
}

function mostrarFormularioCompra() {
  if (carrito.length === 0) {
    Swal.fire({
        title: "LO SENTIMOS",
        text: "El Carrito Esta Vacio",
        icon: 'error',
        confirmButtonText: 'ok'
    });
    return;
  }
  document.getElementById("formularioCompra").style.display = "block";
}

function finalizarCompra() {
  const nombre = document.getElementById("nombre").value.trim();
  const contacto = document.getElementById("contacto").value.trim();
  const direccion = document.getElementById("direccion").value.trim();
  const metodoPago = document.getElementById("metodoPago").value;

  if (!nombre || !contacto || !direccion || !metodoPago) {
    Swal.fire({
      title: "INCORRECTO",
      text: "Completa Todos Los Campos",
      icon: 'error',
      confirmButtonText: 'ok'
    });
    return;
  }

  let resumen = `RESUMEN\nCliente: ${nombre}\nContacto: ${contacto}\nDirección: ${direccion}\nPago: ${metodoPago}\n\nProductos:\n`;
  let total = 0;

  carrito.forEach(p => {
    resumen += ` ${p.nombre} x${p.cantidad} - $${p.precio * p.cantidad}\n`;
    total += p.precio * p.cantidad;
  });

  resumen += `Total: $${total}`;

  Swal.fire({
    title: 'Resumen de compra',
    icon: 'success',
    html: `<pre style="text-align:left;">${resumen}</pre>`,
    confirmButtonText: 'Aceptar',
    customClass: {
      popup: 'resumen-popup'
    }
  }).then(() => {
    vaciarCarrito();
    document.getElementById("formularioCompra").reset();
    document.getElementById("formularioCompra").style.display = "none";
  });
}
function cancelarCompra() {
    
  Swal.fire({
    title: "¿Cancelar la compra?",
    text: "Perderás los productos del carrito.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, cancelar",
    cancelButtonText: "No"
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem("carrito");
      window.location.href = "tienda.html";
    }
  });
}
