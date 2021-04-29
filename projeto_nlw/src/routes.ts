import { Router } from "express";
import { SettingsController } from "./controller/SettingsController";

const routes = Router();

/**
 * Tipos de parametros
 * Route Params -> /home
 * Query Params -> Filtros e busca 1?a=x
 * Body Params -> {
 * 
 * }
 */

const settingsController = new SettingsController();

routes.post("/settings", settingsController.create);

export { routes };