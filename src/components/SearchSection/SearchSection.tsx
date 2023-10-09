import { ChangeEvent, useState } from "react";

export default function SearchSection(): JSX.Element {
  const [term, setTerm] = useState<string>("");

  const APIKey = import.meta.env.VITE_REACT_API_KEY;

  const getSearchOptions = (value: string) => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${APIKey}`
    )
      .then((res) => res.json())
      .then((data) => console.log({ data }));
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setTerm(value);
    if (value === "") return;
    getSearchOptions(value);
  };
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
      <div className="flex mt-10 sm:mt-6">
        <input
          type="text"
          value={term}
          onChange={onInputChange}
          className="px-2 py-1 rounded-l-md bg-slate-200 outline-none text-slate-900"
        />
        <button className="rounded-r-md border-2 border-slate-200 px-2 py-1 cursor-pointer hover:bg-slate-600 transition">
          Search
        </button>
      </div>
    </section>
  );
}
