import { useState, useEffect, useCallback } from "react";
import { Outlet, useParams, Link, useNavigate } from "react-router-dom";

import { Loading } from "../components";
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

function MovieDetails() {
  const [isLoading, setIsLoading] = useState(true);

  const [movie, setMovie] = useState({} as TMOVIEOBJECT);

  const { id } = useParams();

  const navigate = useNavigate();

  const getMovie = useCallback(async () => {
    const data = await movieAPI.getMovie(id as string);

    setMovie(data as TMOVIEOBJECT);

    setIsLoading(false);
  }, [id]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  async function deleteMovie() {
    await movieAPI.deleteMovie(id as string);

    navigate("/");
  }

  return (
    <section>
      {isLoading && <Loading />}

      {isLoading || (
        <section className="flex h-full min-h-screen max-h-full flex-col items-center justify-center gap-8">
          <div>
            <h2 className="text-slate-50 font-bold font-sans mr-4 mb-5 indent-1 text-xl underline decoration-cyan-600">
              {movie.title}
            </h2>
          </div>

          <div>
            <img src={`../${movie.imagePath}`} alt={movie.title} />
          </div>

          <div className="p-5 border-2 rounded-sm max-h-36 border-cyan-500 overflow-y-auto scrollbar-thin bg-slate-900 text-slate-50 w-10/12">
            <h2 className="font-bold font-sans mr-4 mb-5 indent-1 text-base underline decoration-cyan-600">
              {movie.subtitle}
            </h2>

            <p>{movie.storyline}</p>
          </div>

          <div className=" flex flex-col gap-5 w-44 text-slate-50">
            <div className="flex w-full justify-between">
              <span className="w-6/12">Genre:</span>

              <span className="bg-cyan-500 rounded-full w-6/12 text-center px-5">
                {movie.genre}
              </span>
            </div>

            <div className="flex w-full justify-between">
              <span className="w-6/12">Rating:</span>

              <span className="w-6/12 text-center bg-cyan-500 rounded-full px-5">
                {movie.rating}
              </span>
            </div>
          </div>

          <div className="flex w-full justify-center gap-5">
            <Link
              to="/"
              className="bg-gradient-to-b from-cyan-400 to-cyan-500 px-5 py-1 rounded-sm text-slate-50 font-semibold"
            >
              Back
            </Link>

            <Link
              to={`/movies/${id}/edit`}
              className="bg-gradient-to-b from-cyan-400 to-cyan-500 px-5 py-1 rounded-sm text-slate-50 font-semibold"
            >
              Edit
            </Link>

            <button
              type="button"
              onClick={() => deleteMovie()}
              className="bg-gradient-to-b from-red-400 to-red-500 px-5 py-1 rounded-sm text-slate-50 font-semibold"
            >
              Delete
            </button>
          </div>

          <Outlet />
        </section>
      )}
    </section>
  );
}

export default MovieDetails;
