const agendamentoRepository = require('../repositories/agendamento.repository')

const create = async function(agendamento){
    const agendamentoCriado = await agendamentoRepository.create(agendamento);
    return agendamentoCriado;
}

const findAll = async function(){
    const agendamentos = await agendamentoRepository.findAll();
    return agendamentos;
}

module.exports = {
    create: create,
    findAll,
}