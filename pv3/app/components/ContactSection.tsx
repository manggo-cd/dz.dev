import React from "react";

const ContactSection = () => {
  return (
    <div className="flex flex-row justify-center my-10">
      <img src="assets/contact.svg" />
      <div className="flex flex-col justify-end">
        <a
          href="https://www.linkedin.com/in/bernardliu217/"
          target="_blank"
          className="social-link"
        >
          LINKEDIN
        </a>
        <a
          href="https://github.com/bliu217"
          target="_blank"
          className="social-link"
        >
          GITHUB
        </a>
        <a href="/" target="_blank" className="social-link">
          RESUME
        </a>
      </div>
    </div>
  );
};

export default ContactSection;
