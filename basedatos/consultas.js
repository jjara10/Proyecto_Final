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