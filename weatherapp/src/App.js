import React from 'react';
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "9772d100161c720fe30bbe185ed8c097";

class App extends React.Component {
  // constructor(){
  //   this.super();
  //   this.getWeather = this.getWeather.bind(this);
  // };
  
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const data = await api_call.json();
    console.log(data);
    
    if(city && country){
      this.setState({
        temperature: ( data.main.temp-32 )*5/9,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    }
    else{
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the values"
      });   
    }
  };

  render() {
    return (
      <div>
        <div class="w3-container w3-black w3-border w3-border-black w3-padding-32">
          <Titles />
          <Form getWeather={this.getWeather} />
          <Weather 
            temperature = { this.state.temperature }
            city = { this.state.city }
            country = { this.state.country }
            humidity = { this.state.humidity }
            description = { this.state.description }
            error = { this.state.error }
          />
        </div>
      </div>
    );
  }
}

export default App;
