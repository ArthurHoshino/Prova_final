const express = require('express')
const venda_controller = require('../controllers/venda.controller.js')
const router = express.Router()

router.post('/adicionarVenda', venda_controller.create)

router.get('/listarVenda', venda_controller.listar)

router.get('/listarVenda/:id', venda_controller.listarPorId)

router.put('/editarVenda/:id', venda_controller.update)

router.delete('/deletarVenda', venda_controller.delete)

module.exports = router