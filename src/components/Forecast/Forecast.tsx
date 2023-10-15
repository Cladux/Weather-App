import Sunrise from "../Icons/Sunrise";
import Sunset from "../Icons/Sunset";
import {
  getHumidityValue,
  getPop,
  getSunTime,
  getVisibilityValue,
  getWindDirection,
} from "../../helpers";
import { forecastPropsType } from "../../types";
import Degree from "./Degree";
import Tile from "./Tile";

const Forecast = ({ data }: forecastPropsType): JSX.Element => {
  const today = data.list[0];
  return (
    <section
      className=" basis-full sm:basis-11/12 overflow-y-scroll rounded bg-slate-800 flex 
  justify-center items-center flex-col text-center max-w-screen-sm px-7 text-slate-200"
    >
      <section className="forecast-section w-6/12 h-min">
        <h2 className="text-2xl font-black">
          {data.name}
          <span className="font-thin"> {data.country}</span>
        </h2>
        <h1 className="text-4xl font-extrabold">
          <Degree temp={Math.round(today.main.temp)} />
        </h1>
        <p className="text-sm">
          {today.weather[0].main}
          {today.weather[0].description}
        </p>
        <p className="text-sm">
          H: <Degree temp={Math.ceil(today.main.temp_max)} /> L:{" "}
          <Degree temp={Math.floor(today.main.temp_min)} />
        </p>
        <ul className="flex overflow-x-scroll mt-4 pb-2 mb-5">
          {data.list.map((item, i: number) => (
            <li
              key={i}
              className="flex-shrink-0 inline-block text-center w-[50px]"
            >
              <p className="text-sm">
                {i === 0 ? "now" : new Date(item.dt * 1000).getHours()}
              </p>
              <img
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt={`weather-icn-${item.weather[0].description}`}
              />
              <p className="text-sm font-bold">
                <Degree temp={Math.round(item.main.temp)} />
              </p>
            </li>
          ))}
        </ul>

        <section className="flex flex-wrap justify-between text-slate-200 m-y-10">
          <div className="basis-[49%] text-xs font-bold flex flex-col items-center bg-white/20 backdrop-blur-lg rounded drop-shadow-lg py-4 mb-5">
            <Sunrise /> <span className="mt-2">{getSunTime(data.sunrise)}</span>
          </div>
          <div className="basis-[49%] text-xs font-bold flex flex-col items-center bg-white/20 backdrop-blur-lg rounded drop-shadow-lg py-4 mb-5">
            <Sunset /> <span className="mt-2">{getSunTime(data.sunset)}</span>
          </div>
          <Tile
            icon="wind"
            title="Wind"
            info={`${today.wind.speed}`}
            description={`${getWindDirection(
              Math.round(today.wind.deg)
            )}, gusts ${today.wind.gust.toFixed(1)} km/h`}
          />
          <Tile
            icon="feels"
            title="Feels like"
            info={<Degree temp={Math.round(today.main.feels_like)} />}
            description={`Feels ${
              Math.round(today.main.feels_like) < Math.round(today.main.temp)
                ? "colder"
                : "warmer"
            }`}
          />
          <Tile
            icon="humidity"
            title="Humidity"
            info={`${today.main.humidity} %`}
            description={getHumidityValue(today.main.humidity)}
          />
          <Tile
            icon="pop"
            title="Precipitation"
            info={`${Math.round(today.pop * 100)}%`}
            description={`${getPop(today.pop)}, clouds at ${today.clouds.all}%`}
          />
          <Tile
            icon="pressure"
            title="Pressure"
            info={`${today.main.pressure} hPa`}
            description={` ${
              Math.round(today.main.pressure) < 1013 ? "Lower" : "Higher"
            } than standard`}
          />
          <Tile
            icon="visibility"
            title="Visibility"
            info={`${(today.visibility / 1000).toFixed()} km`}
            description={getVisibilityValue(today.visibility)}
          />
        </section>
      </section>
    </section>
  );
};

export default Forecast;
