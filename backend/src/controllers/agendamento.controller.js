const agendamentoService = require('../services/agendamento.service');

const create = async function(req,res){
    const agendamento = await agendamentoService.create(req.body);
    res.send(agendamento)
}

const findAll = async function(req, res){
    const agendamentos = await agendamentoService.findAll();
    res.send(agendamentos)
}

module.exports = {
    create,
    findAll,
}