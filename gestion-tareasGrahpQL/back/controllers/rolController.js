const Conexion = require('../database/ConexionRol');


const getAllRoles = async () => {
    const conx = new Conexion();
    const roles = await conx.getAllRoles();
    console.log(roles)
    return roles;
}

const addRol = async (id_user, id_rol) => {
    const conx = new Conexion();
    const user = await conx.addRol(id_user, id_rol);
    return user;
}

const deleteRol = async (id_user, id_rol) => {
    const conx = new Conexion();
    const user = await conx.deleteRol(id_user, id_rol);
    return user;
}

const obtenerRolesUsuario = async (id_user) => {
    const conx = new Conexion();
    const roles = await conx.obtenerRolesUsuario(id_user);
    return roles;
}

module.exports = {
    getAllRoles,
    addRol,
    obtenerRolesUsuario,
    deleteRol
}