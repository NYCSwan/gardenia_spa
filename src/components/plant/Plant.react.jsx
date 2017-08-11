import React from "react";

const Plant = props =>
  <div className="plant panel-body">
    <img
      className={`plant_{props.plant['OBJECTID']}`}
      alt={`${props.PhotoCredit01}`}
      src={`http://placehold.it/300x200&text=plant${props.OBJECTID}`}
    />
    <h2>
      {props.Common_Name}
    </h2>
    <p>
      Type: {props.Plant_Type}
    </p>
  </div>;

export default Plant;
