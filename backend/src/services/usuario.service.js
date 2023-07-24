const usuarioRepository = require('../repositories/usuario.repository')
require('dotenv').config();
const createError  = require('http-errors');
const bcypt = require('bcrypt')

const create = async function(usuario){
    const thereIsUser = await usuarioRepository.findByWhere({email: usuario.email});

    if(thereIsUser){
        return createError(409, 'Usuário já existe')
    }

    usuario.senha = await bcypt.hash(usuario.senha, ~~process.env.SALT)
    const usuarioCriado = await usuarioRepository.create(usuario);
    return usuarioCriado;
}

const findAll = async function(){
    const usuarios = await usuarioRepository.findAll();
    return usuarios;
}

const findById = async function(id){
    const usuario = await usuarioRepository.findById(id);
    
    if(!usuario){
        return createError(404, "Usuário não encontrado")
    }
    return usuario;
}


module.exports = {
    create: create,
    findAll,
    findById
}