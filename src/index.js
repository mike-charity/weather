import React from "react";
import ReactDOM from "react-dom/client";

import Weather from "./Weather";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1> Weather </h1>
    <Weather city="paris" />
    <footer>
      This project was coded by{" "}
      <a href=" https://www.shecodes.io/" target="_blank" rel="noreferrer">
        charity
      </a>{" "}
      and is{" "}
      <a
        href="https://github.com/mike-charity/weather.git"
        target="_blank"
        rel="noreferrer"
      >
        open-sourced on Github
      </a>
    </footer>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
