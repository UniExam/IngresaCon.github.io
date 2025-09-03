const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const bcrypt = require('bcrypt');
const session = require('express-session');
const User = require('./models/user'); // Asegúrate de tener el modelo definido

const app = express();
const PORT = 3000;

// Configuraciones para leer datos del formulario
app.use(express.urlencoded({ extended: true }));

// Configuración de sesión
app.use(session({
    secret: 'mySecret',
    resave: false,
    saveUninitialized: false
}));

// Middleware para comprobar la sesión
app.use((req, res, next) => {
    console.log('Sesión actual:', req.session); // Muestra la sesión actual
    next();
});

// Sirviendo archivos estáticos (HTML e imágenes) desde el directorio actual
app.use(express.static(path.join(__dirname)));

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/miProyecto', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Conectado a MongoDB');
}).catch(err => {
    console.error('Error al conectar a MongoDB:', err);
});

// Rutas para tus archivos HTML
app.get('/', (req, res) => {
    res.redirect('/login'); // Redirigir a la página de login
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

// Rutas para demás páginas HTML
app.get('/nosotros', (req, res) => {
    res.sendFile(path.join(__dirname, 'NOSOTROS.html'));
});

app.get('/contactos', (req, res) => {
    res.sendFile(path.join(__dirname, 'Contactos.html'));
});

app.get('/aviso-de-privacidad', (req, res) => {
    res.sendFile(path.join(__dirname, 'Aviso de privacidad.html'));
});

// Rutas del dashboard
app.get('/dashboard', (req, res) => {
    if (req.session.user && req.session.user.rol === 'alumno') {
        res.sendFile(path.join(__dirname, 'dashboard.html'));
    } else {
        res.redirect('/login');
    }
});

app.get('/dashboard/:userId', (req, res) => {
    const userId = req.params.userId;
    // Aquí obtienes los datos del usuario de la base de datos
    // y luego renderizas la página usando esos datos
    res.render('dashboard', { userData: userData });
});

app.get('/dashboard_profesores', (req, res) => {
    if (req.session.user && req.session.user.rol === 'profesor') {
        res.sendFile(path.join(__dirname, 'dashboard_profesores.html'));
    } else {
        res.redirect('/login');
    }
});

// Ruta para el inicio de sesión
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ usuario: username });
        if (user) {
            const validPassword = await bcrypt.compare(password, user.contraseña);
            if (validPassword) {
                req.session.user = { ...user.toObject(), rol: user.rol };
                
                if (user.rol === 'profesor') {
                    return res.redirect('/dashboard_profesores');
                } else if (user.rol === 'alumno') {
                    return res.redirect('/dashboard');
                } else {
                    return res.status(403).send('Rol no permitido');
                }
            } else {
                return res.status(401).send('Contraseña incorrecta');
            }
        } else {
            return res.status(404).send('Usuario no encontrado');
        }
    } catch (error) {
        return res.status(500).send('Error en el servidor');
    }
});

// Cerrar sesión
app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/login');
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
