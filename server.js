// server.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Array para almacenar usuarios en memoria
let users = [];

// GET /usuarios - Obtener todos los usuarios
app.get('/usuarios', (req, res) => {
    res.json(users);
});

// GET /usuarios/:id - Obtener un usuario específico
app.get('/usuarios/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
    res.json(user);
});

// POST /usuarios - Crear un nuevo usuario
app.post('/usuarios', (req, res) => {
    const user = {
        id: users.length + 1,
        nombre: req.body.nombre,
        email: req.body.email,
        fecha_creacion: new Date()
    };
    users.push(user);
    res.status(201).json(user);
});

// PUT /usuarios/:id - Actualizar un usuario
app.put('/usuarios/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    user.nombre = req.body.nombre || user.nombre;
    user.email = req.body.email || user.email;
    user.fecha_actualizacion = new Date();

    res.json(user);
});

// DELETE /usuarios/:id - Eliminar un usuario
app.delete('/usuarios/:id', (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex === -1) {
        return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    users.splice(userIndex, 1);
    res.status(204).send();
});

// Manejo básico de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ mensaje: 'Algo salió mal!' });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});