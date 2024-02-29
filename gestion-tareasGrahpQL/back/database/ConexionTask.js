const Conexion = require("./Conexion")
const models = require('../models/index'); 
const { json } = require('sequelize');
const Sequelize = require('sequelize');


class ConexionTask{

    getAllTasks = async () => {
        const conx = new Conexion();
        let tasks = [];
        
        conx.conectar();
        tasks = await models.Task.findAll();
        conx.desconectar();  
        return tasks;
    }

    deleteTask = async (id) => {
        const conx = new Conexion();
        let task = [];
        
        conx.conectar();
        task = await models.Task.destroy({
            where: {
                id: id
            }
        });
        conx.desconectar();  
        return task;
    }

    crearTarea = async (descripcion, dificultad, horas_previstas, horas_realizadas, porcentage_realizacion, completada, asignada) => {
        const conx = new Conexion();
        let task = [];
        
        conx.conectar();
        task = await models.Task.create({descripcion, dificultad, horas_previstas, horas_realizadas, porcentage_realizacion, completada, asignada: null})
        conx.desconectar();  
        return task;
    }

    getTask = async(id) => {
        const conx = new Conexion();
        let task = [];
        
        conx.conectar();
        task = await models.sequelize.query(`SELECT * FROM tasks WHERE id = '${id}'`);        
        conx.desconectar();  

        if(task[0].length === 0){
            return null;
        }                
        return task[0];
    }

    modificarTarea = async (id, descripcion, dificultad, horas_previstas, horas_realizadas, porcentage_realizacion, completada, asignada) => {
        const conx = new Conexion();
        let task = [];
        
        conx.conectar();
        if(asignada == 0){
            asignada = null;
        }
        task = await models.Task.update({descripcion, dificultad, horas_previstas, horas_realizadas, porcentage_realizacion, completada, asignada}, {
            where: {
                id: id
            }
        });
        conx.desconectar();  
        return task;
    }

    asignarTarea = async (id_task, id_user) => {
        const conx = new Conexion();
        let task = [];
        
        conx.conectar();
        task = await models.sequelize.query(`update tasks set asignada = ${id_user} where id = ${id_task}`);
        conx.desconectar();  
        return task;
    }

    getTaskLibres = async () => {
        const conx = new Conexion();
        let task = [];
        
        conx.conectar();
        task = await models.sequelize.query(`SELECT * FROM tasks WHERE asignada IS NULL`);        
        conx.desconectar();  
        return task[0];
    }

    deleteAsignacion = async (id_task, id_user) => {
        const conx = new Conexion();
        let task = [];
        
        conx.conectar();
        task = await models.sequelize.query(`update tasks set asignada = null where id = ${id_task}`);
        conx.desconectar();  
        return task;
    }

    getTareasByUserAsignado = async (id) => {
        const conx = new Conexion();
        let task = [];
        
        conx.conectar();
        task = await models.sequelize.query(`SELECT * FROM tasks WHERE asignada = ${id}`);        
        conx.desconectar();  
        return task[0];
    }    
    
}

module.exports = ConexionTask;