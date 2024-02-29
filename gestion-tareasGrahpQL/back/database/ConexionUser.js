const Conexion = require("./Conexion")
const models = require('../models/index'); 
const { json } = require('sequelize');
const Sequelize = require('sequelize');


class ConexionUser{

    insertarUser = async (name, user_name, password) => {
        const conx = new Conexion();
        let user = [];        
        conx.conectar();
        user = await models.User.create({name, user_name, password})
        conx.desconectar();  
        return user;
    }

    deleteUser = async (id) => {
        const conx = new Conexion();
        let user = [];
        
        conx.conectar();
        user = await models.User.destroy({
            where: {
                id: id
            }
        });
        conx.desconectar();  
        console.log(user)
        console.log("AQUIIII")
        return user;
    }

    getUser = async(id) => {
        const conx = new Conexion();
        let user = [];
        
        conx.conectar();
        user = await models.sequelize.query(`SELECT * FROM users WHERE id = '${id}'`);        
        conx.desconectar();  

        if(user[0].length === 0){
            return null;
        }                
        return user[0];
    }

    getUserUsername = async(username) => {
        const conx = new Conexion();
        let user = [];
        
        conx.conectar();
        user = await models.sequelize.query(`SELECT * FROM users WHERE user_name = '${username}'`);
        
        conx.desconectar();  
        if(user[0].length === 0){
            return json({'success':false,'msg':'No se ha encontrado el usuario'})
        }        
        
        return user[0]
    }

    obtenerRolesUsuarioPorUsername = async (username) => {
        const conx = new Conexion();
        try {
            conx.conectar();
          const query = `SELECT roles.nombre FROM users INNER JOIN usuario_roles ON users.id = usuario_roles.id_user INNER JOIN roles ON usuario_roles.id_rol = roles.id WHERE users.user_name = '${username}';`;
      
          const resultado = await models.sequelize.query(query);
            
          if (!resultado || resultado.length === 0) {
            return null; // O manejar el caso en que el usuario no exista o no tenga roles
          }
            conx.desconectar();
          const roles = resultado[0].map((row) => row.nombre);
          console.log(roles)
          return roles;
        } catch (error) {
          console.error('Error al obtener roles del usuario:', error);
          throw error;
        }
      };

    getAllUsers = async () => {
        const conx = new Conexion();
        conx.conectar();
        let users = await models.User.findAll();
        conx.desconectar();
        return users;
    }

    modificarUser = async (id, name, user_name, password) => {
        const conx = new Conexion();
        let user = [];
        
        conx.conectar();
        user = await models.User.update({name, user_name, password}, {
            where: {
                id: id
            }
        });
        conx.desconectar();  
        return user;
    }

}


module.exports = ConexionUser;