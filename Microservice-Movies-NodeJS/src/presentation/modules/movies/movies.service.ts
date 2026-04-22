import { Movie } from "../../../domain/interfaces/movies.interface";
import { faker } from '@faker-js/faker';

/**
 * Servicio encargado de la generación y gestión de películas.
 *
 * @remarks
 * Este servicio utiliza la librería `faker` para generar películas
 * ficticias, principalmente con fines de prueba o demostración.
 */
export class MoviesService {

  /**
   * Lista de géneros disponibles para las películas.
   *
   * @remarks
   * Se utiliza para asignar aleatoriamente un género
   * a cada película generada.
   */
  private MovieGenres: string[] = [
    'Acción',
    'Comedia',
    'Drama',
    'Ciencia Ficción',
    'Terror',
  ];

  /**
   * Obtiene un listado de películas generadas dinámicamente.
   *
   * @param countMovies Cantidad de películas a generar
   * @returns Promesa que resuelve un arreglo de películas
   *
   * @example
   * ```ts
   * const movies = await moviesService.getAllMovies(5);
   * ```
   */
  public async getAllMovies(countMovies: number): Promise<Movie[]> {
    const movies: Promise<Movie>[] = [];

    for (let i = 1; i <= countMovies; i++) {
      movies.push(this.generateMovie(i));
    }

    return Promise.all(movies);
  }

  /**
   * Genera una película ficticia.
   *
   * @param id Identificador único de la película
   * @returns Promesa que resuelve una película generada
   */
  private generateMovie(id: number): Promise<Movie> {
    return Promise.resolve({
      id,
      title: faker.lorem.sentence(3),
      director: faker.person.fullName(),
      releaseYear: faker.date.past({ years: 50 }).getFullYear(),
      genre: this.MovieGenres[Math.floor(Math.random() * this.MovieGenres.length)] as Movie['genre'],
    });
  }
}
