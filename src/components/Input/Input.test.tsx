import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import movies from "../../services/movieData";
import Input from "./Input";

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

const PROPS_IN_HEADER_COMPONENT = {
  inputName: "Search",
  inputValue: "",
  hasPlaceholder: true,
  inputChange: jest.fn(),
  movie: {},
  hasMovie: false,
};

type TARGET = TMOVIEOBJECT | string;

const PROPS_IN_MOVIEFORM_COMPONENT = {
  inputName: "rating",
  inputValue: "4.5",
  hasPlaceholder: false,
  inputChange: jest.fn().mockImplementation((value: TARGET) => value),
  movie: movies[0],
  hasMovie: true,
};

describe("Tests aimed at the Input component, having `props` coming from the `Header` component", () => {
  beforeEach(() => {
    render(
      <Input
        inputName={PROPS_IN_HEADER_COMPONENT.inputName}
        inputValue={PROPS_IN_HEADER_COMPONENT.inputValue}
        hasPlaceholder={PROPS_IN_HEADER_COMPONENT.hasPlaceholder}
        inputChange={PROPS_IN_HEADER_COMPONENT.inputChange}
        movie={PROPS_IN_HEADER_COMPONENT.movie as TMOVIEOBJECT}
        hasMovie={PROPS_IN_HEADER_COMPONENT.hasMovie}
      />
    );
  });

  it('should render a text box, with a text "Search" as a label.', () => {
    const textboxToSearchMovies = screen.getByRole("textbox", {
      name: "Search",
    });
    expect(textboxToSearchMovies).toBeInTheDocument();
  });

  it('should has a placeholder with the text "my favorite movie"', () => {
    const textboxToSearchMovies = screen.getByRole("textbox", {
      name: "Search",
    });
    expect(textboxToSearchMovies).toHaveAttribute(
      "placeholder",
      "my favorite movie"
    );
  });

  it("should call inputChange when typing in text box", async () => {
    userEvent.setup();
    const textboxToSearchMovies = screen.getByRole("textbox", {
      name: "Search",
    });
    expect(textboxToSearchMovies).toHaveValue("");
    await userEvent.type(textboxToSearchMovies, "x");
    expect(PROPS_IN_HEADER_COMPONENT.inputChange).toHaveBeenCalled();
    expect(PROPS_IN_HEADER_COMPONENT.inputChange).toHaveBeenCalledTimes(1);
    await userEvent.type(textboxToSearchMovies, "a");
    expect(PROPS_IN_HEADER_COMPONENT.inputChange).toHaveBeenCalledTimes(2);
  });
});

describe("Tests aimed at the Input component, having `props` coming from the `MovieForm` component", () => {
  beforeEach(() => {
    render(
      <Input
        inputName={PROPS_IN_MOVIEFORM_COMPONENT.inputName}
        inputValue={PROPS_IN_MOVIEFORM_COMPONENT.inputValue}
        hasPlaceholder={PROPS_IN_MOVIEFORM_COMPONENT.hasPlaceholder}
        inputChange={PROPS_IN_MOVIEFORM_COMPONENT.inputChange}
        movie={PROPS_IN_MOVIEFORM_COMPONENT.movie as TMOVIEOBJECT}
        hasMovie={PROPS_IN_MOVIEFORM_COMPONENT.hasMovie}
      />
    );
  });

  it("should render a number box, with a text given by props as a label.", () => {
    const numberBox = screen.getByRole("spinbutton", {
      name: PROPS_IN_MOVIEFORM_COMPONENT.inputName,
    });
    expect(numberBox).toBeInTheDocument();
  });

  it("should hasn't a text in placeholder", () => {
    const numberBox = screen.getByRole("spinbutton", {
      name: PROPS_IN_MOVIEFORM_COMPONENT.inputName,
    });
    expect(numberBox).toHaveAttribute("placeholder", "");
  });

  it("should initialize with a default prop value", () => {
    const numberBox = screen.getByRole("spinbutton", {
      name: PROPS_IN_MOVIEFORM_COMPONENT.inputName,
    });
    expect(numberBox).toHaveValue(
      Number(PROPS_IN_MOVIEFORM_COMPONENT.inputValue)
    );
  });
});
