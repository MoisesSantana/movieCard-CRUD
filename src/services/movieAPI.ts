import data from "./movieData";

type TMOVIEOBJECT = {
  bookmarked: boolean;
  genre: string;
  id: number;
  imagePath: string;
  rating: number;
  storyline: string;
  subtitle: string;
  title: string;
};

localStorage.setItem("movies", JSON.stringify(data));

const readMovies = () => JSON.parse(localStorage.getItem("movies"));

const saveMovies = (movies: Array<TMOVIEOBJECT>) =>
  localStorage.setItem("movies", JSON.stringify(movies));

export const getMovies = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      const movies = readMovies();
      resolve(movies);
    }, 2000);
  });

export const getMovie = (movieId: string) => {
  const movie = readMovies().find(
    (mov: TMOVIEOBJECT) => mov.id === Number(movieId)
  );

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(movie);
    }, 2000);
  });
};

export const updateMovie = (updatedMovie: TMOVIEOBJECT) => {
  const movies = readMovies().map((movie: TMOVIEOBJECT) => {
    if (movie.id === Number(updatedMovie.id)) {
      return { ...movie, ...updatedMovie };
    }
    return movie;
  });
  saveMovies(movies);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("OK");
    }, 1000);
  });
};

export const createMovie = (movieData: TMOVIEOBJECT) => {
  let movies = readMovies();
  const nextId = movies[movies.length - 1].id + 1;
  const newMovie = { ...movieData, id: nextId };
  movies = [...movies, newMovie];
  saveMovies(movies);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("OK");
    }, 1000);
  });
};

export const deleteMovie = (movieId: string) => {
  let movies = readMovies();
  movies = movies.filter((movie: TMOVIEOBJECT) => movie.id !== Number(movieId));
  saveMovies(movies);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ status: "OK" });
    }, 1000);
  });
};
