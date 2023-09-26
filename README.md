# Interfaz de Banco
Interfaz de banco, para la creación, edición, eliminación, y consulta de datos.  </br>
Los diseños y estilos están todos desarrollados con CSS vanila, y los elementos creados con etiquetas de html puro.
Se hizo uso de Custom Hooks para el manejo del estado en el filtro de la barra de búsqueda, así como la actulización de resultados en la tabla, así mismo se creó funciones para la realización de peticiones de tipo: POST, PUT, DELETE y GET.
 </br>
Los componentes visuales y las páginas fueron subdivididas, en diferentes directorios, uno manejando la parte funcional, y el otro la parte visual, el cual hereda las propiedades necesarias, para su correcto funcionamiento. Así mismo se hizo uso de un directorio utils para la adición de funciones reutilizables.

## Instalación

Primero instalar el programa:

```bash
npm install
```

Luego correr el programa:

```bash
npm run start
```

## Funcionalidad

- Funcionalidad de mostrar productos
- Funcionalidad de buscar productos
- Funcionalidad de agregar productos
- Funcionalidad de editar productos
- Funcionalidad de eliminar productos

## Organizacion

📦interfaz-banco </br>
┣ 📂 test **Directorio para pruebas** </br>
┃ ┣ 📜form.test.jsx </br> 
┃ ┣ 📜input.test.jsx </br> 
┃ ┣ 📜row.test.jsx </br> 
┣ 📂public </br>
┃ ┗ 📜index.html </br>
┣ 📂src </br>
┃ ┣ 📂app # Directorio para las rutas </br>
┃ ┃ ┗ App.js </br> 
┃ ┣ 📂components # Componentes reutilizables </br>
┃ ┣ 📂hooks # Hooks personalizados </br>
┃ ┣ 📂pages # Componentes de página </br>
┃ ┣ 📂utils # Funciones de utilidad </br>
┃ ┣ 📂styles # Estilos de pantallas </br>
┃ ┗ 📜index.js # Punto de entrada principal </br>
┃ ┗ 📜index.css # Punto de entrada principal de estilos </br>
┗ 📜README.md </br>
┗ 📜.gitignore </br>
┗ 📜.prettierrc </br>
┗ 📜babel.config.js </br>
┗ 📜package.json </br>
