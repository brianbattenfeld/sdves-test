import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import AllApplicants from "./AllApplicants/AllApplicants";

class App extends Component {
  state = {
    name: "Brian",
    items: [
      { id: "asdfasd", name: "Brian", age: 32 },
      { id: "sdfgh", name: "David", age: 55 },
      { id: "sertert", name: "Bethany", age: 38 },
    ],
    applicants: {},
    otherState: "some other value",
    displayAllApplicants: false,
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/applicant/all")
      .then((res) => {
        console.log(res);
        this.setState({ applicants: res.data });
      })
      .catch((err) => {
        console.log(err);
      })
      .then((res) => {
        console.log("wrap up");
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AllApplicants applicants={this.state.applicants} />
        </header>
      </div>
    );
  }
}

export default App;
