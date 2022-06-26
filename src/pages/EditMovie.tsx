import { useState, useEffect, useCallback, FormEvent } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Loading, MovieForm } from "../components";
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

function EditMovie() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [movie, setMovie] = useState<TMOVIEOBJECT>({} as TMOVIEOBJECT);

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

  const handleSubmit = async (e: FormEvent, updatedMovie: TMOVIEOBJECT) => {
    e.preventDefault();

    await movieAPI.updateMovie(updatedMovie);

    navigate("/");
  };

  return (
    <section>
      {isLoading && <Loading />}

      {isLoading || <MovieForm movie={movie} onSubmit={handleSubmit} />}
    </section>
  );
}

export default EditMovie;
