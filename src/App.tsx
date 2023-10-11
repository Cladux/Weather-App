import Forecast from "./components/Forecast";
import SearchSection from "./components/SearchSection";
import useForecast from "./hooks/useForecast";

function App() {
  const { term, options, forecast, onInputChange, onOptionSelect, onSubmit } =
    useForecast();
  return (
    <>
      <main className="w-full h-screen bg-slate-900 flex justify-center items-center text-slate-100">
        {forecast ? (
          <Forecast data={forecast} />
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
}

export default App;
