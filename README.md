# Portfolio de Gloria Orta

Web estática con HTML, CSS y JavaScript, sin instalación ni compilación.

## Archivos

- dist/index.html: contenido, navegación, presentación, proyectos, formación y contacto.
- dist/styles.css: colores, tipografías, distribución y adaptación a pantallas pequeñas.
- dist/app.js: dos comportamientos: cambiar la categoría de tecnologías y abrir/cerrar los detalles de un proyecto.
- dist/downloads: código descargable de los proyectos.

## Qué estudiar primero

1. Busca `id="sobre-mi"` en index.html y cambia un párrafo.
2. Abre styles.css: las variables de :root definen los colores.
3. En app.js, categorias almacena los textos de tecnologías. cambiarCategoria actualiza la sección.
4. proyectos almacena las fichas. Un evento click rellena el dialog y lo muestra con showModal().
5. Los enlaces mailto y tel abren el programa de correo o llamada del visitante. No envían mensajes automáticamente.

## Ejecutar

Abre dist/index.html en el navegador. Para servirlo localmente con Python: `python -m http.server 8000 --directory dist` y abre http://localhost:8000.

## Publicar en un alojamiento estático

Se publica el contenido de dist. Para GitHub Pages se pueden colocar esos archivos en la raíz del repositorio o en la carpeta configurada para publicar. No hace falta desplegar Java: el portfolio muestra los proyectos y permite descargar su código; el backend de Tapas se ejecuta aparte.

## Veracidad y pendientes

Los gráficos de proyectos son composiciones ilustrativas hechas con HTML/CSS, no capturas de una aplicación desplegada. El modal de Tapas explica la validación local pendiente. No se inventan fechas académicas, centros, certificados ni perfiles de GitHub. El nivel B2–C1 es el indicado por Gloria, no se presenta como certificado.

Se han comprobado en navegador de escritorio la carga, las fichas y la navegación de tecnologías, incluida la navegación por teclado y el cierre con Escape. Se revisan además los enlaces locales y la sintaxis JavaScript. Las reglas móviles están incluidas; la visualización móvil no se ha comprobado en un dispositivo real.

La web se ha preparado con apoyo. Antes de una entrevista, practica las dos funciones interactivas y revisa los proyectos para poder explicar cada parte.
