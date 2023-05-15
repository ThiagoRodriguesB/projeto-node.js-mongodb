import livros from "../models/Livro.js";
import  express  from "express";




var app = express()



class livroController{

    static listarLivros = async (req, res) =>{
        const liv = await livros.find()
            res.status(200).send({
                liv
        })
    }

    static listarLivroPorId = (req, res) => {
        const id =req.params.id;

    }

    static cadastrarLivro = async (req, res)=>{
        let livro = new livros(req.body);
            livro.save().then(()=>{
                res.status(201).send(livro.toJSON())
            }).catch((err)=>{
                res.status(500).send({message:`${err.message} - falha ao cadastrar livro.`})
            })       
    }

    static atualizarLivro = 
    (req, res)=>{
        
        const id = req.params.id;
        
        livros.findByIdAndUpdate(id, {$set:req.body}, function (err) {
                if (!err) {
                    res.status(200).send({ message: 'Livro atualizado com sucesso' })

                } else {
                    res.status(500).send({ message: err.message })
                }
            })
   }

   static excluirLivro = (req, res) =>{
    const id = req.params.id;

    livros.findByIdAndDelete(id, (err)=>{
        if(!err){
            res.status(200).send({message: 'Livro removido com sucesso'})
        } else{
            res.status(500).send({message: err.message})
        }
    })
   }

}

export default livroController