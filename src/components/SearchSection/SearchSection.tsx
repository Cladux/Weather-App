import { optionType, Props } from "../../types";
import { useState } from "react";

const SearchSection = ({
  term,
  options,
  onInputChange,
  onOptionSelect,
  onSubmit,
}: Props): JSX.Element => {
  const [activeOption, setActiveOption] = useState(0);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 13) {
      // Enter key
      event.preventDefault(); // Prevent the default action
      if (options[activeOption]) {
        onOptionSelect(options[activeOption]);
        onSubmit();
      } else {
        onSubmit();
      }
    } else if (event.keyCode === 38) {
      // Up arrow
      if (activeOption === 0) return;
      setActiveOption(activeOption - 1);
    } else if (event.keyCode === 40) {
      // Down arrow
      if (activeOption === options.length - 1) return;
      setActiveOption(activeOption + 1);
    }
  };

  return (
    <section
      className="basis-full sm:basis-11/12 h-full rounded bg-slate-800 flex 
    justify-center items-center flex-col text-center max-w-screen-sm px-7"
    >
      <h1 className="text-2xl font-light mb-2">
        <span className="font-black">Cladux</span> Weather
      </h1>
      <p>
        Enter below a place you want to know the weather of and select an option
        from the dropdown
      </p>
      <div className="relative flex mt-10 sm:mt-6">
        <input
          placeholder="Search City"
          type="text"
          value={term}
          onChange={onInputChange}
          onKeyDown={handleKeyDown}
          className="px-2 py-1 rounded-l-md bg-slate-200 outline-none text-slate-900"
        />
        <ul className="absolute top-9 bg-slate-200 ml-1 text-slate-800 rounded-b-md">
          {options.map((opt: optionType, index: number) => (
            <li key={index}>
              <button
                className={`text-left text-sm w-full px-2 py-1 ${
                  index === activeOption ? "bg-slate-900 text-slate-200" : ""
                }`}
                onClick={() => onOptionSelect(opt)}
              >
                {opt.name}, {opt.country}
              </button>
            </li>
          ))}
        </ul>
        <button
          className="rounded-r-md border-2 border-slate-200 px-2 py-1 hover:bg-slate-600 transition"
          onClick={onSubmit}
        >
          Search
        </button>
      </div>
    </section>
  );
};

export default SearchSection;
