import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Theater } from '../../interfaces/theaters.interface';

/**
 * Servicio encargado de la gestión de salas de cine.
 *
 * Proporciona métodos para obtener información de salas de cine
 * desde la API REST.
 *
 * @example
 * ```ts
 * constructor(private theatersService: TheatersService) {}
 *
 * this.theatersService.getAllTheaters(10).subscribe(theaters => {
 *   console.log(theaters);
 * });
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class TheatersService {

  /**
   * Cliente HTTP de Angular para realizar peticiones a la API.
   * Se inyecta usando la función `inject`.
   */
  private httpClient = inject(HttpClient);

  /**
   * Obtiene una lista de salas de cine desde el backend.
   *
   * @param countTheaters Número de salas a obtener.
   * @returns Observable que emite un array de salas.
   *
   * @example
   * ```ts
   * this.theatersService.getAllTheaters(5).subscribe(theaters => {
   *   console.log(theaters);
   * });
   * ```
   */
  getAllTheaters(countTheaters: number): Observable<Theater[]> {
    return this.httpClient.get<Theater[]>(`http://localhost:3003/api/theaters/${countTheaters}`);
  }
}
