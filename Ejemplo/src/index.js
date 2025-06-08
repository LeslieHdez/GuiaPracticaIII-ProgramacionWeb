require('dotenv').config();
const express = require('express');
const usuarioRoutes = require('./routes/usuarioRoutes');


const app = express();
app.use(express.json());

app.use('/api/usuarios', usuarioRoutes);

app.listen(3000, ()=> {

    console.log('servidor corriendo en http://localhost:3000');
});