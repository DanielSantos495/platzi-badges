import React from 'react';

import conf from '../images/badge-header.svg'
import './styles/NotFound.css';


function NotFound() {

  return (

    <div className="NotFound__background">

      <div className="NotFound__content">
        <img src={conf} alt="Conf" />
        <h1>404 Not Found</h1>
      </div>

    </div>
  );

}

export default NotFound;