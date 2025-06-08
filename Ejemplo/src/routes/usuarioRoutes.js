const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.post('/registro', usuarioController.registraUsuario); //Ruta para registrar usuarios
router.get('/', usuarioController.obtenerUsuarios); //Ruta para obtener los usuarios
router.delete('/:id', usuarioController.eliminarUsuario); // Ruta para eliminar usuarios
router.put('/:id', usuarioController.actualizarUsuario); // Rura para actualizar usuarios
router.get('/:id', usuarioController.obetenerUsuarioPorId); // Ruta para obtener uuario por Id

module.exports = router;