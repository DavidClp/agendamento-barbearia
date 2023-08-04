const { Agendamento } = require('../database/models/index')

const create = async function(agendamento){
    const agendamentoCriado = await Agendamento.create(agendamento);
    return agendamentoCriado;
}

const update = async function(agendamento, id){
    
}

const findAll = async function(){
    const agendamentos = await Agendamento.findAll();
    return agendamentos;
}

module.exports = {
    create: create,
    findAll,
}