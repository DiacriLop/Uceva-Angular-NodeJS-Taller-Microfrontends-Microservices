
export interface Movie {
  id: number;
  title: string;
  director: string;
  releaseYear: number;
  genre: MovieGenre;
}

export type MovieGenre = 'Acción' | 'Comedia' | 'Drama' | 'Ciencia Ficción' | 'Terror';
