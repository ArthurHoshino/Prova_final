const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ItensVendaSchema = new Schema({
    quantidade: {type: Number, required: true},
    produto: {
        type: Schema.Types.ObjectId,
        ref: "Produtos",
        required: true
    },
    venda: {
        type: Schema.Types.ObjectId,
        ref: "Vendas",
        required: true
    },
})

module.exports = mongoose.model("ItensVenda", ItensVendaSchema)