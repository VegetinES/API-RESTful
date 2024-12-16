# API RESTful de Usuarios 🚀

API RESTful básica desarrollada con Node.js y Express que implementa operaciones CRUD para gestionar usuarios.

## Requisitos Previos 📋

- Node.js (versión 12 o superior)
- npm (normalmente viene con Node.js)
- Postman o Insomnia (para probar la API)

## Instalación 🔧

1. Clona el repositorio:
```bash
git clone https://github.com/VegetinES/API-RESTful.git
cd API-RESTful
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor:
```bash
node server.js
```

El servidor estará corriendo en `http://localhost:3000`

## Endpoints Disponibles 🛣️

### Obtener todos los usuarios
- **URL**: `/usuarios`
- **Método**: `GET`
- **Respuesta exitosa**: 
  - Código: 200
  - Contenido: Array de usuarios
```json
[
    {
        "id": 1,
        "nombre": "Juan Pérez",
        "email": "juan@ejemplo.com",
        "fecha_creacion": "2024-12-16T10:00:00.000Z"
    }
]
```

### Obtener un usuario específico
- **URL**: `/usuarios/:id`
- **Método**: `GET`
- **Parámetros URL**: `id=[integer]`
- **Respuesta exitosa**:
  - Código: 200
  - Contenido: Objeto usuario
- **Respuesta de error**:
  - Código: 404
  - Contenido: `{ "mensaje": "Usuario no encontrado" }`

### Crear nuevo usuario
- **URL**: `/usuarios`
- **Método**: `POST`
- **Body**:
```json
{
    "nombre": "Juan Pérez",
    "email": "juan@ejemplo.com"
}
```
- **Respuesta exitosa**:
  - Código: 201
  - Contenido: Usuario creado

### Actualizar usuario
- **URL**: `/usuarios/:id`
- **Método**: `PUT`
- **Parámetros URL**: `id=[integer]`
- **Body**:
```json
{
    "nombre": "Juan Pérez Actualizado",
    "email": "juan.actualizado@ejemplo.com"
}
```
- **Respuesta exitosa**:
  - Código: 200
  - Contenido: Usuario actualizado
- **Respuesta de error**:
  - Código: 404
  - Contenido: `{ "mensaje": "Usuario no encontrado" }`

### Eliminar usuario
- **URL**: `/usuarios/:id`
- **Método**: `DELETE`
- **Parámetros URL**: `id=[integer]`
- **Respuesta exitosa**:
  - Código: 204
  - Contenido: No content
- **Respuesta de error**:
  - Código: 404
  - Contenido: `{ "mensaje": "Usuario no encontrado" }`

## Ejemplos de Uso con Postman 🔍

1. **Crear un usuario**:
   - Método: POST
   - URL: `http://localhost:3000/usuarios`
   - Body (raw JSON):
   ```json
   {
       "nombre": "Juan Pérez",
       "email": "juan@ejemplo.com"
   }
   ```

2. **Obtener todos los usuarios**:
   - Método: GET
   - URL: `http://localhost:3000/usuarios`

3. **Obtener un usuario específico**:
   - Método: GET
   - URL: `http://localhost:3000/usuarios/1`

4. **Actualizar un usuario**:
   - Método: PUT
   - URL: `http://localhost:3000/usuarios/1`
   - Body (raw JSON):
   ```json
   {
       "nombre": "Juan Pérez Actualizado"
   }
   ```

5. **Eliminar un usuario**:
   - Método: DELETE
   - URL: `http://localhost:3000/usuarios/1`

## Estructura del Proyecto 📁

```
.
├── server.js         # Archivo principal del servidor
├── package.json      # Dependencias y configuración del proyecto
└── README.md         # Documentación
```

## Tecnologías Utilizadas 🛠️

- Node.js
- Express
- JavaScript

## Notas Adicionales 📝

- La API utiliza almacenamiento en memoria, por lo que los datos se perderán al reiniciar el servidor
- Los IDs se generan automáticamente de forma incremental
- Se incluyen timestamps de creación y actualización en los registros

## Mejoras Futuras 🚀

- Implementar una base de datos persistente
- Agregar autenticación y autorización
- Implementar validación de datos más robusta
- Agregar más endpoints para búsqueda y filtrado
- Implementar paginación
- Agregar tests automatizados

## Autor ✒️

Enrique Sequí Hernández

## Licencia 📄

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE.md](LICENSE.md) para detalles
