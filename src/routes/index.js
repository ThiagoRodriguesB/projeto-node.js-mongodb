import  express  from "express";
import  livrosRoutes from "./livrosRoutes.js";
import livros from "./livrosRoutes.js";


const routes = (app) =>{
    app.route('/').get((req, res)=>{
        res.status(200).send({titulo:"Curso de node"})
    })


    app.use(
        express.json(),
        livros
    )
}
export default routes;