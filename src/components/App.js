import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import "../styles/App.styles.scss";

import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { FaEnvelope, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import Home from "./Home.component";
import Footer from "./Footer.component";
import Audio from "./Audio.component";
import Music from "./Music.component";
import Writing from "./Writing.component";
import Contact from "./Contact.component";

function App() {
  return (
    <div className="content-container">
      <div className="overlay">
        <div className="app-container">
          <div className="header-container">
            <div className="header-title-container">
              <h1>
                <a href="/">JOHN BARTMANN</a>
              </h1>
              <h2>CONTENT // CREATIVE</h2>
            </div>
            <div className="header-contact-container">
              <a href="mailto:music@johnbartmann.com" target="_blank">
                <FaEnvelope className="m-1" fontSize="1rem" />
              </a>
              <a href="https://wa.link/h4thrk" target="_blank">
                <FaWhatsapp className="m-1" fontSize="1rem" />
              </a>
              <a
                href="https://www.linkedin.com/in/johnbartmann/"
                target="_blank"
              >
                <FaLinkedin className="m-1" fontSize="1rem" />
              </a>
            </div>
          </div>
          <BrowserRouter>
            <div className="navbar">
              <Link to="/writing">
                <h1 className="btn-nav">WRITING</h1>
              </Link>
              <Link to="/audio">
                {" "}
                <h1 className="btn-nav">AUDIO</h1>
              </Link>
              <Link to="/music">
                {" "}
                <h1 className="btn-nav">MUSIC</h1>
              </Link>
              <Link to="/contact">
                {" "}
                <h1 className="btn-nav">CONTACT</h1>
              </Link>
            </div>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/writing" element={<Writing />} />
              <Route path="/audio" element={<Audio />} />
              <Route path="/music" element={<Music />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </BrowserRouter>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default App;
