import React from "react";

const ContactSection = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center lg:items-end gap-5 lg:gap-0 my-10">
      <div className="flex justify-center">
        <img
          src="assets/contact.svg"
          className="lg:w-full lg:h-full w-3/4 h-3/4"
        />
      </div>

      <div className="flex lg:flex-col flex-row gap-10 lg:gap-0 lg:justify-end justify-center">
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
