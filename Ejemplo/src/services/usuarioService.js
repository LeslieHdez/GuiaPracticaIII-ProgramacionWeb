const bcrypt = require('bcrypt');
const prisma = require('../config/prisma');

const crearUsuario = async ({ nombre, email, password }) => {
    const existe = await prisma.usuario.findUnique({ where: { email }});
    if (existe) throw new Error('El Email ya esta registrado');

    const hashedPassword = await bcrypt.hash(password, 10);

    const usuario = await prisma.usuario.create({
        data: {
            nombre,
            email,
            password: hashedPassword
        },
    });

    return usuario;

};

//Obtener usuarios
const obtenerUsuarios = async () => {
    const usuarios = await prisma.usuario.findMany({
        select: {
            id: true,
            nombre: true,
            email: true,
            creadoEn: true,
        },
    });

    return usuarios;
};

//Eliminar usuarios
const eliminarUsuario = async (id) => {
    const usuario = await prisma.usuario.findUnique({ where: { id: parseInt(id) } });
    if (!usuario) throw new Error('Usuario no encontrado');

    await prisma.usuario.delete({where: { id: parseInt(id) } });
    return {mensaje: 'Usuario eliminado correctamente'};
};

//Actualizar usuarios
const actualizarUsuario = async (id, datos) => {
    const usuario = await prisma.usuario.findUnique({ where: { id: parseInt(id) } });
    if (!usuario) throw new Error('Usuario no encontrado');

    const datosActualizados = {
        nombre: datos.nombre,
        email: datos.email,
    };

    if (datos.password) {
        const bcrypt = require('bcrypt');
        datosActualizados.password = await bcrypt.hash(datos.password, 10);
    }

    const actualizado = await prisma.usuario.update({
        where: { id: parseInt(id) },
        data: datosActualizados,
    });

    return actualizado;
};

//Obtener usuario por Id
const obetenerUsuarioPorId = async (id) => {
    const usuario = await prisma.usuario.findUnique({
        where: {id: parseInt(id) },
        select: {
            id: true,
            nombre: true,
            email: true,
            creadoEn: true,
        }
    });

    if(!usuario) throw new Error('Usuario no encontrado');
    return usuario;
};

module.exports = {
    crearUsuario,
    obtenerUsuarios,
    eliminarUsuario,
    actualizarUsuario,
    obetenerUsuarioPorId,
};

