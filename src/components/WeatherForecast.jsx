// WeatherForecast.js
import React, { useEffect, useState } from 'react';
import './WeatherForecast.css';

const WeatherForecast = ({ city, setPage }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = '6557810176c36fac5f0db536711a6c52';
    const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast';

    const getWeatherData = async () => {
      try {
        const response = await fetch(`${apiUrl}?q=${city}&APPID=${apiKey}`);
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setError('Error fetching weather data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    getWeatherData();
  }, [city]);

  const formatTemperature = (kelvin) => {
    return `${(kelvin - 273.15).toFixed(2)}°C`;
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  };

  if (loading) {
    return <p>updating..</p>;
  }

  if (error) {
    return (
      <div className="forecast-container">
        <div className="error-card">
          <p className="error-message">{error}</p>
          <button onClick={() => setPage('input')}>Go Back</button>
        </div>
      </div>
    );
  }

  return (
    <div className="forecast-container">
      <div className="weather-card">
        <h1>{weatherData.city.name}</h1>
        <div className="current-weather">
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/214/214363.png" alt="Temperature" />
            <p>Temperature: {formatTemperature(weatherData.list[0].main.temp)}</p>
          </div>
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/1808/1808480.png" alt="Humidity" />
            <p>Humidity: {weatherData.list[0].main.humidity}%</p>
          </div>
          <div>
            <img src="https://abhishekchoudhary0272.github.io/Weather-App/assets/wind.png" alt="Wind Speed" />
            <p>Wind Speed: {weatherData.list[0].wind.speed} m/s</p>
          </div>
        </div>

        
        <button onClick={() => setPage('input')}>Go Back</button>
      </div>
    </div>
  );
};

export default WeatherForecast;