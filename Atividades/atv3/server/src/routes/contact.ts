import { Router, Request, Response } from "express";
import controller from "../controllers/ContactController";

const routes = Router();

// Listar todos os contatos
routes.get("/contacts", controller.getAll);

// Criar um novo contato
routes.post("/contacts", controller.create);

// Atualizar um contato
routes.put("/contacts", controller.update);

// Remover um contato
routes.delete("/contacts", controller.remove);

// Rota para capturar requisições desconhecidas
routes.use("*", function(_: Request, res: Response) {
  res.status(404).json({ error: "Requisição desconhecida" });
});

export default routes;
