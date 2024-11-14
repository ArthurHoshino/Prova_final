const express = require('express')
const itensVenda_controller = require('../controllers/itensVenda.controller.js')
const router = express.Router()

router.post('/adicionarItensVenda', itensVenda_controller.create)

router.get('/listarItensVenda', itensVenda_controller.listar)

router.get('/listarItensVenda/:vendaId', itensVenda_controller.listarPorId)

router.put('/editarItensVenda/:produtoId/:vendaId', itensVenda_controller.update)

router.delete('/deletarItensVenda', itensVenda_controller.delete)

module.exports = router