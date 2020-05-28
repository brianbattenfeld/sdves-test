import React from "react";
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

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // const formData = JSON.stringify(this.state.formData);
    const formData = this.state.formData;
    console.log(formData);
    axios
      .post("http://localhost:5000/api/applicant", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .then((res) => {
        console.log("wrap up");
      });
  };

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    let formData = { ...this.state.formData };
    formData[name] = value;

    this.setState({
      formData: formData,
    });
  }

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
                onChange={this.handleInputChange}
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
                onChange={this.handleInputChange}
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
                onChange={this.handleInputChange}
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
                onChange={this.handleInputChange}
                placeholder="EIN (must be 6 characters)"
                min="100000000"
                max="999999999"
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
                readOnly
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
