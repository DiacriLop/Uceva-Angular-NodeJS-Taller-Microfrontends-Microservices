import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { City,Theater } from '../../interfaces/theaters.interface';
/**
 * Componente de tabla de salas de cine.
 *
 * Se utiliza para mostrar un listado de salas de cine en una tabla,
 * mostrando información como nombre, ciudad, capacidad y una dirección
 * física.
 *
 * @remarks
 * Este componente recibe las salas desde un componente padre
 * a través del Input `products` y utiliza el mapeo `categoryMap`
 * para asignar colores a los badges según la categoría.
 *
 * Forma parte de la capa de presentación de la aplicación y se considera
 * un **organismo** dentro del sistema de diseño atómico.
 *
 * @example
 * ```html
 * <app-theaters-table [products]="theatersList"></app-theaters-table>
 * ```
 */
@Component({
  selector: 'app-theaters-table',
  templateUrl: './theaters-table.component.html',
  imports: [CommonModule, BadgeAtom],
})
export class TheatersTableComponent {
  /**
   * Listado de salas de cine que se mostrarán en la tabla.
   * @type {Theater[]}
   * @remarks
   * Este Input permite pasar un array de salas desde un componente padre,
   * generalmente `ListTheatersComponent`. Cada sala debe cumplir la interfaz `Theater`.
   */
  @Input() theaters: Theater[] = [];
  /**
   * Mapeo de categorías de productos a tipos de Badge.
   * @type {Record<City, BadgeType>}
   * @remarks
   * Se utiliza para asignar colores de badges a cada ciudad:
   * - 'Cali' → 'danger' (rojo)
   * - 'Tulua' → 'warning' (amarillo)
   * - 'Palmira' → 'primary' (azul)
   * - 'Buga' → 'success' (verde)
   *
   * Esto permite que en la tabla cada sala tenga un badge visual que indique su ciudad
   * de forma clara para el usuario.
   */
  categoryMap: Record<City, BadgeType> = {
    'Cali' : 'danger',
    'Tulua': 'warning',
    'Palmira': 'primary',
    'Buga': 'success',
  }
}
