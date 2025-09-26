// Lista que contiene la informacion de los elementos
// que se mostraran en el carrusel de la pagina principal
const elementos_carrusel = [
    {
        nombre: "Contorno de Ojos Dermanat Gel 15ml",
        descripcion: "Una fórmula avanzada con vitamina C encapsulada, péptidos y cafeína que revitaliza la mirada, reduce inflamación y mejora la firmeza del contorno de ojos. Enriquecido con ceramidas, este gel ligero hidrata profundamente y fortalece la barrera cutánea, dejando la piel suave, protegida y visiblemente más luminosa.",
        imagen: "imagenes/Dermanat_Gel.jpg"
    },
    {
        nombre: "Gel Dermanat Hidratante Facial 50ml",
        descripcion: "El Gel Dermanat Hidratante Facial 50ml ofrece una hidratación profunda sin dejar sensación grasosa ni brillo en la piel. Su fórmula avanzada combina dos tipos de ácido hialurónico, ceramidas y colágeno, que trabajan en conjunto para fortalecer la barrera cutánea, mejorar la elasticidad y prevenir los signos de envejecimiento. Además, está enriquecido con extractos naturales de centella asiática, aloe vera y té verde, conocidos por sus propiedades calmantes, antioxidantes y seborreguladoras. Ideal para todo tipo de piel, incluso las más sensibles, este gel ligero se absorbe rápidamente y puede usarse tanto en la rutina de día como de noche. Libre de alcohol, aceites, sulfatos y parabenos, y no probado en animales.",
        imagen: "imagenes/Dermanat_Hidratante_Facial.jpg"
    },
    {
        nombre: "Crema Hidratante REVUELE Doble Hyaluron + B5",
        descripcion: "La Crema Hidratante REVUELE Doble Hyaluron + B5 está formulada para rostro y cuello con una textura delicada y ultrahidratante. Combina dos tipos de ácido hialurónico —de alto y bajo peso molecular— que penetran en distintas capas de la piel, proporcionando hidratación profunda y duradera. Su acción dual ayuda a rellenar líneas de expresión, mejorar la elasticidad y dejar la piel más suave y tersa. Enriquecida con provitamina B5, conocida por sus propiedades calmantes y reparadoras, esta crema revitaliza visiblemente la piel y contribuye a reducir arrugas con el uso continuo. Ideal para piel seca o madura, puede aplicarse tanto en la rutina de día como de noche.",
        imagen: "imagenes/Hyaluron.jpg"
    }
]

// Imagenes 190x190

const lista_categorias = [
    {
        codigo: "1040",
        nombre: "Contorno de Ojos",
        descripcion: "Los productos para el contorno de ojos ayudan a reducir ojeras, bolsas y líneas de expresión, hidratando y revitalizando la mirada con fórmulas suaves y de rápida absorción.",
        imagen: "imagenes/Contorno_Ojos.jpg"
    },
    {
        codigo: "1030",
        nombre: "Cremas Faciales",
        descripcion: "Las cremas faciales hidratan, nutren y protegen la piel, mejorando su textura y luminosidad mientras previenen signos de envejecimiento.",
        imagen: "imagenes/Crema_Facial.jpg"
    },
    {
        codigo: "1020",
        nombre: "Espumas y Jabones",
        descripcion: "Las espumas y jabones faciales limpian profundamente la piel, eliminando impurezas, exceso de grasa y residuos sin alterar su equilibrio natural.",
        imagen: "imagenes/Cremas_Jabones.jpg"
    }
]

