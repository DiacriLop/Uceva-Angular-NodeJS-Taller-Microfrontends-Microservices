import { Routes } from '@angular/router';
import { MoviesPage } from './pages/movies/movies.page';

/**
 * Definición de las rutas principales de la aplicación.
 *
 * @remarks
 * Este archivo contiene la configuración de enrutamiento
 * utilizada por Angular Router para mapear las URLs
 * a los componentes correspondientes.
 *
 * Incluye:
 * - Rutas de navegación principales
 * - Redirección por defecto para rutas no existentes
 *
 * @see {@link MoviesPage}
 */
export const routes: Routes = [
  /**
   * Ruta de películas.
   *
   * @remarks
   * Renderiza el componente `MoviesPage`, encargado
   * de mostrar y gestionar el listado de películas.
   */
  { path: '', loadComponent: () => import('./pages/movies/movies.page').then((m) => m.MoviesPage)},
];
