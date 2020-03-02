import React from "react";

import  App  from './App';
const input = document.querySelector('input[type="file"]');
const jsonOutput = document.querySelector('.json');
const dropArea = document.querySelector('#drop-area');
window.addEventListener(
  'dragover',
  function(event) {
  event = event || event;
  event.preventDefault();
  },
  false,
  );

  window.addEventListener(
  'drop',
  function(event) {
  event = event || event;
  event.preventDefault();
  },
  false,
  );

  const handleDrop = e => handleFiles(e.dataTransfer.files);

  input.addEventListener('change', ({ target: { files } }) => handleFiles(files));


  function handleFiles (files) {
  const reader = new FileReader();
  reader.onload = function() {
  jsonOutput.innerText = reader.result;
  };
  reader.readAsText(files[0]);
  }

  function resetLog() {
  document.getElementById('files').innerHTML ='';
  }

  function appendLog(msg) {
  document.getElementById('files').innerHTML += '<br>' + msg;
  }

export default App;

/*import Info from "./comp/info";
import Form from "./comp/form";
import Weather from "./comp/weather";

const API_KEY ="82b797b6ebc625032318e16f1b42c016";


class App extends React.Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    pressure: undefined,
    sunset: undefined,
    error: undefined
  }

gettingWeather = async (event) => {
  event.preventDefault();
  const city = event.target.elements.city.value;

  if(city){
    const api_url = await
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_url.json();

    var sunset = data.sys.sunset;
    var date = new Date(data.sys.sunset*1000);
          var hours = date.getHours(); // Minutes part from the timestamp
          var minutes = "0" + date.getMinutes(); // Seconds part from the timestamp
          var seconds = "0" + date.getSeconds();
          var sunset_date = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

      var sunrise = data.sys.sunrise;
        var date = new Date(data.sys.sunrise*1000);
          var hours = date.getHours(); // Minutes part from the timestamp
          var minutes = "0" + date.getMinutes(); // Seconds part from the timestamp
          var seconds = "0" + date.getSeconds();
          var sunrise_date = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    console.log(data);

      this.setState({
      temp: data.main.temp,
      city: data.name,
      country: data.sys.country,
      sunrise: sunrise_date,
      pressure: data.main.pressure,
      sunset: sunset_date,
      error: ""
    });
  }
}


  render() {
    return (
      <div>
      <Info/>
      <Form weatherMethod={this.gettingWeather}/>
      <Weather
      temp={this.state.temp}
      city={this.state.city}
      country={this.state.country}
      sunrise={this.state.sunrise}
      pressure={this.state.pressure}
      sunset={this.state.sunset}
      error={this.state.error}
      />
      </div>
    );
  }
}
*/
