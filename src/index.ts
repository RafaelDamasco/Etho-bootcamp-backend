import axios from 'axios';

import IndicativeRating from './enums/IndicativeRating';

import Movie from './interfaces/Movie';
import User from './interfaces/User';
import addFilms from './utils/addFilms';

import filterMoviesByIndicativeRating from './utils/filterMoviesByIndicativeRating';
import loadMovies from './utils/loadMovies';
import orderByAverageRate from './utils/orderByAverageRate';

const movies: Movie[] = [
  {
    id: 1,
    name: 'Spider Man',
    ratings: [1, 5, 3],
    indicativeRating: IndicativeRating.AL,
  },
  {
    id: 2,
    name: 'Doctor Strange',
    ratings: [5, 5, 3],
    indicativeRating: IndicativeRating.A18,
  },
  {
    id: 3,
    name: 'Avengers',
    ratings: [],
    indicativeRating: IndicativeRating.A12,
  },
];

const user: User = {
  name: 'Bruno Benicio',
  age: 17,
  myList: [],
};

const orderedMovies = orderByAverageRate(movies);

const filteredMoviesByIndicativeRating = filterMoviesByIndicativeRating(
  orderedMovies,
  user
);

const newUserWithNewList = addFilms(user, movies, 1, 1, 1);

const request = axios
  .get('https://mcuapi.herokuapp.com/api/v1/movies?page=1&limit=100')

  .then((resultado) => {
    const { data } = resultado.data;
    console.log(loadMovies(data));
  });
