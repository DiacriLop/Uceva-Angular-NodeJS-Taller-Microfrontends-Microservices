import { Movie } from "../interfaces/movies.interface";
/**
 * Mock de películas para pruebas y desarrollo.
 *
 * @remarks
 * Este archivo contiene un arreglo de objetos `Movie` que simulan
 * datos reales de películas. Se utiliza principalmente para pruebas
 * unitarias y de integración, así como para el desarrollo de componentes
 * sin necesidad de depender de una API real.
 *
 * Cada objeto `Movie` incluye las siguientes propiedades:
 * - `id`: Identificador único de la película.
 * - `title`: Título de la película.
 * - `director`: Nombre del director de la película.
 * - `releaseYear`: Año de lanzamiento de la película.
 * - `genre`: Género al que pertenece la película.
 *
 * @see {@link Movie}
 */
export const MOVIES_MOCK: Movie[] = [
    {
        id: 1,
        title: 'El Padrino',
        director: 'Francis Ford Coppola',
        releaseYear: 1972,
        genre: 'Drama'
    },
    {
        id: 2,
        title: 'La Lista de Schindler',
        director: 'Steven Spielberg',
        releaseYear: 1993,
        genre: 'Drama'
    }
];

