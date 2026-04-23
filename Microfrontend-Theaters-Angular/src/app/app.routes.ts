import { Routes } from '@angular/router';
import { TheatersPage } from './pages/theaters/theaters.page';

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
 * @see {@link TheatersPage}
 */
export const routes: Routes = [
/**
   * Ruta de usuarios.
   *
   * @remarks
   * Renderiza el componente `TheatersPage`, encargado
   * de mostrar y gestionar el listado de teatros.
   */
{ path: '', loadComponent: () => import('./pages/theaters/theaters.page').then((m) => m.TheatersPage)},
];
