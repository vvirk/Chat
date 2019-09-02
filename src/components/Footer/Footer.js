import React from 'react';
 
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="content">
        <div className="footer-inner">
          <nav className="footer-nav">
            <a className="footer-nav-link" href="#">Home</a>
            <a className="footer-nav-link" href="#">About</a>
            <a className="footer-nav-link" href="#">Contact us</a>
          </nav>
          <div className="copyright">@ Copyright 2019</div>
        </div>
      </div>
    </footer>);
}

export default Footer;