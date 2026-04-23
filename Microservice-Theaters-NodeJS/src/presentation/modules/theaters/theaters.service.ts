import { faker,simpleFaker } from '@faker-js/faker';
import { Theater, City  } from '../../../domain/interfaces/theaters.interface';

/**
 * Servicio encargado de la generación y gestión de teatros.
 *
 * @remarks
 * Este servicio utiliza la librería `faker` para generar teatros
 * ficticios, principalmente con fines de prueba o demostración.
 */
export class TheatersService {

  /**
   * Ciudades disponibles para los teatros.
   *
   * @remarks
   * Se utilizan para asignar aleatoriamente una ciudad
   * a cada teatro generado.
   */
  private cities: City[] = [
    'Cali',
    'Tulua',
    'Palmira',
    'Buga',
  ];

  /**
   * Obtiene un listado de productos generados dinámicamente.
   *
   * @param countTheaters Cantidad de teatros a generar
   * @returns Promesa que resuelve un arreglo de productos
   *
   * @example
   * ```ts
   * const products = await productsService.getAllProducts(10);
   * ```
   */
  public async getAllTheaters(countTheaters: number): Promise<Theater[]> {
    const theaters: Promise<Theater>[] = [];

    for (let i = 1; i <= countTheaters; i++) {
      theaters.push(this.generateTheater(i));
    }

    return Promise.all(theaters);
  }

  /**
   * Genera un teatro ficticio.
   *
   * @param id Identificador único del teatro
   * @returns Promesa que resuelve un teatro generado
   */
  private generateTheater(id: number): Promise<Theater> {
    return Promise.resolve({
      id,
      name: faker.company.name(),
      city: faker.helpers.arrayElement(this.cities),
      capacity: simpleFaker.number.int({ min: 50, max: 300 }),
      direction: faker.location.streetAddress(),
    });
  }
}
