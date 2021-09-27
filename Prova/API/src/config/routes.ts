import { Router } from "express";
import { PessoaController } from "../controllers/PessoaController";

const router = Router();
const pessoaController = new PessoaController();

//Métodos HTTP -> GET, POST e etc...
// GET -> Solitar recursos/dados do servidor
// POST -> Enviar recursos/dados/entidades para o servidor

// rotas para registrar
router.post("/pessoa/cadastrar", pessoaController.cadastrar);

// rotas para listagem
router.get("/pessoa/listar/", pessoaController.listar);



export { router };
