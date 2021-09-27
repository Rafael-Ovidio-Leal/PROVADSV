import { Request, Response } from "express";
import {PessoaSchema} from "../models/PessoaSchema";

class PessoaController {

  // CADASTRAR
  async cadastrar(request: Request, response: Response) {
    try {
      const novaPessoa = await PessoaSchema.create(request.body);
      response.status(201).json({data: novaPessoa, error: false, msg: "Pessoa cadastrado com sucesso!",});
    } catch (error) {
      response.status(400).json({
        data: error,
        error: true,
        msg: "Não foi possível cadastrar a Pessoa",
      });
    }
  }

  //LISTAR
  async listar(request: Request, response: Response) {
    try {
      const pessoa = await PessoaSchema.find();
      response.status(200).json({pessoa});
    } catch (error) {
      response.status(404).json({ data: error, error: true, msg: "Pessoa não encontrada!" });
    }
  }
  
}
export {PessoaController};
