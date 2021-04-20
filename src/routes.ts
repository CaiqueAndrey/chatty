import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";

const routes = Router();

const settingsController = new SettingsController();
/**
 * Tipos de parametros
 * Routes Params => Parametros de rotas
 * Query Params => Filtros e busca (params após a ? da url)
 * Body Params => json do corpo da req {}
 */
routes.post("/settings", settingsController.create)

export { routes };