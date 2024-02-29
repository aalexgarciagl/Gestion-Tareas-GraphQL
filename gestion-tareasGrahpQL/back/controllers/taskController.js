const Conexion = require('../database/ConexionTask');


const getAllTasks = async () => {
    const conx = new Conexion();
    const tasks = await conx.getAllTasks();
    return tasks;
}

const deleteTask = async (id) => {
    const conx = new Conexion();
    const task = await conx.deleteTask(id);
    return task;

}

const getTask = async (id) => {
    const conx = new Conexion();
    const task = await conx.getTask(id);
    return task;
}

const modificarTarea = async (id, descripcion, dificultad, horas_previstas, horas_realizadas, porcentage_realizacion, completada, asignada) => {
    const conx = new Conexion();
    const task = await conx.modificarTarea(id, descripcion, dificultad, horas_previstas, horas_realizadas, porcentage_realizacion, completada, asignada);
    return task;
}

const crearTarea = async (descripcion, dificultad, horas_previstas, horas_realizadas, porcentage_realizacion, completada, asignada) => {
    const conx = new Conexion();
    const task = await conx.crearTarea(descripcion, dificultad, horas_previstas, horas_realizadas, porcentage_realizacion, completada, asignada);
    return task;
}

const asignarTarea = async (id_task, id_user) => {
    const conx = new Conexion();
    const task = await conx.asignarTarea(id_task, id_user);
    return task;
}

const deleteAsignacion = async (id_task, id_user) => {
    const conx = new Conexion();
    const task = await conx.deleteAsignacion(id_task, id_user);
    return task;
}

const getTaskLibres = async () => {
    const conx = new Conexion();
    const tasks = await conx.getTaskLibres();
    return tasks;
}

const getTareasByUserAsignado = async (id) => {
    const conx = new Conexion();
    const tasks = await conx.getTareasByUserAsignado(id);
    return tasks;
}

module.exports = {
    getAllTasks,
    deleteTask,
    crearTarea,
    getTask,
    modificarTarea,
    asignarTarea,
    deleteAsignacion,
    getTaskLibres,
    getTareasByUserAsignado
}
