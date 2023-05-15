import  express  from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";
import cors from 'cors';




db.on("error", console.log.bind(console, 'Erro de conexão'))

db.once("open", ()=> {
    console.log('Conexão com o banco feita com sucesso')
})

const app = express();
app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    app.use(cors());
    next();
})
app.use(express.json())
routes(app);




export default app