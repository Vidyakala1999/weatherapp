// CityInput.js
import React, { useState } from 'react';
import './CityInput.css';

const CityInput = ({ setCity, setPage }) => {
  const [inputCity, setInputCity] = useState('');

  const handleGetForecast = () => {
    setCity(inputCity);
    setPage('forecast');
  };

  return (
    <div className="city-input-container">
      <div className="input-card">
        <h1>Weather Forecast</h1>
        <input
          type="text" className='form-control'
          placeholder="Enter city"
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
        />
        <button onClick={handleGetForecast}>SUBMIT</button>
      </div>
    </div>
  );
};

export default CityInput;