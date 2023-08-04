const express = require('express');
const router = express.Router();
const verifyJWT = require('../middlewares/authorizator')
const agendamentoController  = require('../controllers/agendamento.controller'); 

router.post('/', verifyJWT, agendamentoController.create);
router.get('/', verifyJWT, agendamentoController.findAll);

module.exports = router;