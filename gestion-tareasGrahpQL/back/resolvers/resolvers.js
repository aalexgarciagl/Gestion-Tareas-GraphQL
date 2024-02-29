const { getAllUsers, getUser, insertarUser, deleteUser, modificarUser } = require("../controllers/UserController");
const { login } = require("../controllers/authController");
const { getAllRoles, addRol, obtenerRolesUsuario, deleteRol } = require("../controllers/rolController");
const { getAllTasks, deleteTask, crearTarea, getTask, modificarTarea, asignarTarea, deleteAsignacion, getTaskLibres, getTareasByUserAsignado } = require("../controllers/taskController");



const resolvers = {
    Query: {
        getAllUsers: () => getAllUsers(),
        getAllTasks: () => getAllTasks(),
        getTask: (_, { id }) => getTask(id),
        getUser: (_, { id }) => getUser(id),
        getTaskLibres: () => getTaskLibres(),
        getTareasByUserAsignado: (_, { id }) => getTareasByUserAsignado(id),
        getAllRoles: () => getAllRoles(),
        getRolesUser: (_, { id }) => obtenerRolesUsuario(id)
    },
    Mutation: {
        login: async (_, { username, password }) => {
            return login(username, password);
        },
        insertarUser: (_, { nombre, user_name, password }) => {
            return insertarUser(nombre, user_name, password);
        },
        addRol: (_, { id_user, id_rol }) => {
            return addRol(id_user, id_rol);
        },
        deleteRol: (_, { id_user, id_rol }) => {
            return deleteRol(id_user, id_rol);
        },
        deleteUser: (_, { id }) => {
            return deleteUser(id);
        },
        modificarUser: (_, { id, nombre, user_name, password }) => {
            return modificarUser(id, nombre, user_name, password);
        },
        deleteTask: (_, { id }) => {
            return deleteTask(id);
        },
        crearTarea: (_, { descripcion, dificultad, horas_previstas, horas_realizadas, porcentage_realizacion, completada, asignada }) => {
            return crearTarea(descripcion, dificultad, horas_previstas, horas_realizadas, porcentage_realizacion, completada, asignada);
        },
        modificarTarea: (_, { id, descripcion, dificultad, horas_previstas, horas_realizadas, porcentage_realizacion, completada, asignada }) => {
            return modificarTarea(id, descripcion, dificultad, horas_previstas, horas_realizadas, porcentage_realizacion, completada, asignada);
        },
        asignarTarea: (_, { id_task, id_user }) => {
            return asignarTarea(id_task, id_user);
        },
        deleteAsignacion: (_, { id_task, id_user }) => {
            return deleteAsignacion(id_task, id_user);
        }
    }
}

module.exports = resolvers;