import { FaEnvelope, FaArrowRight } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="footer-title">
          <h1>Motivated to deliver.</h1>

          <p className="cta-btn">
            <a href="mailto:music@johnbartmann.com" target="_blank">
              <FaEnvelope className="m-1" fontSize="2rem" />
            </a>
            <br />
            <a href="mailto:music@johnbartmann.com" target="_blank">
              music@johnbartmann.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
