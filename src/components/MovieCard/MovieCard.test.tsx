import { screen, render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";

import movies from "../../services/movieData";
import MovieCard from "./MovieCard";

describe("Tests aimed at the MovieCard component.", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <MovieCard key={movies[0].title} movie={movies[0]} />
      </MemoryRouter>
    );
  });

  it("should has information about the movie", () => {
    const movieBanner = screen.getByRole("img", { name: movies[0].title });
    expect(movieBanner).toBeInTheDocument();

    const movieTitle = screen.getByRole("heading", {
      level: 2,
      name: movies[0].title,
    });
    expect(movieTitle).toBeInTheDocument();

    const movieStoryline = screen.getByText(movies[0].storyline, {
      selector: "p",
    });
    expect(movieStoryline).toBeInTheDocument();

    const [detailLink] = screen.getAllByRole("link", { name: /detail/i });
    expect(detailLink).toHaveAttribute("href", `/movies/${movies[0].id}`);
    expect(detailLink).toBeInTheDocument();
  });
});
