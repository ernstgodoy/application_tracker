import React from 'react';
import svg from '../../../../assets/images/working.svg'

const Landing = (props) => {
  const {
    logged_in,
    sign_up_route
  } = props
  return (
    <React.Fragment>
      <div className="landing-page">
        <div className="landing-container">
          <div className="landing-content">
            <img src={svg}/>
          </div>
          <div className="landing-content">
            <h1>Simplify tracking your job search. <span>Ditch the excel sheets and create your free account to begin tracking your job applications.</span></h1>
              {!logged_in && 
                <a className="button" href={ sign_up_route }>Get Started</a>
              }
              {logged_in && 
                <a className="button" href='/dashboard'>Go To Dashboard</a>
              }
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Landing;