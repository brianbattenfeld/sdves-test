import React from "react";
import "./AllApplicants.css";
import Applicant from "../Applicant/Applicant";

const allApplicants = (props) => {
  let applicants = null;

  if (props.applicants.totalCount > 0) {
    applicants = props.applicants.applications.map((applicant, index) => {
      return (
        <Applicant
          id={applicant.id}
          firstName={applicant.firstName}
          lastName={applicant.lastName}
          businessName={applicant.businessName}
          created={applicant.created}
          approved={applicant.approved}
          key={applicant.id}
        />
      );
    });
  }
  return (
    <div className="AllApplicants" size={props.size}>
      <h2>
        Total number of applicants:
        <span title="item-count"> {props.applicants.totalCount}</span>
      </h2>
      {props.applicants.totalCount ? <div>{applicants}</div> : null}
    </div>
  );
};

export default allApplicants;
