import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import "../App.css";

const NewCharacter = props => {
  return (
    <div className="ui card">
      <div className="content">
        <div className="header">{props.name}</div>
        <div className="meta">Mass: {props.mass}</div>
        <p className="description">
          Hair Color: {props.hair}, Eye color: {props.eyes}
        </p>
      </div>
    </div>
  );
};

export default NewCharacter;
