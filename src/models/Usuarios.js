const baseQUery = require('./baseQuery')

class Usuarios{

    insere(usuario){
        return baseQUery("INSERT into usuarios SET ?", usuario);

    }

    buscarPorEmail(email){
        return baseQUery ( "SELECT * FROM usuarios WHERE email = ?", email);

    }
}

module.exports = Usuarios;