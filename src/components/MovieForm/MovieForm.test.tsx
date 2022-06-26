import { screen, render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";

import movies from "../../services/movieData";
import MovieForm from "./MovieForm";

describe("Tests facing the MovieForm component", () => {
  it("should has all elements with your values and attributes", () => {
    render(
      <MemoryRouter>
        <MovieForm movie={movies[0]} onSubmit={jest.fn(() => movies)} />
      </MemoryRouter>
    );

    const inputOfTitle = screen.getByRole("textbox", { name: "title" });
    expect(inputOfTitle).toBeInTheDocument();
    expect(inputOfTitle).toHaveValue("Kingsglaive");

    const inputOfSubtitle = screen.getByRole("textbox", { name: "subtitle" });
    expect(inputOfSubtitle).toBeInTheDocument();
    expect(inputOfSubtitle).toHaveValue("Final Fantasy XV");

    const inputOfStoryline = screen.getByRole("textbox", { name: "storyline" });
    expect(inputOfStoryline).toBeInTheDocument();
    expect(inputOfStoryline).toHaveDisplayValue(/king regis, who oversees/i);

    const inputOfRating = screen.getByRole("spinbutton", { name: "rating" });
    expect(inputOfRating).toBeInTheDocument();
    expect(inputOfRating).toHaveValue(4.5);

    const inputOfImagePath = screen.getByRole("textbox", { name: "imagePath" });
    expect(inputOfImagePath).toBeInTheDocument();
    const expectedValue = /Kingsglaive/i;
    expect(inputOfImagePath).toHaveDisplayValue(expectedValue);

    const inputOfGenre = screen.getByRole("textbox", { name: "genre" });
    expect(inputOfGenre).toBeInTheDocument();
    expect(inputOfGenre).toHaveValue("action");

    const linkToHome = screen.getByRole("link", { name: "Back to Home" });
    expect(linkToHome).toBeInTheDocument();
    expect(linkToHome).toHaveAttribute("href", "/");

    const saveChangeBtn = screen.getByRole("button", { name: "Save Changes" });
    expect(saveChangeBtn).toBeInTheDocument();
  });
});
