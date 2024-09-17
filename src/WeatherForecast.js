import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu Icon </div>
          <WeatherIcon code="01d" size={36} />
          <div className="WaetherForecat-temperatures">
            <span className="WaetherForecat-temperature-max">19°</span>
            <span className="WaetherForecat-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
