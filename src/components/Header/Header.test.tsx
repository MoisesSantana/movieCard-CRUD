import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import movies from "../../services/movieData";
import Header from "./Header";

describe("Tests facing the Header component", () => {
  it("should render the title of app", () => {
    render(
      <Header setFilteredMovies={jest.fn(() => movies)} moviesList={movies} />
    );
    const title = screen.getByRole("heading", {
      level: 1,
      name: "MovieCard C.R.U.D.",
    });
    expect(title).toBeInTheDocument();
  });

  it('should render a text box, with a text "Search" as a label. This text box should also have a placeholder with the text "my favorite movie"', () => {
    render(
      <Header setFilteredMovies={jest.fn(() => movies)} moviesList={movies} />
    );
    const textboxToSearchMovies = screen.getByRole("textbox", {
      name: "Search",
    });
    expect(textboxToSearchMovies).toBeInTheDocument();
    expect(textboxToSearchMovies).toHaveAttribute(
      "placeholder",
      "my favorite movie"
    );
  });

  it("should can type in textbox", async () => {
    userEvent.setup();
    render(
      <Header setFilteredMovies={jest.fn(() => movies)} moviesList={movies} />
    );
    const textboxToSearchMovies = screen.getByRole("textbox", {
      name: "Search",
    });
    expect(textboxToSearchMovies).toHaveValue("");
    await userEvent.type(textboxToSearchMovies, "xablau");
    expect(textboxToSearchMovies).toHaveValue("xablau");
  });
});
