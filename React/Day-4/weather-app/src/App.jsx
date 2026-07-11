import { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

const API_KEY = "8c1284d2d8ddb7f35e4e90d0b7ae0dba";

  async function fetchWeather() {
    if (city.trim() === "") {
      setError("Please enter a city name.");
      setWeather(null);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=Lahore&appid=8c1284d2d8ddb7f35e4e90d0b7ae0dba&units=metric"
      );

       const data = await response.json();

       console.log(data);

       if (!response.ok) {
         throw new Error(data.message);
}

        setWeather(data);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      fetchWeather();
    }
  }

  return (
    <div className="container">
      <div className="weather-card">
        <h1>Weather App</h1>

        <input
          type="text"
          placeholder="Enter City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button onClick={fetchWeather}>Search</button>

        {loading && <h2>Loading...</h2>}

        {error && <h2 className="error">{error}</h2>}

        {weather && !loading && (
          <div className="weather-info">
            <h2>{weather.name}</h2>

            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="Weather Icon"
            />

            <h3>{weather.weather[0].main}</h3>

            <p>Temperature: {weather.main.temp} °C</p>

            <p>Feels Like: {weather.main.feels_like} °C</p>

            <p>Humidity: {weather.main.humidity}%</p>

            <p>Wind: {weather.wind.speed} m/s</p>

            <p>Max Temp: {weather.main.temp_max} °C</p>

            <p>Min Temp: {weather.main.temp_min} °C</p>

            <p>Pressure: {weather.main.pressure} hPa</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;