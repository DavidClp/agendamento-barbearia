const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuario.controller')
const verifyJWT = require('../middlewares/authorizator')
const usuarioValidator = require('../validators/usuario.validator')

router.post('/', usuarioValidator.create(), usuarioController.create);
/* router.post('/', usuarioValidator.create(), usuarioController.create) */

router.post('/login', usuarioValidator.login(), usuarioController.login)

router.get('/', verifyJWT, usuarioController.findAll)

router.get('/:id', verifyJWT, usuarioValidator.findById(), usuarioController.findById)

router.put('/:id', verifyJWT, usuarioController.update)

router.delete('/:id', verifyJWT, usuarioValidator.deletar(), usuarioController.deletar)

module.exports = router;