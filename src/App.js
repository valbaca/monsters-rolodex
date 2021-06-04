import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: "Frankenstein",
          id: "0",
        },
        {
          name: "Dracula",
          id: "1",
        },
        {
          name: "Zombie",
          id: "2",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
