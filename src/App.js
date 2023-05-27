import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [currW, nextW] = useState('');
  useEffect(() => {
    (async () => {
      const pr = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Kolkata&units=metric&APPID=9723673fa52d46fb73759eb78bdef3b2');
      const response = await pr.json();
      nextW(response);
    })();
  },[])
  console.log(currW);

  return (
    <div className="App">
      <h1>Weather App</h1>

      <h4>Location : Kolkata, India</h4>
      <h4>Temperature : {currW.main.temp}</h4>
      <h4>Humidity : {currW.main.humidity}%</h4>
      <h4>Wind Speed : {currW.wind.speed}</h4>
      <h4>Description : {currW.weather[0].description}</h4>
      <p></p>
    </div>
  );
}

export default App;
