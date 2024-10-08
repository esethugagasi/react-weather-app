import React, { Component } from "react";
import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="LIsbon" />
        <footer>
          This project was coded by{" "}
          <a href="https://esethugagasi-porftlio.netlify.app" target="_blank">
            Esethu Gagasi
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/esethugagasi/react-weather-app"
            target="_blank"
          >
            open surce on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
