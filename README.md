API MVC - Node.js
Descripción

Se desarrolló una API usando Node.js, Express y PostgreSQL aplicando el patrón MVC.
El proyecto permite registrar usuarios, iniciar sesión y gestionar tareas.

Lo que se hizo

Registro de usuarios con contraseña encriptada

Inicio de sesión validando credenciales

CRUD de tareas:

Crear tarea

Listar tareas

Actualizar tarea

Eliminar tarea

Conexión a base de datos PostgreSQL

Uso de relaciones entre tablas (usuarios y equipos con tareas)

Estructura básica

controllers: lógica de la aplicación

models: consultas a la base de datos

routes: rutas de la API

db: conexión a la base de datos

server.js: archivo principal

Rutas principales
Auth

POST /auth/register

POST /auth/login

Tasks

GET /tasks

POST /tasks

PUT /tasks/:id

DELETE /tasks/:id

Notas

Las contraseñas se guardan encriptadas con bcrypt

No se devuelve la contraseña en las respuestas

Para crear tareas se necesita un usuario y un equipo existente

Ejecución
npm install
node server.js
