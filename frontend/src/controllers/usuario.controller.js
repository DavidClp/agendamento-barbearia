const usuarioService = require('../services/usuario.service');
const { validationResult } = require('express-validator');
const createError = require('http-errors');

const create = async function(req,res, next){
    try {
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            throw createError(422, {errors: errors.array( )})
        }
        
        const response = await usuarioService.create(req.body);

        if(response && response.message){
            throw response
        }
        res.send(response)
    } catch (error) {
        return next(error)
    }
}

const login = async function(req, res, next){
    try {
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            throw createError(422, { errors: errors.array() })
        }

        const response = await usuarioService.login(req.body);

        if(response && response.message){
            throw response
        }
        res.send(response)
    } catch (error) {
        return next(error)
    }
}

const update = async function(req, res, next){
    try {
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            throw createError(422, { errors: errors.array() })
        }
        
        const response = await usuarioService.update({
            nome: req.body.nome
        }, req.params.id);
  

        if(response && response.message){
            throw response;
        }

        res.send(response)
    } catch (error) {
        return next(error);
    }
}

const findAll = async function(req, res){
    try {
        const usuarios = await usuarioService.findAll();
        res.send(usuarios)

    } catch (error) {
        return next(error)
    }
}

const findById = async function(req,res, next){
    try {
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            throw createError(422, { errors: errors.array() })
        }

        const response = await usuarioService.findById(req.params.id);

        if(response && response.message){
            throw response
        }
        res.send(response)
    } catch (error) {
        next(error)
    }
}

const deletar = async function(req,res, next){
    try {
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            throw createError(422, { errors: errors.array() })
        }

        const response = await usuarioService.deletar(req.params.id);

        if(response && response.message){
            throw response
        }
        res.send(response)
    } catch (error) {
        next(error)
    }
}


module.exports = {
    create: create,
    update,
    findAll,
    findById,
    deletar,
    login
}