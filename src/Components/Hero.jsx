import React from "react";
import "../styles/Hero.css";
import profile_img from "../assets/juber_crop.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-img-container">
        <img src={profile_img} alt="" />
      </div>
      <h1>
        <span>I'm Juber Mulla,</span>Backend Developerbased in Hyderabad India
      </h1>
      <p>
        I am a Backend Developer from Kolhapur MH, Hyderabad with 2 years of
        experience in multiple companies like Suyotech Solutions and
        Firstclusive Branding.
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
