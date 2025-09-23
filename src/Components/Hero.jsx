import React from "react";
import "../styles/Hero.css";
import profile_img from "../assets/juber_crop.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero = () => {
  return (
    <div id="home" className="hero">
      <div className="hero-img-container">
        <img src={profile_img} alt="" />
      </div>
      <h1>
        <span>I'm Juber Mulla,</span>Backend Developer based in Hyderabad India
      </h1>
      <p>
        I am a Backend Developer from Kolhapur MH, Hyderabad with 2 years of
        experience in multiple companies like Suyotech Solutions and
        Firstclusive Branding.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
