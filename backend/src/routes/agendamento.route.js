const express = require('express');
const router = express.Router();
const agendamentoController  = require('../controllers/agendamento.controller'); 

router.post('/', agendamentoController.create);
router.get('/', agendamentoController.findAll);

module.exports = router;