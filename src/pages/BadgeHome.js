import React from 'react';
import { Link } from 'react-router-dom';

import './styles/BadgeHome.css';

import antronauts from '../images/astronauts.svg';
import platziconfLogo from '../images/platziconf-logo.svg';

class BadgeHome extends React.Component {

  render() {
    return (

      <div className="BadgeHome">

       <div className="BadgeHome__logo">
          <img src={platziconfLogo} alt="" />
          <div className="BadgeHome__logo-present">
            <h1>PRINT YOUR BADGES</h1>
            <p>
              The easiest way to manage your conference
            </p>
            <Link className="btn btn-primary BadgeHome__btn" to="/badges">
            Start now
            </Link>
          </div>
       </div>

       <div>
        <img src={antronauts} alt="" />
       </div>

      </div>
    );

  }

}

export default BadgeHome;