import { forecastType } from "../../types";
type Props = {
  data: forecastType;
};
const Forecast = ({ data }: Props): JSX.Element => {
  const today = data.list[0];
  return (
    <section
      className=" basis-full sm:basis-11/12 h-full rounded bg-slate-800 flex 
  justify-center items-center flex-col text-center max-w-screen-sm px-7 text-slate-200"
    >
      <h2 className="text-2xl font-black">
        {data.name}
        <span className="font-thin"> {data.country}</span>
      </h2>
      <h1 className="text-4xl font-extrabold">{Math.round(today.main.temp)}</h1>
    </section>
  );
};

export default Forecast;
