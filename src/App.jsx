import { useState } from "react";
import SearchBox from "./components/SearchBox";
import InfoBox from "./components/InfoBox";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    if (!city.trim()) {
      setError("❗ Please enter a city name");
      return;
    }

    setLoading(true);
    setError("");
    setWeatherData(null);

    const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      const data = await res.json();

      if (data.cod === "404") {
        setError("❌ City not found");
      } else {
        setWeatherData(data);
        setCity(""); 
      }
    } catch (err) {
      setError("🚨 Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SearchBox city={city} setCity={setCity} fetchWeather={fetchWeather} />
      {loading && <p style={{ textAlign: "center" }}>⏳ Loading...</p>}
      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
      {weatherData && <InfoBox data={weatherData} />}
    </>
  );
}

export default App;
