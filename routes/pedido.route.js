const express = require('express')
const pedido_controller = require('../controllers/pedido.controller.js')
const router = express.Router()

router.post('/adicionarPedido', pedido_controller.create)

router.get('/listarPedido', pedido_controller.listar)

router.get('/listarPedido/:id', pedido_controller.listarPorId)

router.put('/editarPedido/:id/:produtoId', pedido_controller.update)

router.delete('/deletarPedido', pedido_controller.delete)

module.exports = router