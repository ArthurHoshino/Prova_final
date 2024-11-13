const express = require('express')
const itensPedido_controller = require('../controllers/itensPedido.controller.js')
const router = express.Router()

router.post('/adicionarItensPedido', itensPedido_controller.create)

router.get('/listarItensPedido', itensPedido_controller.listar)

router.get('/listarItensPedido/:pedidoId', itensPedido_controller.listarPorId)

router.put('/editarItensPedido/:produtoId/:pedidoId', itensPedido_controller.update)

router.delete('/deletarItensPedido', itensPedido_controller.delete)

module.exports = router