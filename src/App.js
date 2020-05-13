import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Component1 from "./Component1/Component1";

class App extends Component {
  state = {
    name: "Brian",
    items: [
      { id: "asdfasd", name: "Brian", age: 32 },
      { id: "sdfgh", name: "David", age: 55 },
      { id: "sertert", name: "Bethany", age: 38 },
      { id: "zsd", name: "Steven", age: 18 },
    ],
    otherState: "some other value",
    displayComponent1: false,
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <h2>
            Number of items is{" "}
            <span title="item-count">{this.state.items.length}</span>
          </h2>
          <Component1
            name={this.state.name}
            key={this.state.id}
            size={this.state.items.length}
          />
        </header>
      </div>
    );
  }
}

export default App;
