import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {
  FaEnvelope,
  FaArrowRight,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
import "../styles/App.styles.scss";

const Footer = () => {
  return (
    <>
      <a href="mailto:music@johnbartmann.com" target="_blank">
        <FaEnvelope className="m-1" fontSize="1rem" />
        music@johnbartmann.com
      </a>
      <a href="https://wa.link/h4thrk" target="_blank">
        <FaWhatsapp className="m-1" fontSize="1rem" />
        +2782 217 9116
      </a>
      <a href="https://www.linkedin.com/in/johnbartmann/" target="_blank">
        <FaLinkedin className="m-1" fontSize="1rem" />
        John Bartmann
      </a>
    </>
  );
};

export default Footer;
