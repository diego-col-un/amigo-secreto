
Amigo Secreto
Descripción
Amigo Secreto es una aplicación web simple que permite agregar nombres de amigos a una lista y (en el futuro) sortear un "amigo secreto" para cada participante. Los nombres se ingresan mediante un campo de texto y se muestran en una lista con el formato "Amigo: Nombre". El proyecto está diseñado para ser fácil de entender, usando JavaScript básico con let, bucles for, y document.getElementById.
Características

Agregar amigos: Ingresa un nombre en un campo de texto y añádelo a la lista con un botón.
Mostrar lista: Los nombres se muestran en una lista HTML con el prefijo "Amigo: ".
Validación: Evita añadir nombres vacíos o inválidos.
Sorteo (pendiente): Incluye un botón para sortear amigos, pero la funcionalidad no está implementada aún.

Requisitos

Un navegador web moderno (Chrome, Firefox, etc.).
Los archivos index.html, app.js, style.css, y la carpeta assets/ con las imágenes amigo-secreto.png y play_circle_outline.png.

Instalación

Clona o descarga el repositorio.
Asegúrate de que los siguientes archivos estén en la misma carpeta:
index.html
app.js
style.css (puede estar vacío si no usas estilos personalizados)
assets/amigo-secreto.png y assets/play_circle_outline.png (o elimina las referencias a estas imágenes en index.html si no las tienes).


Abre index.html en un navegador.

Uso

Abre la página en un navegador.
Escribe un nombre en el campo de texto (por ejemplo, "Ana").
Haz clic en el botón Añadir para agregar el nombre a la lista.
La lista mostrará "Amigo: Ana", "Amigo: Luis", etc.
Si el campo está vacío, aparecerá una alerta pidiendo un nombre válido.
El botón Sortear amigo aún no tiene funcionalidad, pero muestra un mensaje en la consola.

Estructura de archivos

index.html: Estructura de la página con un campo de texto, botones, y listas para mostrar nombres.
app.js: Contiene la lógica para agregar nombres y actualizar la lista:
agregarAmigo(): Añade nombres al arreglo amigos y limpia el input.
actualizarLista(): Muestra los nombres en <ul id="listaAmigos"> con el formato "Amigo: Nombre".
sortearAmigo(): Placeholder para la funcionalidad de sorteo.


style.css: Archivo de estilos (puede estar vacío).
assets/: Carpeta con imágenes amigo-secreto.png y play_circle_outline.png.


Notas

El código usa JavaScript básico (let, bucle for, document.getElementById) para facilitar el aprendizaje.
La funcionalidad de sortear amigos está pendiente de implementación.
Si las imágenes en assets/ no están disponibles, elimina las líneas <img src="assets/..."> en index.html para evitar errores.

Futuras mejoras

Implementar sortearAmigo() para asignar un amigo secreto a cada participante.
Agregar estilos en style.css para mejorar la apariencia.
Permitir eliminar nombres de la lista.
