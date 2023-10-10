import { ChangeEvent, useEffect, useState } from "react";
import { optionType } from "../../types";

export default function SearchSection(): JSX.Element {
  const [term, setTerm] = useState<string>("");
  const [options, setOptions] = useState<[]>([]);
  const [city, setCity] = useState<optionType | null>(null);

  const APIKey = import.meta.env.VITE_REACT_API_KEY;

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setTerm(value);
    if (value === "") return setOptions([]);
    getSearchOptions(value);
  };

  const getSearchOptions = (value: string) => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${APIKey}`
    )
      .then((res) => res.json())
      .then((data) => setOptions(data));
  };

  const onOptionSelect = (option: optionType) => {
    setCity(option);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${option.lat}&lon=${option.lon}&units=metric&appid=${APIKey}`
    )
      .then((res) => res.json())
      .then((data) => console.log({ data }));
  };

  useEffect(() => {
    if (city) {
      setTerm(city.name);
      setOptions([]);
    }
  }, [city]);

  return (
    <section
      className=" basis-full sm:basis-11/12 h-full rounded bg-slate-800 flex 
    justify-center items-center flex-col text-center max-w-screen-sm px-7 text-slate-300"
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
          type="text"
          value={term}
          onChange={onInputChange}
          className="px-2 py-1 rounded-l-md bg-slate-200 outline-none text-slate-900"
        />
        <ul className="absolute top-9 bg-slate-200 ml-1 text-slate-800 rounded-b-md">
          {options.map((opt: optionType, index: number) => (
            <li key={index}>
              <button
                className="text-left text-sm w-full hover:bg-slate-900 hover:text-slate-200 px-2 py-1"
                onClick={() => onOptionSelect(opt)}
              >
                {opt.name}, {opt.country}
              </button>
            </li>
          ))}
        </ul>
        <button className="rounded-r-md border-2 border-slate-200 px-2 py-1 hover:bg-slate-600 transition">
          Search
        </button>
      </div>
    </section>
  );
}
