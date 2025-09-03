const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Reemplaza esto con la URI de tu base de datos
const MONGO_URI = 'mongodb://localhost:27017/mi_base_de_datos'; // Cambia el nombre de la base de datos según sea necesario

// Conectar a MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conectado a MongoDB');
        insertUsuarios(); // Llama a la función para insertar usuarios después de conectar
    })
    .catch(err => {
        console.error('Error al conectar a MongoDB:', err);
    });

// Definir el esquema y modelo de usuario
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

// Función para insertar usuarios
async function insertUsuarios() {
    const usuarios = [
        { username: 'alumno1', password: 'contraseña1', role: 'alumno' },
        { username: 'profesor1', password: 'contraseña2', role: 'profesor' }
    ];

    for (const usuario of usuarios) {
        try {
            // Encriptar la contraseña
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(usuario.password, salt);
            // Crear un nuevo usuario
            const newUser = new User({
                username: usuario.username,
                password: hashedPassword,
                role: usuario.role
            });
            await newUser.save();
            console.log(`Usuario ${usuario.username} insertado exitosamente.`);
        } catch (error) {
            console.error(`Error al insertar usuario ${usuario.username}:`, error);
        }
    }

    // Cerrar la conexión después de insertar
    mongoose.connection.close();
}
