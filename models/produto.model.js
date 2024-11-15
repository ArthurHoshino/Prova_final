const mongoose = require("mongoose")

const Schema = mongoose.Schema;

let ProdutoSchema = new Schema({
    item: {type: String, required: true, max: 150},
    categoria: {type: String, required: true, max: 15},
    preco: {type: Number, required: true, max: 300},
    itensVenda: {type: Schema.Types.ObjectId, ref: "ItensVendas"}
})

// exportar o modelo para uso no app
module.exports = mongoose.model("Produtos", ProdutoSchema)