const express = require('express');
const path = require ("path")
const app = express();

const PORT = 4000;

app.set("views",path.join(__dirname,"./src/views"))
app.set("view engine","ejs")

const mainRoutes = require('./src/router/mainRoutes');
const shopRoutes = require('./src/router/shopRoutes');
const adminRoutes = require('./src/router/adminRoutes');
const authRoutes = require('./src/router/authRoutes');
const { notFoundPage } = require('./src/utils/errorHandlers');

/* Define carpeta de archivos estáticos */

app.use(express.static('public'));
//app.use(express.static(path.join(__dirname, 'public')));


/* Parsea los datos recibidos por POST */

app.use(express.urlencoded());
app.use(express.json());

/* Rutas de la aplicación */

app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);

app.use(notFoundPage);

app.listen(PORT, () => console.log(`🚀 Servidor corriendo en: http://localhost:${PORT}`))