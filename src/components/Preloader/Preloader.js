import React from 'react';

// images
import Spinner from './images/Spinner.svg';

export const Preloader = () => (
  <div className="preloader-wrap">
    <div className="preloader-inner">
      <img src={Spinner} alt="Spinner" />
    </div>
  </div>
);

export default Preloader;
