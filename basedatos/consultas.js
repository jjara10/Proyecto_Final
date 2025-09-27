function obtenerProductosServicios(categoria = "") {
    /*
    let lista_filtrada = [];
    for (let int i = 0; i < lista_productos.length; i++) {
        if (lista_productos[i].codigo_categoria === categoria) {
            lista_filtrada.push(lista_productos[i]);
        }
    }
    return lista_filtrada;
    */

    // Si la categoria es vacia devolver todos los productos
    if (categoria === null || categoria == " ") {
        return lista_productos

    }
    // Sino, Enviar la categoria que se solicite
    else {
        let lista_filtrada = lista_productos.filter(productos => productos.codigo_categoria === categoria);
        return lista_filtrada;
    }
}

function obtenerProductoServicioPorCodigo(codigo) {
    /*
    for (let index = 0; lista_productos < lista_productos.length; index++) {
        if( lista_productos[index].cidigo === codigo ) {
            return lista_productos[index];
        }
    }
    return null;
    */
    return lista_productos.find(productos => productos.codigo === codigo);
}

function mostrarCarrito() {
    let etiqueta_carrito = document.getElementById("etiqueta_carrito");
    let costoTotal = 0;
    etiqueta_carrito.innerHTML = "";
 
    carrito.forEach((elemento, posicion) => {
        let li = document.createElement("li");
        li.innerHTML = `
                <div class="d-flex justify-content-between align-items-center p-2 border-bottom border-dark">
                    <div class="row">
                        <p class="my-0">${elemento.nombre}</p>
                        <small>$${elemento.precio.toLocaleString("es-CO")}</small>
                    </div>
                    <a class="btn bg-warning text-decoration-none text-dark" href="#" onclick="eliminarProductoServicio('${posicion}')" >
                        <i class="fa fa-times"></i>
                    </a>
                </div>`;
        etiqueta_carrito.appendChild(li);
        costoTotal += elemento.precio;
    });
    let etiqueta_total = document.getElementById("etiqueta_total");
    // etiqueta_total.innerText = carrito.reduce((total, elemento) => total + elemento.precio, 0).toLocaleString("es-CO");
    etiqueta_total.innerText = costoTotal.toLocaleString("es-CO");

    // Actualizar el enlace del botón de pagar con el total
    const botonPagar = document.querySelector("#boton-pagar a");
    if (botonPagar) {
        botonPagar.href = `pagar.html?total=${costoTotal}`;
    }
}

// function obtenerCarrito() {
//     const str = localStorage.getItem("carrito");
//     if (str) {
//         carrito = JSON.parse(str);
//     }
//     return carrito;
// }

function agregarProductoServicio(producto){
    carrito.push(producto);
    mostrarCarrito();
}

// function eliminarProductoServicio(codigo){
//     carrito = carrito.filter(producto => producto.codigo !== codigo);
//     mostrarCarrito();
// }

function eliminarProductoServicio(posicion) {
    carrito.splice(posicion, 1);
    mostrarCarrito();
}

function vaciarCarrito() {
    carrito = [];
    mostrarCarrito();
}