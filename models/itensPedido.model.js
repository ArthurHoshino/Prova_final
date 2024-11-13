const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ItensPedidoSchema = new Schema({
    quantidade: {type: Number, required: true},
    produto: {
        type: Schema.Types.ObjectId,
        ref: "Produtos",
        required: true
    },
    pedido: {
        type: Schema.Types.ObjectId,
        ref: "Pedidos",
        required: true
    },
})

module.exports = mongoose.model("ItensPedidos", ItensPedidoSchema)