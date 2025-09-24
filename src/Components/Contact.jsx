import React, { useState } from "react";
import "../styles/Contact.css";
import theme_pattern from "../assets/theme_pattern.svg";
import mail_icon from "../assets/mail_icon.svg";
import location_icon from "../assets/location_icon.svg";
import call_icon from "../assets/call_icon.svg";

const Contact = () => {
  const [result, setResult] = useState("");

  const onsubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "edefad0d-dbef-4a5c-b7b3-b0cb681b68f2");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (response.success) {
        setResult("Form submitted successfully!");
        event.target.reset(); // clear form
      } else {
        setResult("Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("Error sending message.");
      console.error(error);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message about anything you want me to work on. You can
            contact me anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>hey@juber.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+91 8600710244</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Jawahar Nagar, Kolhapur, Maharashtra, India</p>
            </div>
          </div>
        </div>

        <form onSubmit={onsubmit} className="contact-right">
          <label>Your Name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            required
          />

          <label>Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            required
          />

          <label>Write your message</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
            required
          ></textarea>

          <button type="submit" className="contact-submit">
            Submit Now
          </button>
          <span className="form-result">{result}</span>
        </form>
      </div>
    </div>
  );
};

export default Contact;
