/**
 * Interfaz que representa una sala de cine.
 *
 * Contiene la información básica necesaria para mostrar una sala
 * en listados o componentes del sistema.
 *
 * @remarks
 * Cada sala debe tener un `id` único, un `name` identificable,
 * una `city` válida, una `capacity` que indica la cantidad máxima
 * de personas y una `direction` que representa su ubicación física.
 *
 * @example
 * ```ts
 * const theater: Theater = {
 *   id: 1,
 *   name: 'Cine Centro',
 *   city: 'Cali',
 *   capacity: 120,
 *   direction: 'Calle 5 # 10-20'
 * };
 * ```
 */
export interface Theater {
  /** Identificador único de la sala */
  id: number;

  /** Nombre de la sala de cine */
  name: string;

  /** Ciudad donde se encuentra la sala */
  city: City;

  /** Capacidad máxima de personas */
  capacity: number;

  /** Dirección física de la sala */
  direction: string;
}

/**
 * Tipo de ciudades disponibles para las salas.
 *
 * @remarks
 * Este tipo restringe las ciudades a valores predefinidos,
 * lo cual facilita validaciones y control en la UI.
 *
 * Las ciudades soportadas actualmente son:
 * - Cali
 * - Tulua
 * - Palmira
 * - Buga
 *
 * @example
 * ```ts
 * const city: City = 'Cali';
 * ```
 */
export type City = 'Cali' | 'Tulua' | 'Palmira' | 'Buga';