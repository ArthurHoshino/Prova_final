const express = require('express')
const produto_controller = require("../controllers/produto.controller.js")
const router = express.Router()

router.post('/adicionarProduto', produto_controller.create)

router.get('/listarProduto', produto_controller.listar)

router.get('/listarProduto/:id', produto_controller.listarPorId)

router.put('/editarProduto/:id', produto_controller.update)

router.delete('/deletarProduto', produto_controller.delete)

module.exports = router