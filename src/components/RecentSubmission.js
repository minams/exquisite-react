import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = (props) => {
  if (props.lastLine) {
    return (
      <div className="RecentSubmission">
        <h3>The Most Recent Submission</h3>
        <p className="RecentSubmission__submission">{props.lastLine}</p>
      </div>
    );
  } else {
    return null
  };
}

export default RecentSubmission;
