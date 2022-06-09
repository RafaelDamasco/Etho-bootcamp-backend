import Movie from "../interfaces/Movie";

//transicionar dados dentro da aplicação (DTO)
interface MovieFromApiDTO {
  id: number;
  title: string;
}

function loadMovies(moviesFromApi: MovieFromApiDTO[]): Partial<Movie>[] {
  
  return moviesFromApi.map((movie) => ({
    id: movie.id,
    name: movie.title
  }))
}

export default loadMovies