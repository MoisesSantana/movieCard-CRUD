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

type TINPUTPROPS = {
  inputName: string;
  inputValue: string;
  hasPlaceholder: boolean;
  inputChange: (value: TARGET) => void;
  movie: TMOVIEOBJECT;
  hasMovie: boolean;
};

function Input({
  inputName,
  inputValue,
  hasPlaceholder,
  inputChange,
  movie,
  hasMovie,
}: TINPUTPROPS) {
  return (
    <label
      className="flex flex-col font-sans text-cyan-500 text-xs w-[80%]"
      htmlFor={inputName}
    >
      {inputName}
      <input
        className="rounded-sm border-b-2 border-b-cyan-500 bg-slate-900 placeholder:text-cyan-800"
        type={inputName === "rating" ? "number" : "text"}
        id={inputName}
        value={inputValue}
        placeholder={hasPlaceholder ? "my favorite movie" : ""}
        onChange={
          hasMovie
            ? ({ target }) =>
                inputChange({ ...movie, [inputName]: target.value })
            : ({ target }) => inputChange(target.value)
        }
      />
    </label>
  );
}

export default Input;
