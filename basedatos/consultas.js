function obtenerProductosServicios(categoria = "") {
    /*
    let lista_filtrada = [];
    for (let int i = 0; i < lista_cursos.length; i++) {
        if (lista_cursos[i].codigo_categoria === categoria) {
            lista_filtrada.push(lista_cursos[i]);
        }
    }
    return lista_filtrada;
    */
 
    let lista_filtrada = lista_productos.filter(productos => productos.codigo_categoria === categoria);
    return lista_filtrada;
}