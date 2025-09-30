/*
    TemplateMo 559 Zay Shop
    https://templatemo.com/tm-559-zay-shop
*/

'use strict';

// Función para cargar fragmentos de HTML (como menu.html y pie.html)
// Devuelve una promesa que se resuelve cuando el fragmento se ha cargado.
function cargarFragmento(id, url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) throw new Error(`Error al cargar ${url}: ${response.statusText}`);
            return response.text();
        })
        .then(data => {
            document.getElementById(id).innerHTML = data;
        });
}