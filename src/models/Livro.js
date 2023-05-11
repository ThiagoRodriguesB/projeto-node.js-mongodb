import mongoose from "mongoose";

const livrosSchema = new mongoose.Schema(
   {
    id: {type: String},
    titulo: {type: String, require: true},
    autor: {type: String, require: true},
    editora: {type: String, require: true},
    numerodePaginas: {type: Number}
   }
)

const livros= mongoose.model('livros', livrosSchema);

export default livros;
