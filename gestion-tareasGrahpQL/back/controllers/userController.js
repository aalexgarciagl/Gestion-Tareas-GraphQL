const Conexion = require('../database/ConexionUser');

const getAllUsers = async () => {
    const conx = new Conexion();
    const users = await conx.getAllUsers();
    console.log(users)
    return users;
}


const getUser = async (id) => {
    try {
        const conx = new Conexion();
        const user = await conx.getUser(id);
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const insertarUser = async (nombre, user_name, password) => {
    const conx = new Conexion();
    const user = await conx.insertarUser(nombre, user_name, password);
    return user;
}

const deleteUser = async (id) => {
    const conx = new Conexion();
    const user = await conx.deleteUser(id);
    return user;

}

const modificarUser = async (id, nombre, user_name, password) => {
    const conx = new Conexion();
    const user = await conx.modificarUser(id, nombre, user_name, password);
    return user;
}


module.exports = {
    getAllUsers,
    getUser,
    insertarUser,
    deleteUser,
    modificarUser
}