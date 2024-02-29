const Conexion = require('../database/ConexionUser');
const { generarToken } = require('../helpers/generarTokens');


const login = async (username, password) => {
    const conx = new Conexion();
    const user = await conx.getUserUsername(username);
    console.log(user[0])
    console.log(username, password)
    if (!user) {
        return {
            success: false,
            token: null
        }
    }
    
    if(password != user[0].password){
        return {
            success: false,
            token: null
        }
    }
    const roles = await conx.obtenerRolesUsuarioPorUsername(username);
    const token = generarToken(user[0].id, roles);

    return {
        success: true,
        token: token
    }
}




module.exports = {
    login
}