import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import "./Applicant.css";

class ButtonComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      isLoading: false,
    };
    this.click = this.click.bind(this);
  }

  click() {
    this.setState({ isLoading: true });

    axios
      .post("<MY_URL>:3900/find/rapinfo", {})
      .then((response) => {
        this.setState({ data: response.data, isLoading: false });
      })
      .catch((err) => {
        this.setState({ data: err, isLoading: false });
      });
  }

  render() {
    return (
      <div>
        <button onClick={this.click} disabled={this.state.isLoading}>
          {" "}
          click me{" "}
        </button>
        {this.state.data}
      </div>
    );
  }
}

const StyledApplicant = styled.div`
  margin: 1rem;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 1rem;

  &.red {
    background-color: red;
  }

  &.green {
    background-color: green;
  }
  @media (min-width: 500px) {
    width: 450px;
  }
`;

const applicant = (props) => {
  let classes = ["Applicant "];
  classes.push(props.approved ? "green" : "red");
  let date = new Date(props.created);

  return (
    <StyledApplicant className={classes.join(" ")}>
      <p>
        <strong>Name:</strong> {props.firstName} {props.lastName}
        <br />
        <strong>Business Name:</strong> {props.businessName}
        <br />
        <strong>Approval Status:</strong>
        {props.approved ? " Approved" : " Unapproved"}
        <br />
        <strong>Application Date:</strong> {props.created}
      </p>

      {!props.approved ? (
        <a href={`http://localhost:5000/api/applicant/${props.id}/approve`}>
          Approve
        </a>
      ) : null}
    </StyledApplicant>
  );
};

export default applicant;
