import React from 'react';

//styles
import s from './styles/Footer.module.scss'

export const Footer = () => (
  <footer className={s.wrap}>
    <div className="content">
      <div className={s.inner}>
        <nav className={s.nav}>
          <a className={s.navLink} href="#">Home</a>
          <a className={s.navLink} href="#">About</a>
          <a className={s.navLink} href="#">Contact us</a>
        </nav>
        <div className={s.copyright}>@ Copyright 2019</div>
      </div>
    </div>
  </footer>
);

export default Footer;