/**
 * @openapi
 * components:
 *   schemas:
 *     Theater:
 *       type: object
 *       description: Representa un teatro del sistema
 *       required:
 *         - id
 *         - name
 *         - location
 *         - capacity
 *         - direction
 * 
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Cine Centro
 *         city:
 *           type: City
 *           example: Cali
 *         capacity:
 *           type: number
 *           example: 100
 *         direction:
 *           type: string
 *           example: Calle 123
 */
export {};