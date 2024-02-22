// App.js
import React, { useState } from 'react';


import CityInput from './components/CityInput';
import WeatherForecast from './components/WeatherForecast';

function App() {
  const [page, setPage] = useState('input'); // 'input' or 'forecast'
  const [city, setCity] = useState('');

  return (
    <div>
      {page === 'input' && <CityInput setCity={setCity} setPage={setPage} />}
      {page === 'forecast' && <WeatherForecast city={city} setPage={setPage} />}
    </div>
  );
}

export default App;