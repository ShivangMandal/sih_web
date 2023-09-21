import React from 'react';
import logo2 from '../../logo2.svg';
import './footer.css';

const Footer = () => (
  <div className="lmls__footer section__padding">
    <div className="lmls__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future Features before others</h1>
    </div>

    <div className="lmls__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="lmls__footer-links">
      <div className="lmls__footer-links_logo">
        <img src={logo2} alt="lmls_logo" />
        <p>India, <br /> All Rights Reserved</p>
      </div>
      <div className="lmls__footer-links_div">
        <h4>Links</h4>
        <p>Play Game</p>
        <p>Social Media</p>
        <p>Contact</p>
      </div>
      <div className="lmls__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="lmls__footer-links_div">
        <h4>Get in touch</h4>
        <p>India</p>
        {/* <p>085-132567</p> */}
        <p>info@lawmans.in</p>
      </div>
    </div>

    <div className="lmls__footer-copyright">
      <p>@2023 LAWMAN'S LEGACY. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
