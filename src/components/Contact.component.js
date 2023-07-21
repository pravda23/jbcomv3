import {
  FaEnvelope,
  FaArrowRight,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="single-page-container">
      <div className="hero-title">
        <h1>Motivated to deliver.</h1>

        <p className="cta-btn">
          <a href="mailto:hi@johnbartmann.com" target="_blank">
            <FaEnvelope className="m-2 p-1" fontSize="2rem" />
            &nbsp;hi@johnbartmann.com
          </a>
          <a href="https://wa.link/h4thrk" target="_blank">
            <FaWhatsapp className="m-2 p-1" fontSize="2rem" />
            &nbsp;+2782 217 9116
          </a>
          <a href="https://www.linkedin.com/in/johnbartmann/" target="_blank">
            <FaLinkedin className="m-2 p-1" fontSize="2rem" />
            &nbsp;John Bartmann
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
