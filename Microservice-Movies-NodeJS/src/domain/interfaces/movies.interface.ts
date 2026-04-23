/**
 * Interfaz que representa una película.
 *
 * Contiene la información básica necesaria para mostrar una película
 * en la tabla o en cualquier componente de listado.
 *
 * @remarks
 * Cada película debe tener un `id` único, un `title` descriptivo,
 * un `director` válido y un `releaseYear` en el año de estreno.
 *
 * @example
 * ```ts
 * const pelicula: Movie = {
 *   id: 1,
 *   title: 'El Padrino',
 *   director: 'Francis Ford Coppola',
 *   releaseYear: 1972
 *  genre: 'Drama'
 * };
 * ```
 */

export interface Movie {
  /// Identificador único de la película
  id: number;
  /// Título o nombre de la película
  title: string;
  /// Director de la película
  director: string;
  /// Año de estreno de la película
  releaseYear: number;
  /// Género de la película
  genre: MovieGenre;
  // Sinopsis breve de la película
}

/**
 * Tipo de categoría de película.
 *
 * @remarks
 * Este tipo restringe las categorías a los valores predefinidos:
 * - 'Accion'
 * - 'Comedia'
 * - 'Drama'
 * - 'Ciencia Ficción'
 * - 'Terror'
 *
 * Se utiliza principalmente para mapear badges de colores en la UI.
 *
 * @example
 * ```ts
 * const categoria: MovieGenre = 'Comedia';
 * ```
 */
export type MovieGenre = 'Acción' | 'Comedia' | 'Drama' | 'Ciencia Ficción' | 'Terror';
