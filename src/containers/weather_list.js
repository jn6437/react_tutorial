import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../components/chart";

class WeatherList extends Component {
  renderWeather(cityData) {
    /*
    [city:
    list: [
        {main:{temp,humidity,pressure}},
        {main:{temp,humidity,pressure}},
        {main:{temp,humidity,pressure}},
        {main:{temp,humidity,pressure}},
    ]]
    */
    const name = cityData.city.name;
    //celcius conversion _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp- 273);
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);

    return (
      <tr key={name}>
        <td> {name}</td>
        <td>
          <Chart data={temps} color="yellow" units="K" />
        </td>
        <td>
          <Chart data={pressures} color="red" units="hPa" />
        </td>
        <td>
          <Chart data={humidities} color="green" units="%" />
        </td>
      </tr>
    );
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th> City </th>
            <th> Temparature (K) </th>
            <th> Pressure (hPa)</th>
            <th> Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {/*for each onject in props.weather, call renderWeather function*/}
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}
/*
function mapStateToProps(state) {
  return { weather: state.weather };
}
*/
//es6
function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
