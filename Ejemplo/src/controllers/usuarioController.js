const usuarioService = require('../services/usuarioService');

const registraUsuario = async (req, res) => {
    try {
        const usuario = await usuarioService.crearUsuario(req.body);
        res.status(201).json(usuario);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const obtenerUsuarios = async(req, res) => {
    try {
        const usuarios = await usuarioService.obtenerUsuarios();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const eliminarUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const respuesta = await usuarioService.eliminarUsuario(id);
        res.json(respuesta);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const actualizarUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const actualizado = await usuarioService.actualizarUsuario(id, req.body);
        res.json(actualizado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const obetenerUsuarioPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await usuarioService.obetenerUsuarioPorId(id);
        res.json(usuario)
    } catch (error) {
        res.status(404).json({ error: error.message});
    }
};

module.exports = {
    registraUsuario,
    obtenerUsuarios,
    eliminarUsuario,
    actualizarUsuario,
    obetenerUsuarioPorId,
};