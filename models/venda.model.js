const mongoose = require('mongoose')

const Schema = mongoose.Schema

const VendaSchema = new Schema({
    cliente: {
        type: Schema.Types.ObjectId,
        ref: "Clientes",
        required: true
    },
    itensPedido: {
        type: Schema.Types.ObjectId,
        ref: "ItensVenda"
    }
})

module.exports = mongoose.model("Vendas", VendaSchema)