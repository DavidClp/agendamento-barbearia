const usuarioRepository = require('../repositories/usuario.repository')
require('dotenv').config();
const createError  = require('http-errors');
const bcypt = require('bcrypt')
const { sign } = require('jsonwebtoken');

const create = async function(usuario){
    const thereIsUser = await usuarioRepository.findByWhere({email: usuario.email});

    if(thereIsUser){
        return createError(409, 'Usuário já existe')
    }

    usuario.senha = await bcypt.hash(usuario.senha, ~~process.env.SALT)
    const usuarioCriado = await usuarioRepository.create(usuario);
    return usuarioCriado;
}

const login = async function(usuario){
    const usuarioLogin = await usuarioRepository.findByWhere({email: usuario.email});
    if(!usuarioLogin){
        return createError(401, 'Usuário inválido')
    }

    const comparacaoSenha = await bcypt.compare(usuario.senha, usuarioLogin.senha)
    if(!comparacaoSenha){
        return createError(401, 'Usuário inválido')
    }

    const token = sign({
        id: usuarioLogin.id
    }, process.env.SECRET,{
        /* expiresIn: 1000 */
    })
    delete usuarioLogin.senha

    return{
        auth: true,
        usuario: usuarioLogin,
        token: token
    }
}

const update =  async function(usuario, id){
    const thereIsUSer = await usuarioRepository.findById(id)

    if(!thereIsUSer){
        return createError(404, 'Usuário não existe');
    }

    await usuarioRepository.update(usuario, id)

    return await usuarioRepository.findById(id)
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

const deletar = async function(id){
    const usuario = await usuarioRepository.findById(id);
    
    if(!usuario){
        return createError(404, "Usuário não encontrado")
    }
    await usuarioRepository.deletar(id)
    return usuario;
}

module.exports = {
    create: create,
    update,
    findAll,
    findById,
    deletar,
    login
}