import React from "react";
import axios from "axios";
import moment from "moment";
import styled from "styled-components";
import "./Applicant.css";

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

class Applicant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
        this.setState({
          data: response.data,
          isLoading: false,
          approved: true,
        });
      })
      .catch((err) => {
        this.setState({ data: err, isLoading: false });
      });
  };

  render() {
    let classes = ["Applicant "];
    classes.push(this.state.approved ? "green" : "red");
    const date = moment(this.props.created);
    const cleanDate = date.utcOffset("-0800").format("llll");

    return (
      <StyledApplicant className={classes.join(" ")}>
        <p>
          <strong>Name:</strong> {this.props.firstName} {this.props.lastName}
          <br />
          <strong>Business Name:</strong> {this.props.businessName}
          <br />
          <strong>Approval Status:</strong>
          {this.props.approved ? " Approved" : " Unapproved"}
          <br />
          <strong>ID:</strong>
          {this.props.id}
          <br />
          <strong>Application Date:</strong> {cleanDate}
        </p>

        {!this.props.approved ? (
          <button
            onClick={this.approveApplicationHandler}
            disabled={this.state.isLoading}
            id={this.props.id}
          >
            Approve
          </button>
        ) : null}
      </StyledApplicant>
    );
  }
}

export default Applicant;
