import { Router } from "express";
import {  TheatersController } from "./theaters.controller";

export class TheatersRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new TheatersController();

    /**
     * @openapi
     * /api/theaters/{countTheaters}:
     *   get:
     *     summary: Obtener listado de teatros
     *     description: Retorna una lista de teatros generados dinámicamente según la cantidad solicitada.
     *     tags:
     *       - Theaters
     *     parameters:
     *       - in: path
     *         name: countTheaters
     *         required: true
     *         schema:
     *           type: integer
     *           minimum: 1
     *           example: 10
     *         description: Cantidad de teatros a generar
     *     responses:
     *       200:
     *         description: Lista de teatros generados
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Theater'
     *       400:
     *         description: Parámetro inválido
     */
    router.get("/:countTheaters", controller.getAllTheaters);

    return router;
  }
}