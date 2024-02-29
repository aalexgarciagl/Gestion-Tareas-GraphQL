const Conexion = require("./Conexion")
const models = require('../models/index'); 
const { json } = require('sequelize');
const Sequelize = require('sequelize');


class ConexionRol{

    getAllRoles = async () => {
        const conx = new Conexion();
        let roles = [];
        
        conx.conectar();
        roles = await models.Rol.findAll();
        conx.desconectar();  
        return roles;
    }

    addRol = async (id_user, id_rol) => {
        const conx = new Conexion();
        let user = [];
        
        conx.conectar();
        user = await models.Usuario_rol.create({id_user, id_rol})
        conx.desconectar();  
        return user;
    }

    deleteRol = async (id_user, id_rol) => {
        const conx = new Conexion();
        let user = [];
        
        conx.conectar();
        user = await models.Usuario_rol.destroy({
            where: {
                id_user: id_user,
                id_rol: id_rol
            }
        });
        conx.desconectar();  
        return user;
    }

    obtenerRolesUsuario = async (id_user) => {
        const conx = new Conexion();
        let roles = [];
        
        conx.conectar();
        roles = await models.sequelize.query(`SELECT r.id, r.nombre
        FROM roles r
        JOIN usuario_roles ur ON r.id = ur.id_rol
        JOIN users u ON ur.id_user = u.id
        WHERE u.id = ${id_user}`);
        conx.desconectar();  
        return roles[0];
    }

}

module.exports = ConexionRol;