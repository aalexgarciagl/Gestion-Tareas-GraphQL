# Gestor de Tareas
Este proyecto es una aplicación para gestionar tareas desarrollada con Node.js, Angular 17 y GraphQL.

## Instalación

### Back-end

1. Dirígete a la carpeta `back` y ejecuta `npm install`.
2. Renombra `.env.example` a `.env` y configura tus preferencias.
3. Crea la base de datos con el nombre dado en el .env. Utiliza migraciones (`npx sequelize-cli db:migrate`) y (`npx sequelize-cli db:seed:all`) o la base de datos exportada.
4. Asegúrate de tener phpMyAdmin lanzado y ejecuta `nodemon`.

### Cliente (Front-end)

1. En la carpeta `front`, ejecuta `npm install`.
2. Lanza el cliente con `ng s --o`.

## Acceso

- **Admin:** `admin` / `1234` (Gestión de usuarios, visualización y modificación de tareas, asignación de usuarios a tareas.)
- **Programador:** `programador` / `1234` (Visualiza todas las tareas, visualiza sus tareas asignadas y las no asignadas con opcion a asignarselas y desasignarselas)

## IMPORTANTE
Si a la hora de realizar cambios o peticiones no se ven cambios en el cliente es normal, recarga la pagina y todo funcionara correctamente. 
