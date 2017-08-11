import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App.react";
import Plants from "./components/plant/Plants.react";

const FourOhFour = () => <h1>404</h1>;

const Application = () =>
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/plants" component={Plants} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>;

ReactDOM.render(<Application />, document.getElementById("root"));
