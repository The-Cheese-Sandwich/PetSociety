# PetSociety

Este proyecto fue generado por [Angular CLI](https://github.com/angular/angular-cli) versión 13.1.2.

## Resumen
Pet Society es una aplicación web enfocada en la publicación de mascotas extraviadas o que buscan ser adoptadas.

## Development server

Para levantar la aplicación, usar los siguientes comandos:
- npm run start:server (backend)
- npm start (frontend)

## Recomendaciones:
Si por algún motivo salen errores en el código, instalar los siguientes comandos:
- npm i
- npm i --save jsonwebtoken

## Funcionalidades
El usuario podrá realizar las siguientes acciones:
1. Registrarse con su correo electrónico y una contraseña.
2. Iniciar sesión (previamente registrado)
3. Cerrar Sesión
4. Crear publicaciones con las siguientes características:
5. Imagen de la mascota.
6. Descripción de la mascota, ya sea para describir el extravío o la disponibilidad de adopción.
7. Editar/ Eliminar las publicaciones (previamente creadas).
8. Ver publicaciones de otros usuarios.

## Observaciones (Datos importantes a considerar)

- Las imágenes deben ser de extensión .png .jpeg .jpg .jfif

- Todas las imágenes están almacenadas de forma local, cuando terceras personas realicen sus publicaciones no se podrán ver las imágenes de estas. Por lo tanto en la consola aparecerán errores de tipo GET. 

- Cuando el usuario ingresa una imagen para publicar, se recomienda usar una imagen cuadrada para que no aparezca con cortes.

- La base de datos usada fue “MongoDB Atlas” por lo que no se necesita instalar localmente MongoDB.

- El de usuario con la opción de cerrar sesión no se cierra automáticamente, para cerrarlo se debe volver a presionar la sección de los datos de usuario en el dashboard. 

- Al cerrar el dialog de crear o editar publicación se redirige a publicaciones, para evitar problemas anteriores.


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
