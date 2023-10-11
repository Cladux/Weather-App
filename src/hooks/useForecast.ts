import { ChangeEvent, useEffect, useState } from "react";
import { optionType, forecastType } from "../types";

const useForecast = () => {
  const [term, setTerm] = useState<string>("");
  const [options, setOptions] = useState<[]>([]);
  const [city, setCity] = useState<optionType | null>(null);
  const [forecast, setForecast] = useState<forecastType | null>(null);

  /*get personal APIkey from https://home.openweathermap.org/users/sign_up
    and replace on APIkey variable */
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
  };

  useEffect(() => {
    if (city) {
      setTerm(`${city.name}, ${city.country}`);
      setOptions([]);
    }
  }, [city]);

  const onSubmit = () => {
    if (!city) return;
    getForecast(city);
  };

  const getForecast = (city: optionType) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${APIKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        const forecastData = {
          ...data.city,
          list: data.list.slice(0, 16),
        };

        setForecast(forecastData);
      });
  };

  return {
    term,
    options,
    forecast,
    onInputChange,
    onOptionSelect,
    onSubmit,
  };
};
export default useForecast;
