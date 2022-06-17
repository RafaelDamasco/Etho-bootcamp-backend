import Movie from "../interfaces/Movie";

//transicionar dados dentro da aplicação (DTO)
interface MovieFromApiDTO {
  id: number;
  title: string;
  directed_by: string,
  duration: number,
}

function loadMovies(data: MovieFromApiDTO[]): Movie[] {
  return data.map((movie: MovieFromApiDTO) => ({
    id: movie.id,
    name: movie.title,
    directedBy: movie.directed_by,
    duration: movie.duration,
    ratings: []
  }))
}

export default loadMovies