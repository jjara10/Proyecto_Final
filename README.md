# Ale Beauty - Proyecto Final Talento Tech

Este repositorio contiene el código fuente de "Ale Beauty", una tienda en línea de productos de belleza y cuidado de la piel. El proyecto fue desarrollado como entrega final para el bootcamp **Talento Tech**, con el objetivo de aplicar y demostrar las habilidades adquiridas en desarrollo web frontend.

## 🌟 Características Principales

El sitio web implementa varias funcionalidades clave de un e-commerce moderno:

-   **Página de Inicio Dinámica**: Un carrusel presenta los productos más destacados y una sección de categorías invita a explorar el catálogo.
-   **Catálogo de Productos**: Muestra todos los productos disponibles, con la opción de filtrarlos por categoría.
-   **Vista de Detalle**: Cada producto tiene su propia página con información detallada, incluyendo descripción, precio y calificación.
-   **Carrito de Compras**: Los usuarios pueden agregar productos al carrito, ver el total de la compra, eliminar artículos y vaciar el carrito. El total se actualiza dinámicamente.
-   **Simulación de Pago**: Una página de pago que recibe el total del carrito y presenta un formulario para ingresar datos de tarjeta de crédito.
-   **Formulario de Contacto**: Permite a los usuarios enviar mensajes. Los datos se capturan y se muestra una ventana emergente de confirmación.
-   **Componentes Reutilizables**: El menú de navegación y el pie de página se cargan dinámicamente en todas las páginas para evitar la repetición de código.
-   **Diseño Responsivo**: La interfaz se adapta a diferentes tamaños de pantalla (móvil, tablet y escritorio) gracias al uso de Bootstrap.

## 🛠️ Tecnologías Utilizadas

-   **HTML5**: Para la estructura semántica del contenido.
-   **CSS3**: Para los estilos personalizados y la apariencia visual.
-   **JavaScript (Vanilla JS)**: Para toda la lógica interactiva, como el manejo del carrito, la carga dinámica de productos y la manipulación del DOM.
-   **Bootstrap 5**: Framework CSS para un diseño responsivo y componentes de UI modernos.
-   **Font Awesome**: Para la iconografía utilizada en toda la aplicación.

## 📂 Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

```
/
├── basedatos/      # Contiene los datos (datos.js) y la lógica de negocio (consultas.js)
├── css/            # Hojas de estilo (Bootstrap y personalizadas)
├── img/            # Iconos y assets visuales
├── imagenes/       # Imágenes de productos y categorías
├── js/             # Scripts de JavaScript (librerías y custom.js)
├── acerca.html
├── contacto.html
├── detalle_producto.html
├── index.html
├── menu.html       # Fragmento de menú reutilizable
├── pagar.html
├── pie.html        # Fragmento de pie de página reutilizable
└── productos.html
```

## 🚀 Cómo Ejecutar el Proyecto

Dado que es un proyecto frontend estático, no requiere un servidor complejo para funcionar.

1.  **Clona el repositorio**:
    ```bash
    git clone <URL-DEL-REPOSITORIO>
    ```
2.  **Abre el proyecto**:
    Navega a la carpeta del proyecto y abre el archivo `index.html` en tu navegador web.

    > **Nota**: Para que la carga dinámica del menú y pie de página (`fetch`) funcione correctamente, se recomienda servir los archivos a través de un servidor local. Puedes usar extensiones como **Live Server** en Visual Studio Code.
