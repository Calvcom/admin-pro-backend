require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');

// Crear el servidor de express
const app = express();

// Configurar CORS
app.use(cors() );
// Base de datos
dbConnection();


// mean_user
// MNteIKNeY3vzCv4p

// Rutas
app.get( '/', (req, res) => {

    res.json({
        ok: true,
        msg: 'Hola Gente Caribe'
    });

});


app.listen( process.env.PORT, () => {
    console.log('servidor corriendo en puerto ' + process.env.PORT)
});



