const jwt = require('jsonwebtoken');


const generarToken = (uid = '',rol = []) => {
    let token = jwt.sign({uid,rol},process.env.SECRETORPRIVATEKEY,{
        expiresIn: '4h' 
    });
    
    return token;
}

module.exports = { 
    generarToken
}