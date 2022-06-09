import Movie from "../interfaces/Movie";

//transicionar dados dentro da aplicação (DTO)
interface MovieFromApiDTO {
  id: number;
  title: string;
  directed_by: string,
  duration: number,
}

function loadMovies(moviesFromApi: MovieFromApiDTO[]): Partial<Movie>[] {
  
  return moviesFromApi.map((movie) => ({
    id: movie.id,
    name: movie.title,
    directedBy: movie.directed_by,
    duration: movie.duration,
  }))
}

export default loadMovies