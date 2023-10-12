import Sunrise from "../../Icons/Sunrise";
import Sunset from "../../Icons/Sunset";
import { getSunTime } from "../../helpers";
import { forecastPropType } from "../../types";
import Degree from "./Degree";

const Forecast = ({ data }: forecastPropType): JSX.Element => {
  const today = data.list[0];
  return (
    <section
      className=" basis-full sm:basis-11/12 h-full rounded bg-slate-800 flex 
  justify-center items-center flex-col text-center max-w-screen-sm px-7 text-slate-200"
    >
      <section className="forecast-section w-6/12">
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

        <section className="flex justify-between text-slate-200 ">
          <div className="w-[140px] text-xs font-bold flex flex-col items-center bg-white/20 backdrop-blur-lg rounded drop-shadow-lg py-4 mb-5">
            <Sunrise /> <span className="mt-2">{getSunTime(data.sunrise)}</span>
          </div>
          <div className="w-[140px] text-xs font-bold flex flex-col items-center bg-white/20 backdrop-blur-lg rounded drop-shadow-lg py-4 mb-5">
            <Sunset /> <span className="mt-2">{getSunTime(data.sunset)}</span>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Forecast;
