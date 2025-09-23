import React from "react";
import "../styles/Footer.css";
import footer_logo from "../assets/footer_logo.svg";
import user_icon from "../assets/user_icon.svg";
const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="" />
          <p>
            I am a Backend developer from, India with 2 years of experience in
            companies like suyotech solutions ,racchabanda ,firstclusive
            branding.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subcribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2023 Juber Mulla.All rights reserved
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect to me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
