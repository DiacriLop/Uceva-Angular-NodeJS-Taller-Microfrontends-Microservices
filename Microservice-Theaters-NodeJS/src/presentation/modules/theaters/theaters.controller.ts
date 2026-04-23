import { Request, Response } from "express";
import { HandleError } from "../../../domain/erros/handle.error";
import { TheatersService } from "./theaters.service";

/**
 * Controlador de teatros.
 *
 * @remarks
 * Esta clase maneja las peticiones HTTP relacionadas con productos,
 * delegando la lógica de negocio al `TheatersService`.
 */
export class TheatersController {

  /**
   * Servicio de teatros.
   */
  private readonly theatersService = new TheatersService();

  /**
   * Maneja la petición HTTP para obtener un listado de teatros.
   *
   * @remarks
   * El número de teatros a generar se obtiene desde los
   * parámetros de la ruta.
   *
   * @param req Objeto de petición de Express
   * @param res Objeto de respuesta de Express
   *
   * @example
   * ```http
   * GET /theaters/10
   * ```
   */
  getAllTheaters = (req: Request, res: Response): void => {
    const { countTheaters } = req.params;

    setTimeout(() => {
      this.theatersService
      .getAllTheaters(Number(countTheaters))
      .then((theaters) => res.status(201).json(theaters))
      .catch((error) => HandleError.error(error, res));
    }, 1000);
  };
}
