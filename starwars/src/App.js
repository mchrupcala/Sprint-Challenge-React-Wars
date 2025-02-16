import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import NewCharacter from "./components/NewCharacter";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [peopleData, setPeopleData] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(res => {
        console.log(res);
        const people = res.data.results;
        setPeopleData(people);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div className="ui cards">
        {peopleData.map(item => (
          <NewCharacter
            name={item.name}
            eyes={item.eye_color}
            hair={item.hair_color}
            mass={item.mass}
          />
        ))}
      </div>
    </div>
  );
};

//////////////////////////////////////////////////////////////////////
//Dummy Code for confirming the test works for this file.
// function sum(a, b) {
//   return a + b;
// }
// module.exports = sum;
//////////////////////////////////////////////////////////////////////

export default App;
