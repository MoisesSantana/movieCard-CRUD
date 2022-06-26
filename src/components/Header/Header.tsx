import React, { useState, Dispatch, SetStateAction } from "react";

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

type THEADERPROPS = {
  setFilteredMovies: Dispatch<SetStateAction<Array<TMOVIEOBJECT>>>;
  moviesList: Array<TMOVIEOBJECT>;
};

function Header({ setFilteredMovies, moviesList }: THEADERPROPS) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (value: string) => {
    setInputValue(value);
    const filteredMovies = moviesList.filter(({ title }) =>
      title.toUpperCase().includes(value.toUpperCase())
    );
    setFilteredMovies(filteredMovies);
  };

  return (
    <header className="w-full h-[80px] bg-slate-900 drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center w-[50%]">
          <h1 className="text-center font-cursive text-slate-50 text-3xl font-bold sm:text-2xl">
            MovieCard C.R.U.D.
          </h1>
        </div>
        <div className="flex items-center justify-center w-[50%]">
          <Input
            inputName="Search"
            inputValue={inputValue}
            inputChange={handleInputChange as (value: TARGET) => void}
            hasPlaceholder
            movie={{} as TMOVIEOBJECT}
            hasMovie={false}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
