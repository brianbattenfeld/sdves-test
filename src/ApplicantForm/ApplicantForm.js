import React, { Component } from "react";
import axios from "axios";
import "./ApplicantForm.css";

const { v4: uuidv4 } = require("uuid");

class ApplicantForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        firstName: "",
        lastName: "",
        businessName: "",
        ein: "",
        commandId: uuidv4(),
      },
    };

    this.handleChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      name: this.state.name,
    };
    axios.post("http://localhost:5000/api/applicant", { user }).then((res) => {
      console.log(res);
      console.log(res.data);
      window.location = "/retrieve"; //This line of code will redirect you once the submission is succeed
    });
  };
  handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;

    // this.setState({
    //   [name]: value,
    // });
  };

  render() {
    return (
      <div>
        <h2>Submit a new application</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="fieldWrapper">
            <label>
              First Name
              <input
                type="text"
                name="firstName"
                value={this.state.formData.firstName}
                onChange={this.handleInputchange}
                placeholder="First Name"
              />
            </label>
          </div>

          <div className="fieldWrapper">
            <label>
              Last Name
              <input
                type="text"
                name="lastName"
                value={this.state.formData.lastName}
                onChange={this.handleInputchange}
                placeholder="Last Name"
              />
            </label>
          </div>

          <div className="fieldWrapper">
            <label>
              Business Name
              <input
                type="text"
                name="businessName"
                value={this.state.formData.businessName}
                onChange={this.handleInputchange}
                placeholder="Business Name"
              />
            </label>
          </div>

          <div className="fieldWrapper">
            <label>
              EIN (must be 6 characters)
              <input
                type="number"
                name="ein"
                value={this.state.formData.ein}
                onChange={this.handleInputchange}
                placeholder="EIN (must be 6 characters)"
              />
            </label>
          </div>

          <div className="fieldWrapper">
            <label>
              Command ID (auto generated)
              <input
                type="text"
                name="commandId"
                value={this.state.formData.commandId}
              />
            </label>
          </div>

          <input type="submit" value="Submit Application" />
        </form>
      </div>
    );
  }
}

export default ApplicantForm;
