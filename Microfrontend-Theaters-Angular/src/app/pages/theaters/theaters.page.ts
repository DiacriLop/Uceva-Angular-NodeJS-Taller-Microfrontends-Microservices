import { Component, inject } from '@angular/core';
import { TheatersTableComponent } from '../../components/theaters-table/theaters-table.component';
import { Theater } from '../../interfaces/theaters.interface';
import { TheatersService } from '../../services/theaters/theaters.service';
import { State } from '../../interfaces/state.interface';
import { AlertComponent } from '../../components/alert/alert.component';

/**
 * Componente contenedor de salas de cine.
 *
 * Se utiliza para gestionar y mostrar un listado de salas de cine
 * utilizando el componente `TheatersTableComponent`.
 *
 * @remarks
 * Este componente se encarga de consumir el servicio `TheatersService`
 * para obtener las salas de cine y pasarlas al componente de tabla.
 * Forma parte de la capa de presentación de la aplicación.
 *
 */
@Component({
  selector: 'app-theaters',
  templateUrl: `./theaters.page.html`,
  imports: [TheatersTableComponent, AlertComponent]
})
export class TheatersPage {
  /**
   * Listado de salas de cine obtenidas desde el servicio.
   * @type {Theater[]}
   */
  theaters: Theater[] = [];
  /**
     * Estado actual del componente.
     *
     * @default 'init'
     */
    state: State = 'init';
  

  /**
   * Servicio para obtener salas de cine.
   * @remarks
   * Se inyecta utilizando la función `inject()` de Angular.
   */
  private theatersService = inject(TheatersService);

  /**
   * Inicializa el componente y carga las salas de cine.
   * @remarks
   * Se suscribe al método `getAllTheaters()` del servicio y
   * asigna los datos recibidos a la propiedad `theaters`.
   */
  ngOnInit(): void {
    this.state = 'loading';
    this.theatersService.getAllTheaters (10).subscribe({
      next: (theaters) => {
        this.theaters = theaters;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error)
        this.state = 'error';
      },
    })
  }
}

