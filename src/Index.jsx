import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App.react";

const Application = () =>
  <BrowserRouter>
    <div className="app">
      <Route exact path="/" component={App} />
    </div>
  </BrowserRouter>;

ReactDOM.render(<Application />, document.getElementById("root"));
