import Forecast from "./components/Forecast/Forecast";
import SearchSection from "./components/SearchSection/SearchSection";
import useForecast from "./hooks/useForecast";

const App = () => {
  const {
    term,
    options,
    forecast,
    onInputChange,
    onOptionSelect,
    onSubmit,
    backBtn,
  } = useForecast();
  return (
    <>
      <main className="w-full h-[100vh] bg-slate-900 flex justify-center items-center text-slate-100">
        {forecast ? (
          <Forecast data={forecast} backBtn={backBtn} />
        ) : (
          <SearchSection
            term={term}
            options={options}
            onInputChange={onInputChange}
            onOptionSelect={onOptionSelect}
            onSubmit={onSubmit}
          />
        )}
      </main>
    </>
  );
};

export default App;
