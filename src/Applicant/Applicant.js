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
      approved: this.props.approved,
    };
    this.approveApplicationHandler = this.approveApplicationHandler.bind(this);
  }

  approveApplicationHandler = () => {
    this.setState({ isLoading: true });

    axios
      .post(`http://localhost:5000/api/applicant/${this.props.id}/approve`, {})
      .then((response) => {
        this.setState({ data: response.data, isLoading: false });
      })
      .catch((err) => {
        this.setState({ data: err, isLoading: false });
      });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.approveApplicationHandler}
          disabled={this.state.isLoading}
        >
          Approve
        </button>
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
        <strong>ID:</strong>
        {props.id}
        <br />
        <strong>Application Date:</strong> {props.created}
      </p>

      <ButtonComponent id={props.id} />
    </StyledApplicant>
  );
};

export default applicant;
