const mongoose = require("mongoose")

const Schema = mongoose.Schema;

let PessoaSchema = new Schema({
    nome: {type: String, require: true, max: 150},
    cpf: {type: String, max: 15},
    telefone: {type: String, max: 300},
    cargo: {type: String, max: 100}
})

// exportar o modelo para uso no app
module.exports = mongoose.model("pessoas", PessoaSchema)