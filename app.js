// Datos de la sección de tecnologías. Se mantienen separados del diseño.
const categorias = {
    lenguajes: { nombres: ['Java', 'JavaScript', 'PHP', 'HTML', 'CSS'], descripcion: 'Lenguajes que utilizo en mi formación para practicar lógica, estructura y desarrollo web.' },
    datos: { nombres: ['Oracle SQL', 'MongoDB'], descripcion: 'Trabajo con bases de datos relacionales y documentales durante mi aprendizaje.' },
    herramientas: { nombres: ['Postman', 'GitHub'], descripcion: 'Herramientas que utilizo para probar peticiones y trabajar con mis proyectos.' },
    editores: { nombres: ['Eclipse', 'IntelliJ IDEA', 'Visual Studio Code'], descripcion: 'Los entornos en los que escribo, organizo y reviso mi código.' }
};
const pestanas = Array.from(document.querySelectorAll('[data-category]'));
function cambiarCategoria(boton) {
    const categoria = categorias[boton.dataset.category];
    for (const pestana of pestanas) {
        pestana.setAttribute('aria-selected', String(pestana === boton));
        pestana.tabIndex = pestana === boton ? 0 : -1;
    }
    const panel = document.getElementById('skill-panel');
    panel.setAttribute('aria-labelledby', boton.id);
    const lista = document.getElementById('skill-grid');
    lista.replaceChildren();
    for (const nombre of categoria.nombres) {
        const etiqueta = document.createElement('span');
        etiqueta.textContent = nombre;
        lista.appendChild(etiqueta);
    }
    document.getElementById('skill-description').textContent = categoria.descripcion;
}
for (const boton of pestanas) {
    boton.addEventListener('click', function () { cambiarCategoria(boton); });
    boton.addEventListener('keydown', function (evento) {
        let posicion = pestanas.indexOf(boton);
        if (evento.key === 'ArrowRight' || evento.key === 'ArrowDown') posicion = (posicion + 1) % pestanas.length;
        else if (evento.key === 'ArrowLeft' || evento.key === 'ArrowUp') posicion = (posicion + pestanas.length - 1) % pestanas.length;
        else if (evento.key === 'Home') posicion = 0;
        else if (evento.key === 'End') posicion = pestanas.length - 1;
        else return;
        evento.preventDefault();
        pestanas[posicion].focus();
        cambiarCategoria(pestanas[posicion]);
    });
}
// Los detalles explican el alcance real de los proyectos, sin simular una API.
const proyectos = {
    tienda: {
        titulo: 'Tienda de Gloria', etiqueta: '01 / JAVA · APLICACIÓN DE CONSOLA',
        intro: 'Un ejercicio académico que representa las operaciones básicas de una pequeña tienda.',
        funciones: ['Consultar el catálogo, los precios y las existencias.', 'Comprar productos y generar un ticket numerado.', 'Validar cantidades y evitar compras sin stock suficiente.', 'Devolver unidades compradas durante la misma sesión.'],
        aprendizaje: 'Clases, constructores y objetos compartidos. Uso de HashMap para relacionar productos y cantidades, y control de la entrada de datos con Scanner y try/catch.',
        contexto: 'Parte de mi ejercicio original, con mejoras realizadas con apoyo para validar entradas, mostrar el catálogo y controlar devoluciones. La versión ampliada se ha compilado y probado. Los datos se conservan solo durante la ejecución; no hay pagos reales ni base de datos.',
        archivo: 'downloads/Tienda.zip'
    },
    tapas: {
        titulo: 'Carta de tapas', etiqueta: '02 / JAVA · SPRING BOOT · JPA',
        intro: 'Un primer proyecto de API para practicar cómo llegan las peticiones a Java y cómo se accede a los datos.',
        funciones: ['Listar, consultar, crear, editar y eliminar tapas.', 'Filtrar por tipo y validar los datos recibidos.', 'Configurar SQL Server o un modo de demostración con H2.', 'Utilizar una pantalla de HTML, CSS y JavaScript que realiza peticiones a la API.'],
        aprendizaje: 'Separación entre entidad, repositorio y controlador. Operaciones HTTP y respuestas JSON. La interfaz y las operaciones añadidas forman parte de las ampliaciones que estoy estudiando.',
        contexto: 'Parte de mi API original, ampliada con apoyo. La compilación y la conexión completa entre pantalla, API y base de datos están pendientes de validación local. La imagen del portfolio es ilustrativa; no es una demo conectada. Proyecto de prácticas, sin autenticación ni pedidos reales.',
        archivo: 'downloads/Tapas.zip'
    }
};
const dialogo = document.getElementById('project-dialog');
let botonAnterior;
for (const boton of document.querySelectorAll('[data-project]')) {
    boton.addEventListener('click', function () {
        const proyecto = proyectos[boton.dataset.project];
        botonAnterior = boton;
        document.getElementById('dialog-title').textContent = proyecto.titulo;
        document.getElementById('dialog-label').textContent = proyecto.etiqueta;
        document.getElementById('dialog-intro').textContent = proyecto.intro;
        document.getElementById('dialog-learning').textContent = proyecto.aprendizaje;
        document.getElementById('dialog-context').textContent = proyecto.contexto;
        document.getElementById('dialog-download').href = proyecto.archivo;
        const lista = document.getElementById('dialog-features');
        lista.replaceChildren();
        for (const funcion of proyecto.funciones) {
            const elemento = document.createElement('li');
            elemento.textContent = funcion;
            lista.appendChild(elemento);
        }
        dialogo.showModal();
        document.body.style.overflow = 'hidden';
    });
}
document.querySelector('.dialog-close').addEventListener('click', function () { dialogo.close(); });
dialogo.addEventListener('click', function (evento) {
    const rectangulo = dialogo.getBoundingClientRect();
    if (evento.target === dialogo && (evento.clientX < rectangulo.left || evento.clientX > rectangulo.right || evento.clientY < rectangulo.top || evento.clientY > rectangulo.bottom)) dialogo.close();
});
dialogo.addEventListener('close', function () {
    document.body.style.overflow = '';
    if (botonAnterior) botonAnterior.focus();
});
