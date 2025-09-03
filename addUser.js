const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/user'); // Asegúrate de que esta ruta sea correcta

mongoose.set('strictQuery', true);

async function addUser(username, password, role) {
    if (!username || !password || !role) {
        console.error('Todos los campos son obligatorios: nombreUsuario, contraseña, rol');
        return;
    }

    try {
        await mongoose.connect('mongodb://localhost:27017/miProyecto', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Conectado a MongoDB...');
    } catch (err) {
        console.error('No se pudo conectar a MongoDB:', err);
        return; // Detener la ejecución si no se puede conectar
    }

    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = new User({
            usuario: username,
            contraseña: hashedPassword,
            rol: role
        });

        await newUser.save();
        console.log(`Usuario ${username} agregado exitosamente`);
    } catch (error) {
        if (error.code === 11000) {
            console.error('Error: El usuario ya existe.'); // Manejo de error de duplicados
        } else {
            console.error('Error al agregar usuario:', error);
        }
    } finally {
        await mongoose.connection.close(); // Cerrar la conexión
    }
}

// Prueba agregando usuarios
addUser('alumno1', 'contraseña123', 'alumno');
addUser('profesor1', 'contraseña456', 'profesor');
