import React from "react";
import plants from "./plants.json";
import Plant from "./Plant.react";
import map from "lodash/map";
import { string } from "prop-types";

import "./Plants.css";

const Plants = () =>
  <div className="plants-container">
    <h3>PLANTS Galore!</h3>

    {plants.map((plant, key) => <Plant key={plant.OBJECTID} {...plant} />)}
  </div>;

export default Plants;
