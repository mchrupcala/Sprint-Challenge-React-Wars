import React, { useState, useEffect } from "react";
import App from "./App.css";
import { render, wait } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import { Item } from "semantic-ui-react";

const test1 = [
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "41.9BBY",
    gender: "male",
    homeworld: "https://swapi.co/api/planets/1/",
    films: [
      "https://swapi.co/api/films/5/",
      "https://swapi.co/api/films/4/",
      "https://swapi.co/api/films/6/"
    ],
    species: ["https://swapi.co/api/species/1/"],
    vehicles: [
      "https://swapi.co/api/vehicles/44/",
      "https://swapi.co/api/vehicles/46/"
    ],
    starships: [
      "https://swapi.co/api/starships/59/",
      "https://swapi.co/api/starships/65/",
      "https://swapi.co/api/starships/39/"
    ],
    created: "2014-12-10T16:20:44.310000Z",
    edited: "2014-12-20T21:17:50.327000Z",
    url: "https://swapi.co/api/people/11/"
  },
  {
    name: "Wilhuff Tarkin",
    height: "180",
    mass: "unknown",
    hair_color: "auburn, grey",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "64BBY",
    gender: "male",
    homeworld: "https://swapi.co/api/planets/21/",
    films: ["https://swapi.co/api/films/6/", "https://swapi.co/api/films/1/"],
    species: ["https://swapi.co/api/species/1/"],
    vehicles: [],
    starships: [],
    created: "2014-12-10T16:26:56.138000Z",
    edited: "2014-12-20T21:17:50.330000Z",
    url: "https://swapi.co/api/people/12/"
  }
];

describe("App", () => {
  it("gets text", () => {
    const { getsByText } = render(<App test1={test1} />);
  });
});
