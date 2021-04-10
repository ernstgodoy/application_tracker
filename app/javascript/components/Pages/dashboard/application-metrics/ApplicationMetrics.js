import React from 'react';

const ApplicationMetrics = (props) => {
  const { data } = props

  const isPlural = (num) => {
    return num !== 1 ? 'applications' : 'application' 
  }

  return (
    <div>
      <ul>
        <li>You are currently tracking <b>{ data.total_applications }</b> { isPlural(data.total_applications) }.</li>
        { Object.keys(data.statuses).map((k, i) => {
          return (
            <li id="status-test" key={i}><b>{data.statuses[k]}</b> { isPlural(data.statuses[k]) } with the status of <b>{ k }</b>.</li>
          )
        })}
      </ul>
    </div>
  );
};

export default ApplicationMetrics;