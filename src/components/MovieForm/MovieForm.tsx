import { useState, FormEvent, Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";

import Input from "../Input/Input";

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

type TARGET = TMOVIEOBJECT | string;

type TMOVIEFORMPROPS = {
  movie: TMOVIEOBJECT;
  onSubmit: (e: FormEvent, stateMovie: TMOVIEOBJECT) => void;
};

function MovieForm({ movie, onSubmit }: TMOVIEFORMPROPS) {
  const [stateMovie, setStateMovie] = useState({ ...movie });
  const movieEntries = Object.entries(stateMovie);
  const inputsArr = movieEntries.filter(
    ([key]) => key !== "id" && key !== "bookmarked"
  );

  return (
    <form
      className="w-11/12 flex flex-col items-center h-full min-h-screen justify-center gap-5"
      onSubmit={(e) => onSubmit(e, stateMovie)}
    >
      {inputsArr.map(([key, value]) => (
        <Input
          key={key as string}
          inputName={key as string}
          inputValue={value as string}
          inputChange={setStateMovie as Dispatch<SetStateAction<TARGET>>}
          movie={stateMovie as TMOVIEOBJECT}
          hasPlaceholder={false}
          hasMovie
        />
      ))}
      <div className="flex w-screen justify-center gap-5">
        <Link
          className="bg-gradient-to-b from-cyan-400 to-cyan-500 px-5 py-1 rounded-sm text-slate-50 font-semibold"
          to="/"
        >
          Back to Home
        </Link>
        <button
          className="bg-gradient-to-b from-green-400 to-green-500 px-5 py-1 rounded-sm text-slate-50 font-semibold"
          type="submit"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
}

export default MovieForm;
