import { FaEnvelope, FaArrowRight, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="hero-title">
          <h1>Motivated to deliver.</h1>

          <p className="cta-btn">
            <a href="mailto:music@johnbartmann.com" target="_blank">
              <FaEnvelope className="m-1" fontSize="2rem" />
              music@johnbartmann.com
            </a>
            <a href="https://wa.link/h4thrk" target="_blank">
              <FaWhatsapp className="m-0" fontSize="2rem" />
              +2782 217 9116
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