const lista_productos = [
    {
        codigo: "2010",
        nombre: "Contorno de Ojos Dermanat Gel 15ml",
        descripcion_list: "Gel ligero con vitamina C, péptidos y cafeína que hidrata, desinflama y mejora la firmeza del contorno de ojos",
        descripcion: "El Contorno de Ojos Dermanat Gel 15ml es un tratamiento avanzado diseñado para revitalizar la zona ocular con una combinación potente de ingredientes activos. Su fórmula incluye vitamina C encapsulada, que ilumina y unifica el tono de la piel; péptidos, que estimulan la producción de colágeno y mejoran la firmeza; y cafeína, conocida por su efecto descongestionante que reduce visiblemente bolsas y ojeras. Además, está enriquecido con ceramidas, que fortalecen la barrera cutánea y mantienen la hidratación por más tiempo. Su textura en gel es ligera, de rápida absorción y apta para todo tipo de piel, incluso las más sensibles. Ideal para uso diario, este producto ayuda a mantener una mirada fresca, descansada y rejuvenecida.",
        codigo_categoria: "1040",
        imagen: "imagenes/Dermanat_Gel.jpg",
        precio: 51000,
        calificacion: 4
    },
    {
        codigo: "2020",
        nombre: "Contorno De Ojos Montoc Reafirmante",
        descripcion_list: "Contorno con cafeína y aguacate que hidrata, reafirma y reduce bolsas y líneas de expresión.",
        descripcion: "El Contorno de Ojos Montoc Reafirmante combina ingredientes naturales como la cafeína y el aguacate para ofrecer un tratamiento eficaz contra ojeras, bolsas y líneas de expresión. La cafeína actúa como descongestionante, ayudando a reducir la retención de líquidos y grasas que provocan inflamación en la zona ocular. Por su parte, el aguacate hidrata profundamente y mejora la elasticidad de la piel, atenuando visiblemente las líneas finas. Su textura ligera permite una aplicación suave y rápida absorción, ideal para uso diario tanto en la mañana como en la noche. Libre de alcohol, parabenos y crueldad animal, este contorno de ojos es una opción segura y efectiva para lograr una mirada más fresca, firme y descansada.",
        codigo_categoria: "1040",
        imagen: "imagenes/Montoc_Reafirmante.jpg",
        precio: 55000,
        calificacion: 5
    },
    {
        codigo: "2030",
        nombre: "Crema Hidratante REVUELE Doble Hyaluron + B5",
        descripcion_list: "Crema facial con doble ácido hialurónico y B5 que hidrata, suaviza y mejora la firmeza de la piel.",
        descripcion: "La Crema Hidratante REVUELE Doble Hyaluron + B5 está formulada para rostro y cuello con una textura delicada y ultrahidratante. Combina dos tipos de ácido hialurónico —de alto y bajo peso molecular— que penetran en distintas capas de la piel, proporcionando hidratación profunda y duradera. Su acción dual ayuda a rellenar líneas de expresión, mejorar la elasticidad y dejar la piel más suave y tersa. Enriquecida con provitamina B5, conocida por sus propiedades calmantes y reparadoras, esta crema revitaliza visiblemente la piel y contribuye a reducir arrugas con el uso continuo. Ideal para piel seca o madura, puede aplicarse tanto en la rutina de día como de noche.",
        codigo_categoria: "1030",
        imagen: "imagenes/Hyaluron.jpg",
        precio: 65000,
        calificacion: 4
    },
    {
        codigo: "2040",
        nombre: "Jabón Facial Líquido Ana María Piel Grasa a Mixta 100g",
        descripcion_list: "Limpieza profunda con romero y árbol de té que controla grasa e imperfecciones sin resecar.",
        descripcion: "El Jabón Facial Líquido Ana María está formulado con extractos naturales de romero, arrayán, ginseng y árbol de té, ingredientes reconocidos por sus propiedades purificantes y equilibrantes. Diseñado para pieles grasas a mixtas, este limpiador elimina impurezas, células muertas y exceso de grasa sin resecar, dejando el rostro limpio, fresco y suave. Su acción profunda ayuda a controlar imperfecciones y mantener el equilibrio natural de la piel, convirtiéndolo en una excelente opción para uso diario. Libre de alcohol y parabenos, es ideal para quienes buscan una limpieza efectiva con ingredientes de origen vegetal.",
        codigo_categoria: "1020",
        imagen: "imagenes/jabon_liquido.jpg",
        precio: 26500,
        calificacion: 5
    },
    {
        codigo: "2050",
        nombre: "Contorno de Ojos Ana María con Caléndula",
        descripcion_list: "Crema ligera con caléndula, vitamina E y germen de trigo que descongestiona, nutre y suaviza el contorno de ojos.",
        descripcion: "El Contorno de Ojos Ana María con Caléndula es una crema ligera formulada para cuidar la delicada zona ocular con ingredientes naturales y reparadores. Contiene extracto de caléndula, conocido por sus propiedades calmantes y descongestionantes; vitamina E, que aporta antioxidantes y mejora la elasticidad; y germen de trigo, que nutre y suaviza la piel. Su textura suave permite una aplicación cómoda y rápida absorción, ideal para uso diario. Este tratamiento ayuda a reducir la inflamación, reparar el tejido cutáneo y mantener una mirada descansada y luminosa, sin causar irritación.",
        codigo_categoria: "1040",
        imagen: "imagenes/ContornoOjos_Calendula.jpg",
        precio: 37000,
        calificacion: 4
    },
    {
        codigo: "2060",
        nombre: "Limpiador Facial Montoc Hydromontoc 250ml",
        descripcion_list: "Limpieza profunda con ácido salicílico, aloe vera y bambú para piel mixta, grasa o sensible.",
        descripcion: "El Limpiador Facial Montoc Hydromontoc 250ml es ideal para pieles mixtas, grasas y sensibles, ofreciendo una limpieza profunda sin resecar ni irritar. Su fórmula combina ácido salicílico, aloe vera y bambú, ingredientes que eliminan impurezas, exceso de grasa y contaminantes mientras calman y equilibran la piel. Gracias a su textura suave y libre de alcohol, parabenos y crueldad animal, puede usarse tanto en la rutina de día como de noche. Este limpiador deja el rostro fresco, purificado y preparado para recibir otros tratamientos faciales.",
        codigo_categoria: "1020",
        imagen: "imagenes/Hydromontoc.jpg",
        precio: 53000,
        calificacion: 5
    },
    {
        codigo: "2070",
        nombre: "Contorno de Ojos Dermohelp 15ml",
        descripcion_list: "Contorno con Bioskinup, Bio-Retinol y Camelia Japónica que reduce ojeras, bolsas y líneas de expresión.",
        descripcion: "El Contorno de Ojos Dermohelp 15ml está formulado para tratar ojeras, bolsas, líneas de expresión y microarrugas con una acción triple y efectiva. Contiene Bioskinup Contour 3R, un activo con eficacia comprobada que actúa sobre los principales signos de fatiga en la zona ocular. Su fórmula se complementa con Bio-Retinol, que acelera la reducción de líneas finas, y aceite de Camelia Japónica, reconocido por sus propiedades antiinflamatorias, humectantes y antiedad. Además, incluye extractos naturales y activos veganos que respetan la piel sensible del contorno de ojos. Ideal para uso diario, este tratamiento deja la mirada más firme, luminosa y descansada.",
        codigo_categoria: "1040",
        imagen: "imagenes/Dermohelp.jpg",
        precio: 59000,
        calificacion: 2
    },
    {
        codigo: "2080",
        nombre: "Gel Limpiador Dermanat con Ácido Hialurónico 120ml",
        descripcion_list: "Gel suave con ácido hialurónico y extractos naturales que limpia, hidrata y revitaliza sin resecar.",
        descripcion: "El Gel Limpiador Dermanat con Ácido Hialurónico 120ml está formulado para todo tipo de piel, especialmente sensible o con tendencia al acné. Su fórmula suave, libre de sulfatos y parabenos, combina ácido hialurónico con extractos naturales que limpian profundamente sin resecar. Remueve impurezas, exceso de grasa y contaminantes mientras hidrata y mejora la apariencia de la piel. Además, refuerza el sistema antioxidante cutáneo, aportando vitalidad y ayudando a prevenir el envejecimiento prematuro. Su pH balanceado mantiene el equilibrio natural de la piel, dejando el rostro fresco, suave y preparado para recibir otros tratamientos.",
        codigo_categoria: "1020",
        imagen: "imagenes/Limpiador_Dermanat.jpg",
        precio: 33000,
        calificacion: 3
    },
    {
        codigo: "2090",
        nombre: "Crema Facial Ana María Reafirmante con Filtro Solar",
        descripcion_list: "Crema con Firmiderm y filtro solar que reafirma, hidrata y mejora la elasticidad desde la primera aplicación.",
        descripcion: "La Crema Facial Ana María Reafirmante con Filtro Solar Skin Art está elaborada con Firmiderm, un activo botánico que refuerza la estructura de la piel y mejora su firmeza desde la primera aplicación. Su fórmula incluye liposomas reafirmantes que estimulan la síntesis de colágeno, ayudando a reducir visiblemente las arrugas y mejorar la tonicidad. Con el uso continuo, la piel se vuelve más tersa, hidratada y equilibrada, con una apariencia saludable y luminosa. Su textura suave se absorbe rápidamente, y está libre de fragancia y colorantes, lo que la hace ideal para pieles sensibles. Además, incorpora filtro solar para proteger el rostro de los efectos del sol en la rutina diaria.",
        codigo_categoria: "1030",
        imagen: "imagenes/Reafirmante.jpg",
        precio: 99000,
        calificacion: 5
    },
    {
        codigo: "2100",
        nombre: "Jabón de Carbón Activado Carbón y Menta Pili 100g",
        descripcion_list: "Jabón con carbón activado y menta que purifica, tonifica y reduce el brillo de la piel.",
        descripcion: "El Jabón de Carbón Activado Carbón y Menta Pili 100g limpia y purifica profundamente la piel, ayudando a eliminar impurezas, exceso de grasa y células muertas. Su fórmula con carbón activado absorbe toxinas y residuos, mientras la menta aporta una sensación refrescante y tonificante. Ideal para pieles mixtas a grasas, este jabón mejora la apariencia del rostro al reducir el brillo y dejar la piel suave, equilibrada y revitalizada. Puede usarse a diario como parte de la rutina de limpieza facial.",
        codigo_categoria: "1020",
        imagen: "imagenes/jabon_carbon.jpg",
        precio: 9000,
        calificacion: 3
    },
    {
        codigo: "2110",
        nombre: "Gel Dermanat Hidratante Facial 50ml",
        descripcion_list: "Jabón con carbón activado y menta que purifica, tonifica y reduce el brillo de la piel.",
        descripcion: "El Gel Dermanat Hidratante Facial 50ml ofrece una hidratación profunda sin dejar sensación grasosa ni brillo en la piel. Su fórmula avanzada combina dos tipos de ácido hialurónico, ceramidas y colágeno, que trabajan en conjunto para fortalecer la barrera cutánea, mejorar la elasticidad y prevenir los signos de envejecimiento. Además, está enriquecido con extractos naturales de centella asiática, aloe vera y té verde, conocidos por sus propiedades calmantes, antioxidantes y seborreguladoras. Ideal para todo tipo de piel, incluso las más sensibles, este gel ligero se absorbe rápidamente y puede usarse tanto en la rutina de día como de noche. Libre de alcohol, aceites, sulfatos y parabenos, y no probado en animales.",
        codigo_categoria: "1030",
        imagen: "imagenes/Dermanat_Hidratante_Facial.jpg",
        precio: 46000,
        calificacion: 5
    },
    {
        codigo: "2120",
        nombre: "Emulsión Hidratante Kaloe",
        descripcion_list: "Emulsión ligera con aloe vera, caléndula y vitamina E que hidrata, calma y protege sin dejar grasa.",
        descripcion: "La Emulsión Hidratante Kaloe ofrece una fórmula ligera y no grasosa, ideal para pieles mixtas y grasas. Enriquecida con activos naturales como caléndula, aloe vera, vitamina E, D-pantenol y romero, esta emulsión proporciona hidratación profunda mientras calma, protege y revitaliza la piel. Su textura suave se absorbe fácilmente, dejando el rostro fresco y equilibrado sin obstruir los poros. Perfecta para uso diario en rutinas de día y noche, ayuda a mantener la piel saludable, suave y con aspecto luminoso. Libre de ingredientes agresivos, es una opción confiable para quienes buscan hidratación efectiva con un enfoque natural.",
        codigo_categoria: "1030",
        imagen: "imagenes/D-pantenol.jpg",
        precio: 21500,
        calificacion: 4
    }
]