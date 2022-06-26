import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import { MovieForm } from "../components";
import * as movieAPI from "../services/movieAPI";

function NewMovie() {
  const navigate = useNavigate();

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

  const movieTemplate = {
    title: "",
    subtitle: "",
    storyline: "",
    rating: 0,
    imagePath: "",
    genre: "",
    bookmarked: true,
    id: 0,
  };

  const handleSubmit = async (e: FormEvent, newMovie: TMOVIEOBJECT) => {
    e.preventDefault();
    await movieAPI.createMovie(newMovie);
    navigate("/");
  };

  return (
    <div data-testid="new-movie">
      <MovieForm onSubmit={handleSubmit} movie={movieTemplate} />
    </div>
  );
}

export default NewMovie;
