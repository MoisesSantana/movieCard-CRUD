import { Link } from "react-router-dom";

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

type TMOVIECARDPROPS = {
  movie: TMOVIEOBJECT;
};

function MovieCard({ movie }: TMOVIECARDPROPS) {
  return (
    <section className="flex flex-col justify-between gap-5 bg-slate-400/10 p-2 rounded-sm max-w-sm">
      <div>
        <img src={movie.imagePath} alt={movie.title} />
      </div>

      <div className="p-5 border-2 rounded-sm max-h-36 border-cyan-500 overflow-y-auto scrollbar-thin bg-slate-900 text-slate-50">
        <h2 className="font-bold font-sans mr-4 mb-5 indent-1 text-xl underline decoration-cyan-600">
          {movie.title}
        </h2>

        <p>{movie.storyline}</p>
      </div>

      <div>
        <Link
          className="font-sans bg-gradient-to-b from-cyan-400 to-cyan-500 px-5 py-1 rounded-sm text-slate-50 font-semibold"
          to={`/movies/${movie.id}`}
        >
          Details
        </Link>
      </div>
    </section>
  );
}

export default MovieCard;
