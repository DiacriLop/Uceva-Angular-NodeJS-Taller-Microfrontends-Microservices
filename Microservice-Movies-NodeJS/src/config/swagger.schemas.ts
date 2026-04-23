/**
 * @openapi
 * components:
 *   schemas:
 *     Movie:
 *       type: object
 *       description: Representa una película generada por el microservicio Movies.
 *       required:
 *         - id
 *         - title
 *         - director
 *         - releaseYear
 *         - genre
 *       properties:
 *         id:
 *           type: integer
 *           minimum: 1
 *           description: Identificador único de la película.
 *           example: 1
 *         title:
 *           type: string
 *           description: Título de la película.
 *           example: El Padrino
 *         director:
 *           type: string
 *           description: Nombre del director de la película.
 *           example: Francis Ford Coppola
 *         releaseYear:
 *           type: integer
 *           description: Año de estreno de la película.
 *           example: 1972
 *         genre:
 *           type: string
 *           description: Género cinematográfico de la película.
 *           enum:
 *             - Acción
 *             - Comedia
 *             - Drama
 *             - Ciencia Ficción
 *             - Terror
 *           example: Drama
 *
 *     MoviesList:
 *       type: array
 *       description: Colección de películas retornada por la API.
 *       items:
 *         $ref: '#/components/schemas/Movie'
 *
 *     ErrorResponse:
 *       type: object
 *       description: Estructura estándar para respuestas de error.
 *       properties:
 *         message:
 *           type: string
 *           example: Parámetro countMovies inválido.
 */
export {};