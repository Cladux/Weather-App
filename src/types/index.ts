import { ChangeEvent } from "react";
export type optionType = {
  name: string;
  country: string;
  lat: number;
  lon: number;
};
export type Props = {
  term: string;
  options: [];
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onOptionSelect: (option: optionType) => void;
  onSubmit: () => void;
};
export type forecastPropsType = {
  data: forecastType;
};
export type tilePropsType = {
  icon:
    | "Wind"
    | "aTest"
    | "Feels"
    | "Humidity"
    | "Visibility"
    | "Pressure"
    | "Pop";
  title: string;
  info: string | JSX.Element;
  description: string;
};
export type forecastType = {
  name: string;
  country: string;
  list: [
    {
      dt: number;
      main: {
        feels_like: number;
        humidity: number;
        pressure: number;
        temp: number;
        temp_max: number;
        temp_min: number;
      };
      weather: [
        {
          main: string;
          icon: string;
          description: string;
        }
      ];
      wind: {
        speed: number;
        gust: number;
        deg: number;
      };
      clouds: {
        all: number;
      };
      pop: number;
      visibility: number;
    }
  ];
  sunrise: number;
  sunset: number;
};
