import React from "react";
import "./Component1.css";

const component1 = (props) => {
  return (
    <div className="Component1" size={props.size}>
      <h1>There are {props.size} items for the sample component.</h1>
    </div>
  );
};

export default component1;
