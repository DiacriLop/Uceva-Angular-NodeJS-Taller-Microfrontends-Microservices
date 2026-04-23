import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { Movie, MovieGenre } from '../../interfaces/movies.interface';

/**
 * Componente de tabla de películas.
 *
 * Se utiliza para mostrar un listado de películas en una tabla,
 * mostrando información como id, nombre, apellido, email y un badge
 * visual que indica la categoría de cada película.
 *
 * @remarks
 * Este componente recibe las películas desde un componente padre
 * a través del Input `movies` y utiliza el mapeo `genreMap`
 * para asignar colores a los badges según la categoría.
 *
 * Forma parte de la capa de presentación de la aplicación y se considera
 * un **organismo** dentro del sistema de diseño atómico.
 *
 * @example
 * ```html
 * <app-movies-table [movies]="moviesList"></app-movies-table>
 * ```
 */
@Component({
  selector: 'app-movies-table',
  templateUrl: './movies-table.component.html',
  imports: [BadgeAtom],
})
export class MoviesTableComponent {
  /**
   * Listado de películas que se mostrarán en la tabla.
   * @type {Movie[]}
   * @remarks
   * Este Input permite pasar un array de películas desde un componente padre,
   * generalmente `ListMoviesComponent`. Cada película debe cumplir la interfaz `Movie`.
   */
  @Input() movies: Movie[] = [];
  /**
   * Mapeo de categorías a tipos de Badge.
   * @type {Record<Category, BadgeType>}
   * @remarks
   * Se utiliza para asignar colores de badges a cada categoría:
   * - 'Acción' → 'success' (verde)
   * - 'Comedia' → 'primary' (azul)
   * - 'Drama' → 'warning' (amarillo)
   * - 'Ciencia Ficción' → 'danger' (rojo)
   * - 'Terror' → 'secondary' (gris)
   *
   * Esto permite que en la tabla cada película tenga un badge visual que indique su categoría
   * de forma clara para la película.
   */
  genreMap: Record<MovieGenre, BadgeType> = {
    'Acción': 'success',
    'Comedia': 'primary',
    'Drama': 'warning',
    'Ciencia Ficción': 'danger',
    'Terror': 'secondary',
  }
}
