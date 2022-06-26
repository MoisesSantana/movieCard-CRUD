import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { MovieCard, Loading, Header } from "../components";
import * as movieAPI from "../services/movieAPI";

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

function MovieList() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [moviesList, setMoviesList] = useState<TMOVIEOBJECT[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<TMOVIEOBJECT[]>([]);

  async function getMovies() {
    const data = await movieAPI.getMovies();
    setMoviesList(data as Array<TMOVIEOBJECT>);
    setFilteredMovies(data as Array<TMOVIEOBJECT>);
    setIsLoading(false);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <main className="bg-gradient-to-b from-slate-900 to-slate-800 w-full h-full">
      <Header moviesList={moviesList} setFilteredMovies={setFilteredMovies} />

      {isLoading && <Loading />}

      {isLoading || (
        <>
          <section className="pt-5 w-[90%] mx-auto flex flex-wrap gap-5 justify-around">
            {filteredMovies.map((movie) => (
              <MovieCard key={movie.title} movie={movie} />
            ))}
          </section>

          <Link
            className="flex justify-center items-center bg-gradient-to-b from-green-400 to-green-500 py-3 mt-10 rounded-sm text-slate-50 font-semibold"
            to="/movies/new"
          >
            Add new movie
          </Link>
        </>
      )}
    </main>
  );
}

export default MovieList;
